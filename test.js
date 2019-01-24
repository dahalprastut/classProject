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

// first task


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


// second task

// var firstName = prompt('enter first name');
// var lastName = prompt('enter last name');
// var age = prompt('enter the age');
// var gender  = prompt('enter the gender');
// if(age >= 18 && gender=='female'){
//     alert('eligible for all female college scholarship');
// }
// else if(age < 18 && gender=='female'){
//     alert('eligible for girls school scholarship');
// }
// else if(age < 18 && gender=='male'){
//     alert('not eligible scholarship');
// }

// function yearOfBirth(year){
//     return 2017-year;
// }

// function retirement(name , age){
//     var retirement = 65- yearOfBirth(age);
//     console.log('name retires in ' + retirement + ' years');
// }
// retirement('john' , 2011);


// var tip;
// function calculator(amount){
//     if(amount < 50){
//       return tip=0.2*amount; 
//     } else if (amount >= 50 && amount < 200){
//        return tip = 0.15 * amount;
//     }
//     else{
//        return tip=0.1*amount;
//     }
// }
// var list1 = [calculator(124) , calculator(48) , calculator(268)];
// console.log(list1);
// var list2=[calculator(124)+124 , calculator(48)+48 , calculator(268)+268];
// console.log(list2);


// var john = {
//     firstName:'john',
//     lastName:'prasad',
//     family:['mira','hira','harihar'],
//     birthYear:1990,
//     age:function(){
//         this.year = 2019-this.birthYear;
//     }
    
// };
// john.age();
// console.log(john);

// var a= prompt("enter first number");
// var b= prompt("enter second number");
// firstNumber= Number(a);
// secondNumber=Number(b);

// function sum(firstNumber , secondNumber){
//     return firstNumber + secondNumber;
// }

// alert(`sum is ${sum(firstNumber , secondNumber)}`);


// function substract(firstNumber , secondNumber){
    
//    return firstNumber - secondNumber;
// }
// alert(`difference is ${substract(firstNumber , secondNumber)}`);




// impi

function getMonth(input){
    var months = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september' , 'october' , 'november' , 'december'];
    
    return arrayPosition(months , input);
    
}   

function arrayPosition(months , input){
    if(input > months.length){
        return ;
      
      }
      return months[input - 1];
}



function common(a){
    if(getMonth(a)){
        alert(`the ${a} month is ${getMonth(a)}`);
    } else {
        alert('this is false please enter correct number');
    }
}

var firstInput = prompt('enter the month number');
common(firstInput);

var names =['hari' , 'shyam' , 'ravi'];
nameCommon(firstInput);
function nameCommon(b){
    if(names[b]){
        alert(`name is ${names[b-1]}`);
    }else{
        alert(`there is no name in this postition`);
    }
}



var secondInput = prompt(`enter the second number`);
common(secondInput);










