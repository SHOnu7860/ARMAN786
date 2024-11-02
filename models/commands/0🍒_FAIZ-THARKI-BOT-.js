const fs = require("fs");
module.exports.config = {
  name: "Tharki",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tharki",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tharki")==0 || event.body.indexOf("Tharki")==0 || event.body.indexOf("THARKI")==0 || event.body.indexOf("bot tharki")==0) {
    var msg = {
        body: "𝐓𝐇𝐀𝐑𝐈 𝐓𝐎 𝐌𝐀𝐈 𝐇𝐔 𝐇𝐈 𝐁𝐀𝐁𝐔😹",
        attachment: fs.createReadStream(__dirname + `/FAIZ/THARKI.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
