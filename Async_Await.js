// Story: Waiting for a Package Delivery
// Imagine you’ve ordered a package. You’re given a tracking number (promise) and told it will be delivered soon. 
// You wait (resolve/reject) for the package to arrive, and once it does, you receive it and maybe even track it further.

function orderPackageAsyncAwait(isOrderPlaced){

    return new Promise((resolve,reject)=> {
        console.log("Ordering package from AMAZON !!! ");

        setTimeout(()=> {
            // const isOrderPlaced = isOrderPlaced
            if(isOrderPlaced){
                resolve("resolve : Order is successfully placed !!! ")  // resolve(true);
            } else {
                reject("reject : Order is not placed !!! ") // resolve(false);
            }
        }, 1000);
    });
}

function packageDispatchedAsyncAwait(isPackageDispatched){

    return new Promise((resolve,reject)=> {
        console.log("Dispatching package from nearest Amazon warehouse !!! ");
        setTimeout(()=>{
            // const isPackageDispatched = isPackageDispatched
            if(isPackageDispatched){
                resolve("resolve : Package is dispached from warehouse !!! ");  // resolve(true);
            } else {
                reject("reject : Package is not Dispatched from warehouse !!! ");     // resolve(false);
            }
        }, 3000)
    });

}

function packageOutForDeliveryAsyncAwait(packageStatus){

    return new Promise((resolve,reject) => {
        console.log("Package on its Way !!! ");

        setTimeout( () => {
            // const isDelivered = packageStatus;
            if(packageStatus){
                resolve("resolve : Package is successfully Delivered !!!!");   // resolve(true);
            }
            else{
                reject("reject : Package is not Delivered !!!");    // resolve(false);
            }
        }, 5000);
    });
}

const isOrderPlacedAsyncAwait = true
const isPackageDispatchedAsyncAwait= true
const isPackageOutForDeliveryAsyncAwait = true

// orderPackage(isOrderPlaced)
//     .then((msg) => {
//         console.log(msg); return packageDispatched(isPackageDispatched)
//     })
//     .then((msg)=>{
//         console.log(msg); return packageOutForDelivery(isPackageOutForDelivery)
//     })
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch( error => console.error(error)  
//     );


    async function amazonDelivery(){
        try{
            const response = await orderPackageAsyncAwait(isOrderPlacedAsyncAwait);
            console.log(response)
            const response1 = await packageDispatchedAsyncAwait(isPackageDispatchedAsyncAwait);
            console.log(response1)
            const response2 = await packageOutForDeliveryAsyncAwait(isPackageOutForDeliveryAsyncAwait);
            console.log(response2)
        } catch (error){
            console.error(error)
        }
    }

    amazonDelivery()