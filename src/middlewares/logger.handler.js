// Middleware to log request details
const loggerhandler = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url} - IP: ${req.ip}`);

  // Log response status code when the response is finished
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${timestamp}] ${method} ${url} - Status: ${res.statusCode} - Duration: ${duration}ms`
    );
  });

  next();
};

module.exports = loggerhandler;
