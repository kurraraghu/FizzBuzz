import express from 'express';
// import HandlingErrors from './middlewares/GlobalErrorHandler';
import { fizzBuzzRoutes } from './routes/fizzBuzz';

const app = express();

const CONFIG_PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
app.get('/', (req, res) => {
  res.send('FizzBuzz rest apis');
});

app.use('/api', fizzBuzzRoutes);

function onServerStart() {
  console.log(`Server started on port ${CONFIG_PORT}`);
}

app.listen(CONFIG_PORT, onServerStart);

export default app;
