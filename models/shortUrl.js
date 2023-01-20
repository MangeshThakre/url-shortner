const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  urlId: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

const shortUrlModel = mongoose.model("ShortUrl", shortUrlSchema);
module.exports = shortUrlModel;
