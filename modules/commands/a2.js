module.exports.config = {
    name: "a2",
    version: "2.1.9",
    hasPermssion: 3,
    credits: "nhhoang",
    description: "Tiêu điểm tướng liên quân",
    commandCategory: "người dùng",
    usages: "",
    hide: true,
    cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "menuapi.gif")) request("https://i.imgur.com/XXMV2Bn.gif").pipe(fs.createWriteStream(dirMaterial + "menuapi.gif"));
}
module.exports.run = async ({ api, event, args, Users })  => {
    const moment = require("moment-timezone"); 
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
   
    const cheerio = global.nodemodule["cheerio"];
    if (!args[0]) return api.sendMessage({body: `=== ${timeNow} ===`, attachment: fs.createReadStream(__dirname + `/noprefix/menuapi.gif`)}, event.threadID);
    var path = __dirname + '/';
    switch (args[0]) {
        case "-mp3":
        case 'apimp3': {
            fs.unlink(`💓`);
            return api.sendMessage(`https://ApiNhhoangDawn.vnhoang06.repl.co/apimp3nhacchill`, event.threadID, event.messageID);
            break;
        }
        case "search florentino":
        case 'florentino': {
          fs.unlink(`💓`);
        const axios = require('axios');
        return api.sendMessage({body: `=== [ 𝗙𝗟𝗢𝗥𝗘𝗡𝗧𝗜𝗡𝗢 ] ====\n━━━━━━━━━━━━━━━━━━\n\nCông vật lý 352
Công phép 0
Máu tối đa 6277
Giáp 310
Giáp phép 154
Tốc đánh 26
Giảm hồi chiêu 0
Tỉ lệ chí mạng 0
Tốc chạy 380
Hồi máu / 5s 76
Hồi nội năng /5s 50
Tầm đánh Gần
Đặc biệc: Phải có người yêu💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://ApiNhhoangDawn.vnhoang06.repl.co/florentino')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            break;
        }
        case "search quillen":
        case 'quillen': {
          fs.unlink(`💓`);
        const axios = require('axios');
        return api.sendMessage({body: `=== [ 𝗤𝗨𝗜𝗟𝗟𝗘𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n\nCông vật lý 415
Công phép 0
Máu tối đa 5957
Giáp 341
Giáp phép 162
Tốc đánh 28
Giảm hồi chiêu 0
Tỉ lệ chí mạng 0
Tốc chạy 380
Hồi máu / 5s 78
Hồi nội năng /5s 0
Tầm đánh Gần`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://ApiNhhoangDawn.vnhoang06.repl.co/quillen')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
   ;
		}
	}
}