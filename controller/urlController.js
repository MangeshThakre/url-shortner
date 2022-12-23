const shortUrlModel = require("../models/shortUrl.js");

const shortUrl = async (req, res) => {
  const { fullUrl } = req.body;
  try {
    const shortUrlInfo = shortUrlModel({ full: fullUrl });
    const result = await shortUrlInfo.save();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getClicks = async (req, res) => {
  const shortUrl = req.params.shortUrl.slice(2);
  try {
    const clicks = await shortUrlModel.findOne(
      { short: shortUrl },
      { clicks: 1 }
    );
    if (!clicks) {
      return res
        .status(404)
        .json({ success: false, message: "invalid short URL" });
    }
    res.status(200).json({ success: true, data: clicks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const redirectToOrignalUrl = async (req, res) => {
  const shortUrl = req.params[0];
  try {
    const result = await shortUrlModel.findOne({
      short: shortUrl
    });
    if (result == null) {
      return res
        .status(404)
        .json({ success: false, message: "invalid short URL" });
    }
    result.clicks++;
    result.save();
    res.redirect(result.full);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { shortUrl, redirectToOrignalUrl, getClicks };
