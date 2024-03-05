let proteinPowder:string = "Whey Protein";

console.log("Is Whey Protein == 'Whey Protein' ? I predict true", proteinPowder == 'Whey Protein');
console.log("Is Whey Protein !== 'Whey Protein' ? I predict true", proteinPowder !== 'Whey Protein');

// Do Tests using the lower case function

let animal:string = "DOG";

console.log("Is animal == DOG with uppercase? I predict False", animal.toLowerCase() == 'DOG');
console.log("Is animal == dog with lowercase? I predict True", animal.toLowerCase() == 'dog');

// Do Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let favNum:number = 8;

console.log("Is number == 8 ? I predict True ", favNum == 8);
console.log("Is number !== 8 ? I predict False ", favNum !== 8);
console.log("Is number > 10 ? I predict False ", favNum > 10);
console.log("Is number < 20 ? I predict True ", favNum < 20);
console.log("Is number >= 8 ? I predict True ", favNum >= 8);
console.log("Is number <= 12 ? I predict True ", favNum <= 12);


// Do Tests using "and" and "or" operators

let x: number = 8;
let y: number = 12;

console.log("Is x > y && x == y ? I predict False ", x > y && x == y);
console.log("Is x < y && x !== y ? I predict False ", x < y && x !== y);
console.log("Is x < y || x !== y ? I predict True ", x < y || x !== y);
console.log("Is x > y || x == y ? I predict False ", x > y || x == y);
console.log("Is x > x == y || x !== y ? I predict False ", x == y || x !== y);


// Do Test whether an item is in a array

let cars:string[] = ["Civic", "Corrolla", "Aqua", "Fortuner"];

console.log("Is cars include Civic? Yes it has ", cars.includes("Civic"));
console.log("Is cars include Aqua? Yes it has ", cars.includes("Civic"));

// Do Test whether an item is not in a array

console.log("Is cars include Vego? No it does not  ", cars.includes("Civic"));
console.log("Is cars include Prius? Yes it does not ", cars.includes("Civic"));



