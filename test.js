// var number = prompt('enter any number');
// number = Number(number);

// if(Number.isNaN(number)===false && typeof number === "number"){
//     alert('it is a number');
// }
// else{
//     alert('is not a number');
// }



var phonePrice = 6000;
var bankBalance = prompt('enter your bank balance');
number= Number(bankBalance);
// console.log(typeof bankBalance);
// console.log(typeof number);
if(isNaN(number)===true){
    var bankBalance = prompt('that is not a number.please enter a number');
    if(bankBalance >= phonePrice){
        alert('you can buy the phone');
    }
    else{
        alert('you cannot buy the phone');
    }
}

else{
    if(bankBalance >= phonePrice){
        alert('you can buy the phone');
    }
    else{
        alert('you cannot buy the phone');
    }
    
}

