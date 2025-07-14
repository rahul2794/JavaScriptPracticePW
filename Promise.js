// Story: Waiting for a Package Delivery
// Imagine you’ve ordered a package. You’re given a tracking number (promise) and told it will be delivered soon. 
// You wait (resolve/reject) for the package to arrive, and once it does, you receive it and maybe even track it further.

function orderPackage(isOrderPlaced){

    return new Promise((resolve,reject)=> {
        console.log("Ordering package from AMAZON !!! ");

        setTimeout(()=> {
            // const isOrderPlaced = isOrderPlaced
            if(isOrderPlaced){
                resolve("resolve : Order is successfully placed !!! ")
            } else {
                reject("reject : Order is not placed !!! ")
            }
        }, 1000);
    });
}

function packageDispatched(isPackageDispatched){

    return new Promise((resolve,reject)=> {
        console.log("Dispatching package from nearest Amazon warehouse !!! ");
        setTimeout(()=>{
            // const isPackageDispatched = isPackageDispatched
            if(isPackageDispatched){
                resolve("resolve : Package is dispached from warehouse !!! ");
            } else {
                reject("reject : Package is not Dispatched from warehouse !!! ")
            }
        }, 3000)
    });

}

function packageOutForDelivery(packageStatus){

    return new Promise((resolve,reject) => {
        console.log("Package on its Way !!! ");

        setTimeout( () => {
            // const isDelivered = packageStatus;
            if(packageStatus){
                resolve("resolve : Package is successfully Delivered !!!!");
            }
            else{
                reject("reject : Package is not Delivered !!!");
            }
        }, 5000);
    });
}

const isOrderPlaced = true
const isPackageDispatched = false
const isPackageOutForDelivery = true

orderPackage(isOrderPlaced)
    .then((msg) => {
        console.log(msg); return packageDispatched(isPackageDispatched)
    })
    .then((msg)=>{
        console.log(msg); return packageOutForDelivery(isPackageOutForDelivery)
    })
    .then((msg)=>{
        console.log(msg);
    })
    .catch( error => console.error(error)  
    );
