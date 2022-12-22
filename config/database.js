const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;
const mongoDbConnect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("connected to DB"))
    .catch((error) => console.log(error));
};

module.exports = mongoDbConnect;
