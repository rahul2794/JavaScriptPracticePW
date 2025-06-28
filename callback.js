function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log("Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("End (callback)");
});


console.log("This runs immediately after async call");