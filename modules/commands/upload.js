module.exports.config = {
	name: "upload",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "",
	commandCategory: "Tiện ích",
	usages: "getLink",
	cooldowns: 5,
	dependencies: {
		"tinyurl": ""
	}
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios')
	let { messageReply, threadID } = event;
  const { API } = global.config
	if (event.type !== "message_reply") return api.sendMessage("→ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("→ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	else {
            let num = 0
            let msg = ``
          for (var i = 0; i < messageReply.attachments.length; i++) {
				var shortLink = await axios.post('https://Chuoiupload.manh10.repl.co/upload', 
        {
              url: messageReply.attachments[i].url
        });
            //api.sendMessage(messageReply.attachments[i].url,threadID);
				num +=1;
        msg += `"${shortLink.data.url}",\n`;
    	}
        api.sendMessage(msg,threadID);
        }
}