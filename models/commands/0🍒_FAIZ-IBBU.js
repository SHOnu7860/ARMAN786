const fs = require("fs");
module.exports.config = {
  name: "Ibbu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Ibbu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Ibbu")==0 || event.body.indexOf("ibbu")==0 || event.body.indexOf("@@⃝ 𝐊𝐢𝐥𝐥𝐞𝐫𓆩𝐁𝐨𝐲𓆪⃝ ")==0 || event.body.indexOf("IBBU")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐈𝐁𝐁𝐔 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐄",
        attachment: fs.createReadStream(__dirname + `/FAIZ/IBBU.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }