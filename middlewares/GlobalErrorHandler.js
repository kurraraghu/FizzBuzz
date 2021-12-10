// Handling Errors
function HandlingErrors(err, req, res, next) {
  if (!err) {
    return next();
  }
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';
  console.log(err);

  res.status(err.statusCode).json({
    message: err.message,
  });
}

export default HandlingErrors;
