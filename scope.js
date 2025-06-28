
function testScope(){
    if(true){
        var oldVar = 'variable VAR, function scope';
        let newLet = 'variable let, Block scope';
        const newConst = 'variable const, Block scope';

     console.log('Inside the IF Block scope', newLet);  // will be accepted as its in block scope
     console.log('Inside the IF Block scope', newConst);  // will be accepted as its in block scope
    }

    console.log('Outside Block Scope but inside Function Scope', oldVar);
    // console.log(newLet);  // will throw exception as not is block scope
    // console.log(newConst);  // will throw exception as not is block scope
}

testScope();