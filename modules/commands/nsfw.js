module.exports.config = {
	name: "nsfw",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Bật tắt quyền sử dụng các lệnh NSFW",
	commandCategory: "system",
	cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "returnSuccessEnable": "=== 『 𝗟𝗘̣̂𝗡𝗛 𝟭𝟴+ 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ Đ𝗮̃ 𝗰𝗵𝗼 𝗽𝗵𝗲́𝗽 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗡𝗦𝗙𝗪 💓",
        "returnSuccessDisable": "=== 『 𝗟𝗘̣̂𝗡𝗛 𝟭𝟴+ 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ Đ𝗮̃ 𝗰𝗮̂́𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗡𝗦𝗙𝗪 💓",
        "error": "Đã có lỗi xảy ra, vui lòng thử lại sau"
    },
    "en": {
        "returnSuccessEnable": "Success enable NSFW command for this group",
        "returnSuccessDisable": "Success disable NSFW command for this group",
        "error": "Error! An error occurred. Please try again later!"
    }
}

module.exports.run = async function ({ event, api, Threads, getText }) {
    const { threadID, messageID } = event;
    const { getData, setData } = Threads;
    var type;

    try {
        let data = (await getData(threadID)).data || {};
        if (typeof data == "undefined" || data.NSFW == false) {
            data.NSFW = true;
            global.data.threadAllowNSFW.push(threadID);
            type = "on"
        }
        else {
            data.NSFW = false;
            global.data.threadAllowNSFW = global.data.threadAllowNSFW.filter(item => item != threadID);
        }
        await setData(threadID, { data });
        return api.sendMessage((type == "on") ? getText("returnSuccessEnable") : getText("returnSuccessDisable"), threadID, messageID);
    } catch (e) { console.log(e); return api.sendMessage(getText("error"), threadID, messageID) }
}