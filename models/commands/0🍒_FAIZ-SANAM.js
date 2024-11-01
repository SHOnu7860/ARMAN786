const fs = require("fs");
module.exports.config = {
  name: "Sanam",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Sanam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Sanam Khan")==0 || event.body.indexOf("sanam")==0 || event.body.indexOf("Sanam")==0 || event.body.indexOf("SANAM")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐒𝐀𝐍𝐀𝐌 𝐉𝐈 𝐀 𝐆𝐘𝐈",
        attachment: fs.createReadStream(__dirname + `/FAIZ/SANAM.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }