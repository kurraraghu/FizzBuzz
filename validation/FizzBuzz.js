import { check } from 'express-validation';

fuzzBuzzValidation = [
  check('count', 'Count must be a number').isNumeric(),
  check('count', 'Count must be a number between 0 and 100').isFloat({
    min: 0,
    max: 100,
  }),
];
export default fuzzBuzzValidation;
