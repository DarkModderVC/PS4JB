function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
		document.cookie = "isDone=Yes;";
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Exploit Complete ✔"; }, 500);
	}else{
        alert("Jailbreak failed! Reboot your PS4 and try again.");
	}
}

function payload_finished()
{
	setTimeout(function(){document.getElementById("progress").innerHTML="Load Successful!!"; }, 3000);
	setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Payload Loaded Succesfully ✔"; }, 5000);
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_JB()
{	var isDone=getCookie("isDone");
	if (isDone == "") {
		if(confirm("Shall We Start with PS4 Jailbreak 6.72?\nNote: Click 'Cancel' if Jailbreak is already Complete after Starting your PS4!!")){			document.write(JB('jb')+'<script>jb_finished();</scr'+'ipt>');
			document.write(JB('jb')+'<script>jb_finished();</scr'+'ipt>');	
		}
	}
}

function load_netcat()
{
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">Loading! Please Wait!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">Disable Updates</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Loading! Please Wait!!";</scr'+'ipt>');
	}
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD('c-code')+'<script>document.getElementById("progress").innerHTML="Awaiting Payload!! Send Payload To Port 9021";</scr'+'ipt>');}, 500);
}

function load_payload(payload)
{	
    if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">Loading! Please Wait!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">Disable Updates</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Loading! Please Wait!!";</scr'+'ipt>');
	}
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');}, 500);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
