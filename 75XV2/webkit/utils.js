function die(msg) {
	alert(msg);
	undefinedFunction();
}

function debug_log(msg) {
	document.getElementById("progress").innerHTML=msg;
	frame1();
}

// The following functions are taken from https://github.com/saelo/jscpwn/:
//  hex, hexlify, unhexlify, hexdump
//  Copyright (c) 2016 Samuel Groß

// Return the hexadecimal representation of the given byte.
function hex(b) {
	return ('0' + b.toString(16)).substr(-2);
}

// Return the hexadecimal representation of the given byte array.
function hexlify(bytes) {
	var res = [];
	for (var i = 0; i < bytes.length; i++)
		res.push(hex(bytes[i]));

	return res.join('');
}

// Return the binary data represented by the given hexdecimal string.
function unhexlify(hexstr) {
	if (hexstr.length % 2 == 1)
		throw new TypeError("Invalid hex string");

	var bytes = new Uint8Array(hexstr.length / 2);
	for (var i = 0; i < hexstr.length; i += 2)
		bytes[i / 2] = parseInt(hexstr.substr(i, 2), 16);

	return bytes;
}

function hexdump(data) {
	if (typeof data.BYTES_PER_ELEMENT !== 'undefined')
		data = Array.from(data);

	var lines = [];
	for (var i = 0; i < data.length; i += 16) {
		var chunk = data.slice(i, i + 16);
		var parts = chunk.map(hex);
		if (parts.length > 8)
			parts.splice(8, 0, ' ');
		lines.push("" + i.toString(16) + " : " + parts.join(' '));
		// lines.push(parts.join(' '));
	}

	return lines.join('\n');
}

function buf2hex(buffer) {
	return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

// Simplified version of the similarly named python module.
var Struct = (function () {
	// Allocate these once to avoid unecessary heap allocations during pack/unpack operations.
	var buffer = new ArrayBuffer(8);
	var byteView = new Uint8Array(buffer);
	var uint32View = new Uint32Array(buffer);
	var float64View = new Float64Array(buffer);

	return {
		pack: function (type, low, high) {
			var view = type;
			view[0] = low;
			/*if (arguments.length == 2) {
				view[1] = high;
			}*/
			return new Uint8Array(buffer, 0, type.BYTES_PER_ELEMENT);
		},

		unpack: function (type, bytes) {
			if (bytes.length !== type.BYTES_PER_ELEMENT)
				throw Error("Invalid bytearray");

			var view = type;        // See below
			byteView.set(bytes);
			return view[0];
		},

		// Available types.
		int8: byteView,
		int32: uint32View,
		float64: float64View
	};
})();

var backingBuffer = new ArrayBuffer(8);
var f = new Float32Array(backingBuffer);
var i = new Uint32Array(backingBuffer);

function i2f(num) {
	i[0] = num;
	return f[0];
}

function f2i(num) {
	f[0] = num;
	return i[0];
}

function str2array(str, length, offset) {
	if (offset === undefined)
		offset = 0;
	var a = new Array(length);
	for (var i = 0; i < length; i++) {
		a[i] = str.charCodeAt(i + offset);
	}
	return a;
}
