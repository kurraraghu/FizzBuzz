import fuzzBuzzService from '../services/fuzzBuzzService.js';

function get(req, res) {
  const count = +req.params['count'];
  fuzzBuzzService.generateFuzzBuzz(count).then((fuzzBuzzList) => {
    return res.json(fuzzBuzzList);
  }, (error) => {
    return res.json({ status: 'error', message: error.message });
  });

}

export default { get };
