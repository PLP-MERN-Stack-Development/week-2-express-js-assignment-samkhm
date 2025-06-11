// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error details
  
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
      // Optionally include stack trace only in development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  };
  
  module.exports = errorHandler;
  