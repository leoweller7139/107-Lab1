
var mathLib = require('./myMath');

function sayHello(){
    console.log("My name is Leo");
}

function exc1(){
    // print numbers from 1 to 10 except the 7
    for(var i = 1; i < 11; i++){ // for loop
        if(i != 7){ // If I is not = to 7
            console.log(i); // print the numbers
            
        }
    }
}

function exc2(){
    // print number from 20 to 1, except 7 and 13
    for(var i = 20; i > 0; i--){
        if(i != 7 && i != 13){ // && is to say and in "ifs"
        // or is || double lines. 
        // not is !
            console.log(i);
        }
    }
}

console.log("Hello World");
/*
sayHello();
exc1();
console.log("--------------------------")
exc2();
*/

function homeWork(){
    var numbers = [23,45,23,56,2,-34,8,1,-12,2,123,9045,546,34,-123];

    // 1 find the smallest
    var smallest = numbers[0];
    for(var i=0; i < numbers.length; i++){
        var n = numbers[i];
        if(n < smallest) smallest = n;
    }
    console.log("The Smallest: ", smallest);
    // 2 the biggest
    var biggest = numbers[0];
    for(var i=0; i < numbers.length; i++){
        var n = numbers[i];
        if(n > biggest) biggest = n;
    }
    console.log("The Biggest: ", biggest);
    // 3 the sum of them all
    var sum = numbers.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log("The Sum: ", sum);
    // 4 the multiplication of them all
    var multi = mathLib.multiply(numbers)
    console.log("The answer of multiplying", multi);
    // 5 non positive (lower than 0)

    // print the odd numbers
    
}

mathLib.funMath();
/*
var res = mathLib.sum(21,21);
console.log("Result: ", res);

var bigger = mathLib.greater(219421, 214215);
console.log("Bigger: ", bigger);

var smaller = mathLib.smaller(213, 103);
console.log("Smaller: ", smaller);

var divi = mathLib.division(2131, 12);
console.log("Divided Results: ", divi);

var divizero = mathLib.division(2131, 0);
console.log(divi);

var evens = mathLib.isEven(3);
console.log("Is your number even?: ", evens)
*/
homeWork();