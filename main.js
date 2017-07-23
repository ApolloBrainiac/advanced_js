"use strict";

var a = {'moo':'too'};
function foo(a) {
	a = {'too':'moo'};
}
foo(a);
console.log(a);