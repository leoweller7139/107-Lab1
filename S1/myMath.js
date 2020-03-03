module.exports = {
    funMath: function(){
        console.log("This is math module")
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        // return the greater number
        // 3, 20 => 20
        if(num1 > num2) return num1;
        else return num2; // Clean way to structure the code, but only if you have 1 instruction
    },
    smaller: function(num1, num2){
        // return the smaller of the two parameters
        if(num1 < num2){
            return num1;
        }
        else {
            return num2;
        }
    },
    division: function(number, by){
        if(by == 0){
            console.error('DO NOT DIVIDE BY 0, PLEASE!');
            return 0;
        }

        return number / by;
    },
    // Capture even numbers 10%2 = 0
    isEven: function(num){
        var res = num % 2; // Divides the numbers until they reach 0
        if(res == 0) return true; // If the result is 0, show number
        else return false; // If not, do not show
    },
    multiply: function(num){
        return num * num;
    }
};