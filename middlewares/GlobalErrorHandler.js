import { ValidationError } from "express-validation";

// Handling Errors
function HandlingErrors(err, req, res, next) {
  console.log('error' + err);
  if (!err) {
    return next();
  }
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  } else {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.statusCode).json({
      message: err.message,
    });
  }

}

export default HandlingErrors;
