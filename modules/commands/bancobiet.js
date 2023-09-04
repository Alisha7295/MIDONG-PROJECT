module.exports.config = {
	name: "bancobiet",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Help giống Spermbot :3",
	commandCategory: "Kiến Thức Học Hỏi",
	usages: "[lệnh]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Chó Thường Biết Sủa" , "Con Người Thường Ăn Rồi Ỉa" , " Không Nên Tranh Luận Với Lũ Không Não "];
var tle = tl[Math.floor(Math.random() * tl.length)];
 if (!args[0]) return api.sendMessage({body: `[🌸𝗕𝗮̣𝗻 𝗖𝗼́ 𝗕𝗶𝗲̂́𝘁🌸]: ${tle}.`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/phongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};