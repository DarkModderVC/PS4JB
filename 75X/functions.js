function print(){}

var scriptCode = '';

function preloadScripts(lst)
{
	scriptCode = '';
	for(var i = 0; i < lst.length; i++)
	{
		var xhr = new XMLHttpRequest();
		xhr.open('GET', lst[i], false);
		xhr.send('');
		scriptCode += xhr.responseText + '\n';
	}
}

function done()
{
	if(main_ret == 0 || main_ret == 179){
		document.getElementById("progress").innerHTML="Payload Loaded Successfully!!";
		read_ptr_at(0);
	}
	else{
		alert("Jailbreak failed! Reboot your PS4 and try again.");
	}
}

window.binloader = function()
{
    preloadScripts(['blob.js', 'jb.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.ftp = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'ftp.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.mira = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'mira2.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.app2usb = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'app2usb.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.enableupdates = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'enableupdates.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.disableupdates = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'disableupdates.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.renamer = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'renamer.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.todex = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'todex.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.restore = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'restore.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.backup = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'backup.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.dumper = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'dumper.js', 'netcat.js']);
	if(window.postExploit)
		window.postExploit();
}

window.midExploit = function()
{
    preloadScripts(['blob.js', 'jb.js', 'mira.js', 'netcat.js']);
}

window.postExploit = function()
{
	setTimeout(function()
	{	
		eval.call(window, scriptCode);
		done();
	}, 100);

};
