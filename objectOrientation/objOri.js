var animal = {
	kind: 'human'
};

// var asim = {};
// asim.__proto__ = animal;

var asim = Object.create(animal, {food: {value: "mango"}});
//second param is an object that describes the property

console.log(asim.kind);

console.log(animal.isPrototypeOf(asim));

asim.kind = 'igloo';
console.log(asim.kind);
console.log(animal.kind);

// better than __proto__ / object create function
