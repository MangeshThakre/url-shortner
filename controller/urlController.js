const shortUrlModel = require("../models/shortUrl.js");

const shortUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const shortUrlInfo = shortUrlModel({ longUrl });
    const result = await shortUrlInfo.save();
    const shortUrl = process.env.BASE_URL + "/s-" + result.urlId;
    res.status(200).json({
      success: true,
      data: { longUrl: result.longUrl, urlId: result.urlId, shortUrl: shortUrl }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getClicks = async (req, res) => {
  const shortUrlId = req.params.shortUrl.slice(2);
  try {
    const clicks = await shortUrlModel.findOne(
      { urlId: shortUrlId },
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

module.exports = { shortUrl, getClicks };
