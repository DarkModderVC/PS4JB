function print(){}

var scriptCode = '';

function preloadScripts(lst)
{
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
	}
	else{
		alert("Jailbreak failed! Reboot your PS4 and try again.");
	}
}

window.postExploit = function()
{
	setTimeout(function() //update the screen one last time...
	{	
		eval.call(window, scriptCode);
		done();
	}, 100);

};