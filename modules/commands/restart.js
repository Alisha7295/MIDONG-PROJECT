module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Hệ Thống",
	usages: "",
	cooldowns: 5
};
module.exports.run = async function ({ api, event, args }) {
  const permission = ["100024005894493","100077106194307", "100070159519360"];
	if (!permission.includes(event.senderID)) return api.sendMessage("mày định trộm mdl ư, tuổi lồn nháaaa🖕", event.threadID, event.messageID);
module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐚̆́𝐭 đ𝐚̂̀𝐮 𝐭𝐢𝐞̂́𝐧 𝐡𝐚̀𝐧𝐡 𝐤𝐡𝐨̛̉𝐢 đ𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢 𝐁𝐨𝐭 💋`, threadID, () => process.exit(1));
 }
} 