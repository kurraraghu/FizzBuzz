import express from 'express';
import HandlingErrors from './middlewares/GlobalErrorHandler.js';
import appRouters from './routes/app.routers.js';

const app = express();

const CONFIG_PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });
app.get('/', (req, res) => {
  res.send('FizzBuzz rest apis');
});

app.use('/api', appRouters);

app.use(HandlingErrors);

function onServerStart() {
  console.log(`Server started on port ${CONFIG_PORT}`);
}

app.listen(CONFIG_PORT, onServerStart);

export default app;
