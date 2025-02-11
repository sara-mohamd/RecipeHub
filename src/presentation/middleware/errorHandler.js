const errorHandler = (err, req, res, next) => {
  const status = err.status || 400;

  res.status(400).json({
    message: err.message,
    error: true
  });
};

module.exports = errorHandler;