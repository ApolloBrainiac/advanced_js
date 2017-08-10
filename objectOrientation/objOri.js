'use strict';

/* function asim (){
	console.log(this);
};

// asim.moo = 1;
// console.log(asim.name);

// console.log(asim.toString());

asim.call(1);
// with .call, you can determine 'this' / use it to stabalize this

*/

/*var asim = {
	checkThis: function() {
		function checkOther() {
			console.log(this); // asim


		};
		checkOther.call(this);
	}
}

asim.checkThis();
*/

// function a(b,c,d){
// 	console.log(this);
// 	console.log(b);
// 	console.log(c);
// 	console.log(d);
// }

//a.call(1,2,3,4);

//a.apply(1,[2,3,4]);

/*function sum(){
	var total = 0;
	for (var i = 0; i < arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

var x = sum(1,2,3);

var things = [1,2,3,4,53,2,4,5,6,1];
*/

// use apply when you're call a function with a 
// variable amount of parameters

// var a = function a(){
// 	console.log(this);
// }.bind(1);
// // bind only works with function expressions
// a();

// var asim = {
// 	func: a
// }

asim.func();