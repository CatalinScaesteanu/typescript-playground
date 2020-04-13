// bad example
function dullFunc(value1, value2) {
    return 'No info';
}
// type input and output
var funFunc = function (score, message) { return "just a string"; };
// default initialization
var sendGreeting = function (greeting) {
    if (greeting === void 0) { greeting = 'Good morning!'; }
    return console.log(greeting);
};
var scores = [70, 125, 85, 110];
var highScores;
highScores = scores.filter(function (element, index, array) {
    if (element > 100) {
        return true;
    }
});
console.log('hs', highScores);
