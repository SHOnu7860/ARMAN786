const fs = require("fs");
module.exports.config = {
  name: "Haniya",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("haniya")==0 || event.body.indexOf("HANIYA")==0 || event.body.indexOf("@Ɣəʬ'ɽ Hʌŋɩƴʌ Kʜʌŋ Oʬəɭɭə'x")==0 || event.body.indexOf("Haniya")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐇𝐀𝐍𝐈𝐘𝐀  𝐉𝐈 𝐀 𝐆𝐀𝐘𝐈",
        attachment: fs.createReadStream(__dirname + `/FAIZ/HANIYA.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }