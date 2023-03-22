const axios = require("axios");

module.exports = async (url) => {
  process.stdout.write("\rDescargando Sitio ====== 0%");
  const { data } = await axios.get(url);
  return data;
};
