
console.log("/***************************** Task1 *************************/");

function playNumbers(){
    var flag=true;
    if(arguments.length==0){
        console.log("There are no inputs.");
        flag = false;
    }
    else{ 
    for(var i=0; i<arguments.length; i++){
    if(isNaN(arguments[i])){
        console.log(arguments[i] + " is not a number");
        flag = false;
    }
    }
    }

    if (flag){  
    var output="(";
    var max=0;
    var sum=0;
    for(var i=0, j=arguments.length; j > 0, i < arguments.length; i++, j--){
    output += arguments[i];
    sum += arguments[i];
    if(arguments[i] > max){
        max = arguments[i];
    } 
    if(i < arguments.length-1){
        output += ',';
    }
    }
    var average = sum/arguments.length;
    console.log("The largest number of " + output + ") is " + max);
    
    console.log("The average of " + output + ") is " + average);
}
}


playNumbers(); 
playNumbers("abc", 3, "hello");
playNumbers(9,3,6); 
playNumbers(3,5,1,3,5); 
playNumbers("Good day!",3,4,32,"hi", "we");


//////////////////////////////////////////////////////////////////////////
console.log("/***************************** Task2 *************************/"); 

var convertCF = function(val, cf) {
    if(isNaN(val)){
        console.log("I need a number");
    }
    else{  
    if(cf != "C" && cf != "F"){
        console.log("I am confused :(");
    }
    if(cf == "C"){
        var value = (val * 9/5) + 32;
        console.log(val + "C is equivalent to " + value);
    }
    if(cf == "F"){
        var _value = (val - 32) * 5/9;
        console.log(val + "F is equivalent to " + _value);
    }
}
}


convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, 'F');
convertCF(0, "C");
convertCF(122, "F");
