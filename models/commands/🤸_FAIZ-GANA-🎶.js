const fs = require("fs");
module.exports.config = {
	name: "gana",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "FAIZU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("gna") ||
     react.includes("#music") || react.includes("ghana") || react.includes("gana") ||
react.includes("song") ||
react.includes("#song")) {
		var msg = {
				body: `गाना सुना है तो [#yt] फिर गाना का नाम लिख दो मेरी जान 🙂🖐️`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }