const { config } = require("../../config/config");

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Log error details
  console.error(
    `[ERROR] ${new Date().toISOString()} - ${statusCode}: ${message}`
  );
  // Log error stack trace
  if (err.stack) {
    console.error(err.stack);
  }
  // Send error response
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    // Only include stack trace in development
    ...err(config.nodeEnv === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
