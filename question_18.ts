let places:string[] = ["Bali", "Tasmania", "Canada", "Paris", "Australia"];

console.log(places);

// lets print the array in alphabetical order 

console.log("Array in alphabetical order " + [...places].sort());

// array in its orignal form 

console.log(places);

// reverse alphabetical order 

console.log("Array in reverse alphabetical order " + [...places].sort().reverse());

// array is still in its orignal form 

console.log(places);

// changed order of the orignal array 

console.log("Changed order of orignal array ", places.reverse());

// again change the order of the array in its orignal form 

console.log("Changed order of orignal array ", places.reverse());

// sorting the array to change the order or the array 

console.log("Changed order of orignal array by sorting ", places.sort());

// reverse the alphabetic order of the array 

console.log("reverse order of sorted array ", places.sort((a, b) => b.localeCompare(a)));
