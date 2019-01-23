// var number = prompt('enter any number');
// number = Number(number);

// if(Number.isNaN(number)===false && typeof number === "number"){
//     alert('it is a number');
// }
// else{
//     alert('is not a number');
// }



// var phonePrice = 6000;
// var bankBalance = prompt('enter your bank balance');
// number= Number(bankBalance);

// if(isNaN(number)===true){
//     var bankBalance = prompt('that is not a number.please enter a number');
//     if(bankBalance >= phonePrice){
//         alert('you can buy the phone');
//     }
//     else{
//         alert('you cannot buy the phone');
//     }
// }

// else{
//     if(bankBalance >= phonePrice){
//         alert('you can buy the phone');
//     }
//     else{
//         alert('you cannot buy the phone');
//     } 
// }


// var firstName = prompt('enter first name');
// var lastName = prompt('enter last name');
// var age = prompt('enter the age');
// var gender  = prompt('enter the gender');
// if (gender == 'male'){
//     alert(firstName + ' ' + lastName + ' ' + 'is a male of age' + ' '+ age);
// }
// else{
//     alert(firstName + ' ' + lastName + ' ' + 'is a female of age' + ' '+ age);
// }


var firstName = prompt('enter first name');
var lastName = prompt('enter last name');
var age = prompt('enter the age');
var gender  = prompt('enter the gender');
if(age >= 18 && gender=='female'){
    alert('eligible for all female college scholarship');
}
else if(age < 18 && gender=='female'){
    alert('eligible for girls school scholarship');
}
else if(age < 18 && gender=='male'){
    alert('not eligible scholarship');
}


