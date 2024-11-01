const fs = require("fs");
module.exports.config = {
  name: "manvi",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Manvi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Manvi")==0 || event.body.indexOf("MANVI")==0 || event.body.indexOf("@Manvi Chaudhry")==0 || event.body.indexOf("manvi")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐌𝐀𝐍𝐕𝐈 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐈",
        attachment: fs.createReadStream(__dirname + `/FAIZ/MANVI.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }