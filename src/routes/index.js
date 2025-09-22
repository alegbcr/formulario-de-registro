const express = require("express");

const formRoute = require("./form.router");
const registerRoute = require("./register.router");

function routerApi(app) {
  const router = express.Router();

  // Web Site
  app.use("/", router);
  router.use("/form", formRoute);

  // API
  router.use("/api/customers", registerRoute);
}

module.exports = routerApi;
