function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: ", num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(10, 20));
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
