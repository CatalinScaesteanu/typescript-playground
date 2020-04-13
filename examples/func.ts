// bad example
function dullFunc(value1, value2) {
  return 'No info';
}

// type input and output
const funFunc = (score: number, message?: string): string => "just a string";

// default initialization
const sendGreeting = (greeting: string = 'Good morning!'): void => console.log(greeting);

let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((element, index, array) => {
  if (element> 100) {
    return true;
  }
});
console.log('hs', highScores);