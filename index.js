const axios = require("axios");
const YTS_URL = "https://yts.mx/api/v2";

module.exports = async (req, res) => {
  const { url } = req;
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (url === "/") {
    return res.json({
      ok: false,
      error: "You need to specify an endpoint",
      endpoint_documentation: "https://yts.mx/api"
    });
  }
  const { data } = await axios.get(`${YTS_URL}${url}`);
  return res.json(data);
};
