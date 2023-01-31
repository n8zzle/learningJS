//Change variable type

let value = true;
console.log("Varable at beginning: " + value + `(${typeof value})`);

value = String(value);
console.log("Varable after change: " + value + `(${typeof value})`);

let number = "335";
console.log("Number at beginning: " + number + `(${typeof number})`);

number = Number(number);
console.log("Number after change: " + number + `(${typeof number})`);
