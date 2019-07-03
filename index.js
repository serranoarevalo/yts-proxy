const axios = require("axios");
const YTS_URL = "https://yts.lt/api/v2";

module.exports = async (req, res) => {
  const { url } = req;
  if (url === "/") {
    return res.status(404).end();
  }
  const { data } = await axios.get(`${YTS_URL}${url}`);
  return res.json(data);
};
