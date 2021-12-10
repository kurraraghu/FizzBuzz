import appConfig from "../config/config.js";

async function generateFuzzBuzz(count) {
  if (isNaN(count)) {
    throw TypeError("count must be a number");
  }
  count = Math.min(Math.max(count, appConfig.min), appConfig.max);
  const fuzzBuzzList = [];
  for (var i = 0; i <= count; i++) {
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
  return fuzzBuzzList;
}
export default { generateFuzzBuzz };
