//Wait until user will input something
//Second variable is default
let user = prompt("What is your name?", "Write your name");
alert("Your name is: " + user);

let age = prompt("How old are you?", 23);
alert(`you are ${age}`);

//Wait until user will press "OK" or "Cancel" returns True or False
let isBoss = confirm("Are you Boss ?");
alert(isBoss);
