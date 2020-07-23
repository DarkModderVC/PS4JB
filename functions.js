var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
		alert("Jailbreak Complete!");
		if (window.jQuery != undefined) {
			alert('Page Caching started !! Click OK and Leave the page as such for few seconds');
			setTimeout(function(){alert("Page Cached Successfully!!"); }, 12000);
		}
	} else
        alert("Jailbreak failed! Reboot your PS4 and try again.");
}

function mira_finished()
{
	setTimeout(function(){alert("Load Successful!!"); }, 8000);
}

function payload_finished()
{
    alert("Load Successful!!");
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function MIRA(x)
{
    return SC('mira/'+x);
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_mira()
{
    document.write(MIRA('mira')+MIRA('mira2')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
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
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">Thanks a lot @blimblim04 of PSXHAX !! OFFLINE EXPLOIT Released, the scripts & payloads gets automatically cached when you stay on this page !!</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>blimblim04 of PSXHAX &nbsp;&nbsp;</td>'+
						'<td>$400</td></tr><tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_mira(); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_mira_nohb(); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:28%">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
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
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'enablebrowser\'); return false" style="width:43%">Enable Browser</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'fanthreshold\'); return false" style="width:43%">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'kernelclock\'); return false" style="width:43%">Kernel Clock</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:43%">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'rifrenamer\'); return false" style="width:43%">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_mira_nohb()
{
    document.write(MIRA('mira')+MIRA('miranohb')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
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
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">Thanks a lot @blimblim04 of PSXHAX !! OFFLINE EXPLOIT Released, the scripts & payloads gets automatically cached when you stay on this page !!</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>blimblim04 of PSXHAX &nbsp;&nbsp;</td>'+
						'<td>$400</td></tr><tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_mira(); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_mira_nohb(); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:28%">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
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
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'enablebrowser\'); return false" style="width:43%">Enable Browser</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'fanthreshold\'); return false" style="width:43%">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'kernelclock\'); return false" style="width:43%">Kernel Clock</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:43%">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'rifrenamer\'); return false" style="width:43%">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_JB()
{	
	confirmJailbreak = confirm("Shall We Start with PS4 Jailbreak 6.72?\nNote: Click 'Cancel' if Jailbreak is already Complete after Starting your PS4!!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}else if (window.jQuery != undefined) {
		alert('Page Caching started !! Click OK and Leave the page as such for few seconds');
		setTimeout(function(){alert("Page Cached Successfully!!"); }, 12000);
	}
}

function load_netcat()
{
    document.write(MIRA('mira')+MIRA('c-code')+'<script>alert("Awaiting Payload !!");</scr'+'ipt>');
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
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">Thanks a lot @blimblim04 of PSXHAX !! OFFLINE EXPLOIT Released, the scripts & payloads gets automatically cached when you stay on this page !!</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>blimblim04 of PSXHAX &nbsp;&nbsp;</td>'+
						'<td>$400</td></tr><tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_mira(); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_mira_nohb(); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:28%">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
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
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'enablebrowser\'); return false" style="width:43%">Enable Browser</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'fanthreshold\'); return false" style="width:43%">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'kernelclock\'); return false" style="width:43%">Kernel Clock</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:43%">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'rifrenamer\'); return false" style="width:43%">RIF Renamer</a></td>'+
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
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">Thanks a lot @blimblim04 of PSXHAX !! OFFLINE EXPLOIT Released, the scripts & payloads gets automatically cached when you stay on this page !!</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>blimblim04 of PSXHAX &nbsp;&nbsp;</td>'+
						'<td>$400</td></tr><tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:600px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_mira(); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_mira_nohb(); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:28%">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
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
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'enablebrowser\'); return false" style="width:43%">Enable Browser</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'fanthreshold\'); return false" style="width:43%">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'kernelclock\'); return false" style="width:43%">Kernel Clock</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:43%">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'rifrenamer\'); return false" style="width:43%">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}
