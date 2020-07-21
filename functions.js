var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0)
    {
        alert("Jailbreak Complete!");
    }
    else if(confirmJailbreak)
        alert("Jailbreak failed! Reboot your PS4 and try again.");
	else
		alert("Jailbreak Skipped!! Start running Payloads !!");
}

function mira_finished()
{
	setTimeout(function(){alert("Load Successful!!"); }, 8000);
	alert("I accidentally updated my PS4 to latest version and out of the JB scene right now, If you think my version of exploit is stable Please contribute to buy me a PS4 6.72 and get back to JB scene.\nDonate me at: https://paypal.me/darkmodder");
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
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">I accidentally updated my PS4 to latest version and out of the JB scene right now, If you think my version of exploit is stable Please contribute to buy me a PS4 6.72 and get back to JB scene. Donate me at: https://paypal.me/darkmodder</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:500px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_mira_nohb()
{
    document.write(MIRA('mira')+MIRA('miranohb')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">I accidentally updated my PS4 to latest version and out of the JB scene right now, If you think my version of exploit is stable Please contribute to buy me a PS4 6.72 and get back to JB scene. Donate me at: https://paypal.me/darkmodder</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:500px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_JB()
{	
	confirmJailbreak = confirm("Shall We Start with PS4 Jailbreak 6.72?\nNote: Click 'Cancel' if Jailbreak is already Complete after Starting your PS4!!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_netcat()
{
    document.write(MIRA('mira')+MIRA('c-code')+'<script>alert("Awaiting Payload !!");</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">I accidentally updated my PS4 to latest version and out of the JB scene right now, If you think my version of exploit is stable Please contribute to buy me a PS4 6.72 and get back to JB scene. Donate me at: https://paypal.me/darkmodder</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:500px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_payload(payload)
{
    document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<marquee style="font-size:20px;color:red;margin-top:120px;">I accidentally updated my PS4 to latest version and out of the JB scene right now, If you think my version of exploit is stable Please contribute to buy me a PS4 6.72 and get back to JB scene. Donate me at: https://paypal.me/darkmodder</marquee>'+
						'<div><table style="padding-left:30px;float: left;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1 style="color:red">Contributors</h1></td>'+
						'</tr>'+
						'<tr style="font-size:20px;"><td>Dat Tien Nguyen</td>'+
						'<td>$10</td></tr><tr style="font-size:20px;"><td>Vigneshh1</td>'+
						'<td>$10</td></tr>'+
						'</table>'+
						'<table align="center" style="width:500px;margin-top:30px;padding-right:130px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}
