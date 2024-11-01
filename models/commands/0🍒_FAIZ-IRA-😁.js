const fs = require("fs");
module.exports.config = {
  name: "Ira",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Ira",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Iraa")==0 || event.body.indexOf("IRAA")==0 || event.body.indexOf("@ɭɭ Iraa ɭɭ")==0 || event.body.indexOf("iraa")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐈𝐑𝐀𝐀 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐈",
        attachment: fs.createReadStream(__dirname + `/FAIZ/IRA.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }