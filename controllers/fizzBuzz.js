import fuzzBuzzService from '../services/fuzzBuzzService';
import { validationResult } from 'express-validator';

function get(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const count = req.params['count'];
    fuzzBuzzService.generateFuzzBuzz(count).then((fuzzBuzzList) => {
      res.json(fuzzBuzzList);
    });
  } catch (error) {
    return res.json({ status: 'error', message: error.message });
  }
  return res.json(req.dbUser);
}

export default { get };
