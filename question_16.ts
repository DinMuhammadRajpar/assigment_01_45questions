let guests: string[] = ["Mr Fahad", "Mozzam", "Azam"];

console.log("Dear " + guests[0] + ", \r\nI would like to invite you on a dinner when you arrive Pakistan. It would be an honor to have your presence.\nSincerely, \nYour childhood friend\n Din Muhammad. ");
console.log("Dear " + guests[1] + ", \r\nI would like to invite you on a dinner when you arrive Pakistan. It would be an honor to have your presence.\nSincerely, \nYour childhood friend\n Din Muhammad. ");
console.log("Dear " + guests[2] + ", \r\nI would like to invite you on a dinner when you arrive Pakistan. It would be an honor to have your presence.\nSincerely, \nYour childhood friend\n Din Muhammad. ");


let eliminatedGuest = guests[0];

console.log("Unfortunatly " + eliminatedGuest + " can't make it for the dinner");

console.log("The updated list is here");

guests[0] = "Ali";

// the second invitation list 

console.log("Second invitation");

console.log("Dear friend " + guests[0] + ", this is the second invitation as we have now different list of people. Hope see you there.");
console.log("Dear friend " + guests[1] + ", this is the second invitation as we have now different list of people. Hope see you there.");
console.log("Dear friend " + guests[2] + ", this is the second invitation as we have now different list of people. Hope see you there.");

// Got a bigger table

console.log("Hello guys. Got a bigger table so lets invite more firends to the dinner");

guests.unshift("Mohsin");
guests.splice(Math.floor(guests.length / 2), 0, "Zain");
guests.push("Rizwan");

console.log("The updated list: " + guests[0]);
console.log("The updated list: " + guests[1]);
console.log("The updated list: " + guests[2]);
console.log("The updated list: " + guests[3]);
console.log("The updated list: " + guests[4]);
console.log("The updated list: " + guests[5]);