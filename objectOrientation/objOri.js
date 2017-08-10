//'use strict';

// console.log(this);

// this.asim = 1;

// console.log(this.asim);
// console.log(window.asim);
// console.log(asim);

// function checkThis() {
// 	console.log(this);
// }

// checkThis();

var asim = {
	checkThis: function(){
		console.log(this);
		function checkOther(){
			this.moo = 1;
			console.log(this);
		}
		
		checkOther();
		console.log(this.moo);
	}
};

asim.checkThis();

// var func = asim.checkThis;
// func();

// this is determined by calling context