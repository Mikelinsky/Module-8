var a = prompt('Give me, a number \'A\' for operation (a * a) - (2 * a * b) + (b * b)');
var b = prompt('Next to, give me a number \'B\' for operation (a * a) - (2 * a * b) + (b * b)');
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value); 
if ( value > 0 )  {
    alert("Result is positive");
    console.log("Result is positive");
} else if (value < 0) {
    alert("Result is negative");
    console.log("Result is negative");
} else {
    alert("Result is zero");
}