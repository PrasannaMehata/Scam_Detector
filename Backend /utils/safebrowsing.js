const axios = require('axios');

const checkURLSafety = async (url) => {
  const API_KEY = process.env.GOOGLE_SAFE_BROWSING_API;
  const endpoint = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

  const body = {
    client: { clientId: "yourcompany", clientVersion: "1.0" },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }]
    }
  };

  const response = await axios.post(endpoint, body);
  return { safe: !response.data.matches };
};

module.exports = { checkURLSafety };
