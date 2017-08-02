"use strict";

// What is the scope chain?
// Defined by the way the program is written

// function foo(){
// 	console.log(myvar);
// }

// function goo(){
// 	var myvar = 1;
// 	foo();
// }


// goo();



function goo(){
	var myvar = 1;
	function foo(){
	console.log(myvar);
}
	foo();
}


goo();