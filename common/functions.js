function payload_finished(payload)
{
	setTimeout(function(){document.getElementById("progress").innerHTML="Load Successful!!";}, 3000);
	if(payload == "binloader"){
		setTimeout(function(){document.getElementById("progress").innerHTML="Awaiting Payload!! Send Payload To Port 9021"; }, 7000);
	} else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Payload Loaded Succesfully !!"; }, 7000);
	}
	if(payload == "hen" || payload == "mirahen" || payload == "goldhen" || payload == "miraunofficial"){
		localStorage.Fail--;
		localStorage.Success++;
		document.getElementById("success").innerHTML="Success: "+localStorage.Success;
	}
}

function triggerFunction(payload){
	preloader();
	if(payload == "app2usb"){
		app2usb();
	}else if(payload == "backup"){
		backup();
	}else if(payload == "disableupdates"){
		disableupdates();
	}else if(payload == "dumper"){
		dumper();
	}else if(payload == "enablebrowser"){
		enablebrowser();
	}else if(payload == "enableupdates"){
		enableupdates();
	}else if(payload == "fanthreshold"){
		fanthreshold();
	}else if(payload == "ftp"){
		ftp();
	}else if(payload == "hen"){
		localStorage.Fail++;
		hen();
	}else if(payload == "historyblocker"){
		historyblocker();
	}else if(payload == "kernelclock"){
		kernelclock();
	}else if(payload == "kerneldumper"){
		kerneldumper();
	}else if(payload == "linuxloader"){
		linuxloader();
	}else if(payload == "mirahen"){
		localStorage.Fail++;
		mirahen();
	}else if(payload == "goldhen"){
		localStorage.Fail++;
		goldhen();
	}else if(payload == "miraunofficial"){
		localStorage.Fail++;
		miraunofficial();
	}else if(payload == "ps4debug"){
		ps4debug();
	}else if(payload == "restore"){
		restore();
	}else if(payload == "rifrenamer"){
		rifrenamer();
	}else if(payload == "todex"){
		todex();
	}else if(payload == "webrte"){
		webrte();
	}
	loader();
	payload_finished(payload);
}

function load_JB()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		exploit(false);	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function load_OLDJB()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		oldexploit();	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function load_Both()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		exploit(true);	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function exploit(val){
	document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";
	localStorage.Fail++;
	setTimeout(function(){jb(val);}, 500);
}

function oldexploit(){
	document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";
	localStorage.Fail++;
	setTimeout(function(){oldjb();}, 500);
}

function load_payload(payload)
{	
	document.getElementById("progress").innerHTML="Loading! Please Wait!!";
	setTimeout(function(){triggerFunction(payload)}, 500);
}
