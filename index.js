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
  try {
    const reqURL = `${YTS_URL}${url}`;
    res.writeHead(302, {
      Location: reqURL
      //add other headers here...
    });
    res.end();
  } catch (error) {
    console.log(error);
  }
};
