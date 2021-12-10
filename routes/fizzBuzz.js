import express from 'express';
import fizzBuzzCtrl from '../controllers/fizzBuzz.js';
import fuzzBuzzValidation from '../validation/FizzBuzz.js';

const router = express.Router();

/** GET /api/fizzBuzz/:count - Get FizzBuzz */
router.route('/:count').get(fuzzBuzzValidation(), fizzBuzzCtrl.get);

// router.route('/:count').get(fizzBuzzCtrl.get);

export default router;
