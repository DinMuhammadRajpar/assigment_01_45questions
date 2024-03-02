var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Bali", "Tasmania", "Canada", "Paris", "Australia"];
console.log(places);
// lets print the array in alphabetical order 
console.log("Array in alphabetical order " + __spreadArray([], places, true).sort());
// array in its orignal form 
console.log(places);
// reverse alphabetical order 
console.log("Array in reverse alphabetical order " + __spreadArray([], places, true).sort().reverse());
// array is still in its orignal form 
console.log(places);
// changed order of the orignal array 
console.log("Changed order of orignal array ", places.reverse());
// again change the order of the array in its orignal form 
console.log("Changed order of orignal array ", places.reverse());
// sorting the array to change the order or the array 
console.log("Changed order of orignal array by sorting ", places.sort());
// reverse the alphabetic order of the array 
console.log("reverse order of sorted array ", places.sort(function (a, b) { return b.localeCompare(a); }));
