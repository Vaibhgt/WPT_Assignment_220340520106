console.log("Hello there");

function f1(x, y) {
    console.log("First number is: "+x);
    console.log("Second number is: "+y);
    return x + y;
}

console.log("addition of 4 & 6 is : "+f1(4,6));

exports.multiply = function(x, y) {
    console.log("First number is: "+x);
    console.log("Second number is: "+y);
    return x * y;
}