require("dotenv").config();
const app = require("./app.js");
const mongoDbConnect = require("./config/database.js");
const PORT = process.env.PORT || 5000;
// mongoDb connection
mongoDbConnect();

app.listen(PORT, () => {
  console.log("serverListning on http://localhost:8081");
});
