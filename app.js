const express = require("express");
const urlRouter = require("./router/urlRouter.js");
const redirectUrlRouter = require("./router/redirectUrlRouter.js");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "view/build")));
  app.use("/api", urlRouter);
  app.use("/", redirectUrlRouter);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view", "build", "index.html"));
  });
} else {
  app.use("/api", urlRouter);
  app.use("/", redirectUrlRouter);
}

module.exports = app;
