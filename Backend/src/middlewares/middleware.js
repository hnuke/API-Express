function errorHandler(err, req, res, next) {
  console.error(err.stack || err);

  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: true,
    message
  });
}

export { errorHandler };
