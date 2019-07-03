const axios = require("axios");
const YTS_URL = "https://yts.lt/api/v2";

module.exports = async (req, res) => {
  const { url } = req;
  if (url === "/") {
    return res.json({
      ok: false,
      error: "You need to specify an endpoint",
      endpoint_documentation: "https://yts.lt/api"
    });
  }
  const { data } = await axios.get(`${YTS_URL}${url}`);
  return res.json(data);
};
