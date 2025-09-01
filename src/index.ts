// function main () {
//     console.log("Hello World");
// }

// let username: string = "John Doe";
// console.log(`Username: ${username}`);

// let age: number = 30;
// console.log(age);
// console.log(typeof age);

// console.log("\n");

// let username; string = "john Doe";
// console.log(username);
// console.log(typeof username);

//2. Type Inference
let nama = "Qoli";
console.log(nama);
console.log("\n");

let umur = 21;
console.log(umur);

console.log("\n");
console.log("===Real Case===");

// Real Case:
let ticketPrice = 100_000;
let eventName = "Concert";
let availableTickets = True;

function calculateTotal(price: number, qty: number): number {
    return price * qty;
}

// let total = calculateTotal(ticketPrice, 2);
// console.log(`Total price for 2 tickets to ${eventName}: $${total}`);
// console.log(`Available tickets: ${availableTickets}`);