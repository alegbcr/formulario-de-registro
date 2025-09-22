const express = require("express");
// Routes
const routerApi = require("./routes");
// Middlewares
const loggerhandler = require("./middlewares/logger.handler");
const errorHandler = require("./middlewares/error.handler");

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(loggerhandler);
app.use(errorHandler);

// Route to serve static files
routerApi(app);

module.exports = app;
