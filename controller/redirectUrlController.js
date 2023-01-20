const shortUrlModel = require("../models/shortUrl.js");

const redirectToOrignalUrl = async (req, res) => {
  const shortUrlId = req.params[0];
  try {
    const result = await shortUrlModel.findOne({
      urlId: shortUrlId
    });
    if (result == null) {
      return res
        .status(404)
        .json({ success: false, message: "invalid short URL" });
    }
    result.clicks++;
    result.save();

    res.redirect(result.longUrl);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { redirectToOrignalUrl };
