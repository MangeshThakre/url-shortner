const express = require("express");
const redirectUrlRouter = express.Router();
const {
  redirectToOrignalUrl
} = require("../controller/redirectUrlController.js");

redirectUrlRouter.get(/^\/s-(.*)/, redirectToOrignalUrl);
module.exports = redirectUrlRouter;
