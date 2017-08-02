"use strict";

// What are the different scopes in JavaScript

var asim = 1; //global variable

window.moo = 1;

// window for browsers, global for node

function moo() { //local variable
	var foo = 1;
	console.log(foo);
};

// JS does not have block-level scope