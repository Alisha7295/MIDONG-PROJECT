module.exports.config = {
	name: "a4",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk",
	description: "xem api",
	commandCategory: "THÀNH VIÊN",
    cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "api.gif")) request("https://i.imgur.com/QkyX1Vt.gif").pipe(fs.createWriteStream(dirMaterial + "api.gif"));
}
module.exports.run = async ({ event, api, args, Currencies }) => {
  const permission = ["100070"];
	if (!permission.includes(event.senderID)) return api.sendMessage("→ 𝗫𝗲𝗺 𝗰𝗼𝗻 𝗰𝗮̣̆𝗰 🐧", event.threadID, event.messageID);
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    
    if (!args[0]) {
     var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n
𝟭 → 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐓𝐫𝐮𝐧𝐠 𝐇𝐢𝐞̂́𝐮\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝗶𝗻𝗳𝗼 𝗰𝗼́ 𝘀𝗮̆̃𝗻 💓`
        
        return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/api.gif`)}, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "Gái" :
          case "gái":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗜𝗡𝗙𝗢 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗶𝗻𝗳𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌟\n━━━━━━━━━━━━━━━━━━\nhttps://Profile.trunghieuvn.repl.co`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Profile.trunghieuvn.repl.co')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "boy" :
            case "Trai" :
          case "trai":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝘁𝗿𝗮𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🧒\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/trai`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/trai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
        }