"use strict";

// What are function closures?

// function sayHello(name) {
// 	var text = 'Hello ' + name;
// 	console.log(text);
// };

// sayHello("Asim");

// function sayHello(name) {
// 	var text = 'Hello ' + name;
// 	return function() {
// 		console.log(text);
// 	}
// };

// sayHello("Asim")();

// function sayHello(name) {
// 	var text = 'Hello ' + name;
// 	return function() {
// 		console.log(text);
// 	}
// };

// var sayAsim = sayHello("Asim");
// sayAsim();

// When a function returns a function, the one returned
// keeps any referencet to variables that it used from
// the first function

// var foo = [];
// for (var i = 0; i < 10; i++) {
// 	foo[i] = function() { return i };

// }
// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());

	// in a closure, a var is not a copy
	// but points to the actual value of the var
	// in the outer scope
	// "CURRENT VALUE"

var foo = [];
for (var i = 0; i < 10; i++) {
	(function(){
		var y = i;
		foo[i] = function() { return y};
	})();
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());