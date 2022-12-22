const express = require("express");
const redirectUrlRouter = express.Router();
const { redirectToOrignalUrl } = require("../controller/urlController.js");

redirectUrlRouter.get("/:shortUrl", redirectToOrignalUrl);
module.exports = redirectUrlRouter;