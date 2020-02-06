const axios = require("axios");
const YTS_URL = "https://yts.mx/api/v2";

module.exports = async (req, res) => {
  const { url } = req;
  if (url === "/") {
    return res.json({
      ok: false,
      error: "You need to specify an endpoint",
      endpoint_documentation: "https://yts.mx/api"
    });
  }
  res.writeHead(302, {
    Location: `${YTS_URL}${url}`,
    "Access-Control-Allow-Origin": "*"
  });
  return res.end();
};
