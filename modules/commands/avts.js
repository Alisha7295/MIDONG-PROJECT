module.exports.config = {
	name: "avts",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "nhhoang",
	description: "avts",
	commandCategory: "Random ảnh avts",
	usages: "avts [Text]",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://ApiNhhoangDawn.vnhoang06.repl.co/avtphatsang').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
            body: `[💓𝗔𝘃𝘁 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀💓]`,
						attachment: fs.createReadStream(__dirname + `/cache/avts.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avts.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/avts.${ext}`)).on("close", callback);
			})
}