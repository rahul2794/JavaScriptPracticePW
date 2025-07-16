

waitWithCallback(displayCallback)

function waitWithCallback(callback){
  console.log("Start the Callback");

  setTimeout(
    () => {
      callback("Will be executed post a delay !!!");
    }
   , 3000)

   console.log("Waiting for 3secs !!! ")

}

function displayCallback(msg){
  console.log(msg);
}

//-----------------------------------------------------------------------------------------

// function waitWithCallback(ms, callback) {
//  setTimeout(() => {
//    callback(`⏳ Waited ${ms}ms (callback)`);
//  }, ms);
// }

// function displayCallbackMsg(msg){
//   console.log(msg);
//  console.log("End (callback)");
// }

// console.log("Start (callback)");

// waitWithCallback(3000, displayCallbackMsg)  // same as below commented waitWithCallback

// waitWithCallback(3000, (msg) => {
//  console.log(msg);
//  console.log("End (callback)");
// });

console.log("This runs immediately after async call");

//-----------------------------------------------------------------------------------------

// // Function that says hello after a delay using a callback
// function onStart(callback) {
//     console.log("Starting the 'hello' function...");
//     setTimeout(() => {
//         console.log("Hello! This message was delayed by 2secs");
//         callback(); // Calling the callback after the timeout
//     }, 2000); // Delay of 2 seconds
// }

// // Callback function to log a completion message
// function onCompletion() {
//     console.log("Callback executed: Finished greeting!");
// }

// // Call the hello function and pass the onCompletion function as a callback
// onStart(onCompletion);