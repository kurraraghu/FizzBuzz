async function generateFuzzBuzz(count) {
  let count = Math.min(Math.max(count, 0), 100);
  let fuzzBuzzList = [];
  for (var i = 0; i < count; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fuzzBuzzList.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fuzzBuzzList.push('Fizz');
    } else if (i % 5 === 0) {
      fuzzBuzzList.push('Buzz');
    } else {
      fuzzBuzzList.push(i);
    }
  }
}
export default { generateFuzzBuzz };
