"use strict";

// What is an IIFE(iffy) Immediatly Invoked Feunction Expression
// and why might you use it?
(function(){
	var thing = {'hello':'main'};
	console.log("main: ", thing);
})();
