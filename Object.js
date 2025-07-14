
//Object in JavaScript

let iplTeams = 
{
    mumbai : "Mumbai Indians",
    bangalore : "RCB",
    kolkata : "KKR"
}

console.log(iplTeams);
console.log(iplTeams.mumbai);         // accessing the value in an Object
console.log(iplTeams["bangalore"]);     // accessing the value in an Object

iplTeams.gujarat = "GT"  // Add a new key value pair

console.log(iplTeams.gujarat);
console.log(iplTeams);

iplTeams.mumbai = "MI"; // Update value of existing key value pair

console.log(iplTeams);