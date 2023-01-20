const express = require("express");
const urlRouter = express.Router();
const {
  shortUrl,
  redirectToOrignalUrl,
  getClicks
} = require("../controller/urlController.js");
const validateUrl = require("../meddleware/checkValidUrl.js");



urlRouter.post("/shortUrl", validateUrl, shortUrl);
urlRouter.get("/clicks/:shortUrl", getClicks);
module.exports = urlRouter;
