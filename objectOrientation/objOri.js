'use strict';

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
		var self = this;
		console.log(self);
		function checkOther(){
			self.moo = 1;
			console.log(self);
		}
		
		checkOther();
		console.log(self.moo);
		console.log(window.moo);
	}
};

asim.checkThis();

// var func = asim.checkThis;
// func();

// this is determined by calling context