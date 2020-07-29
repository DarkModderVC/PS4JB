var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
	alert("Jailbreak Complete!");
    } else{
        alert("Jailbreak failed! Reboot your PS4 and try again.");
    }
}

function payload_finished()
{
    setTimeout(function(){alert("Load Successful!!"); }, 4000);
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
{	
	confirmJailbreak = confirm("Shall We Start with PS4 Jailbreak 6.72?\nNote: Click 'Cancel' if Jailbreak is already Complete after Starting your PS4!!")
	if(confirmJailbreak){
		document.write(JB('set1')+JB('set2')+JB('set3')+JB('set4')+JB('jb')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_netcat()
{
    document.write(PAYLOAD('mira')+PAYLOAD('c-code')+'<script>alert("Awaiting Payload !!");</scr'+'ipt>');
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
		document.write('<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
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
						'</table>');
	}
}

function load_payload(payload)
{
    document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');
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
		document.write('<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
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
						'</table>');
	}
}
