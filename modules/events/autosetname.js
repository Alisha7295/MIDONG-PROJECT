module.exports.config = {
	name: "autosetname",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "D-Jukie",
	description: "Tự động set biệt danh thành viên mới"
};

module.exports.run = async function({ api, event, Users }) {
const { threadID } = event;
var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
	for (let idUser of memJoin) {
		const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
		const { join } = global.nodemodule["path"]
		const pathData = join("./modules/commands","cache", "autosetname.json");
		var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
		var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
		if (thisThread.nameUser.length == 0) return 
		if (thisThread.nameUser.length != 0) {  
		var setName = thisThread.nameUser[0] 
		await new Promise(resolve => setTimeout(resolve, 1000));
		var namee1 = await api.getUserInfo(idUser)
        var namee = namee1[idUser].name
		api.changeNickname(`${setName} ${namee}`, threadID, idUser);
		} 
	}	
	return api.sendMessage(`Đ𝗮̃ 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝘁𝗮̣𝗺 𝘁𝗵𝗼̛̀𝗶 𝗰𝗵𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶🐬`, threadID, event.messageID)
}