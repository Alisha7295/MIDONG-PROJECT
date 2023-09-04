module.exports.config = {
	name: "a3",
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
  const permission = ["100070159519360"];
	if (!permission.includes(event.senderID)) return api.sendMessage("→ chỉ admin chính của bot mới có thể dùng 💞", event.threadID, event.messageID);
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    
    if (!args[0]) {
     var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗔𝗣𝗜 ] ====
━━━━━━━━━━━━━━━━━━\n
𝟭 → 𝐀𝐩𝐢 𝐊𝐮𝐫𝐮𝐦𝐢  ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐯𝐢𝐝𝐞𝐨 𝐊𝐮𝐫𝐮𝐦𝐢 )
𝟮 → 𝐀𝐩𝐢 𝐉𝐞𝐚𝐧𝐧𝐞 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐉𝐞𝐚𝐧𝐧𝐞 )
𝟯 → 𝐀𝐩𝐢 𝐕𝐚𝐧𝐢𝐭𝐚𝐬 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐯𝐚𝐧𝐢𝐭𝐚𝐬 )
𝟰 → 𝐀𝐩𝐢 𝐒𝐡𝐢𝐤𝐢𝐦𝐨𝐫𝐢 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐒𝐡𝐢𝐤𝐢𝐦𝐨𝐫𝐢 )
𝟱 → 𝐀𝐩𝐢 𝐍𝐢𝐧𝐨 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐍𝐢𝐧𝐨 )
𝟲 → 𝐀𝐩𝐢 𝐚𝐯𝐭 𝐚𝐧𝐢𝐦𝐞 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐚𝐯𝐭 𝐚𝐧𝐢𝐦𝐞 )
𝟳 → 𝐀𝐩𝐢 𝐯𝐢𝐝𝐞𝐨 𝐑𝐢𝐧 𝐓𝐨𝐡𝐬𝐚𝐤𝐚 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐯𝐢𝐝𝐞𝐨 𝐑𝐢𝐧 𝐓𝐨𝐡𝐬𝐚𝐤𝐚 )
𝟴 → 𝐀𝐩𝐢 𝐀𝐫𝐲𝐚 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐀𝐫𝐲𝐚 )
𝟵 → 𝐀𝐩𝐢 𝐂𝐡𝐢𝐭𝐨𝐠𝐞 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐂𝐡𝐢𝐭𝐨𝐠𝐞 )
𝟭𝟬 → 𝐀𝐩𝐢 𝐓𝐨𝐡𝐫𝐮 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐓𝐨𝐡𝐫𝐮 )
𝟭𝟭 → 𝐀𝐩𝐢 𝐒𝐮𝐳𝐮𝐧𝐞 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐒𝐮𝐳𝐮𝐧𝐞 )
𝟭𝟮 → 𝐀𝐩𝐢 𝐒𝐮𝐠𝐨𝐢𝐬𝐮𝐠𝐨𝐢 ( 𝐓𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐡𝐢̀𝐧𝐡 𝐚̉𝐧𝐡 𝐒𝐮𝐠𝐨𝐢𝐬𝐮𝐠𝐨𝐢 )
𝟭𝟯 → 𝗔𝗽𝗶 𝗰𝘂 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝘆𝗺 𝗰𝘁𝗿𝗮𝗶 )
𝟭𝟰 → 𝗚𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗮́𝗼 𝗱𝗮̀𝗶 𝘃𝗶𝗲̣̂𝘁 𝗻𝗮𝗺 )
𝟭𝟱 → 𝗛𝗼̣𝗰 𝘀𝗶𝗻𝗵 ( 𝗰𝗮́𝗰 𝗮̉𝗻𝗵 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗻𝗮𝗺/𝗻𝘂̛̃ 𝗩𝗶𝗲̣̂𝘁 𝗡𝗮𝗺)
𝟭𝟲 → 𝗔𝗽𝗶 𝘃𝗶𝗱𝗲𝗼 𝗮𝗻𝗶𝗺𝗲\n\n→ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆 𝗵𝗼𝗮̣̆𝗰 𝘁𝗲̂𝗻 𝗮𝗽𝗶 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗱𝘂̀𝗻𝗴 💓`
        
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
          case "Kurumi" :
          case "Kurumi":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐤𝐮𝐫𝐮𝐦𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/kurumi.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/kurumi.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "jeanne" :
            case "Jeanne" :
          case "jeanne":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐉𝐞𝐚𝐧𝐧𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/jeanne.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/jeanne.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Vanitas" :
          case "vanitas":
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐕𝐚𝐧𝐢𝐭𝐚𝐬 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/vanitas.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/vanitas.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "shikimori" :
          case "Shikimori":
        case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐒𝐡𝐢𝐤𝐢𝐦𝐨𝐫𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/shikimori`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/shikimori')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
                                }
case "nino" :
          case "Nino":
        case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐍𝐢𝐧𝐨 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/nino.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/nino.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Avt anime" :
          case "avt anime":
        case "6": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐚𝐯𝐭 𝐚𝐧𝐢𝐦𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/avt.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/avt.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "Video Rin Tohsaka" :
          case "video rin tohsaka":
        case "7": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐯𝐢𝐝𝐞𝐨 𝐑𝐢𝐧 𝐓𝐨𝐡𝐬𝐚𝐤𝐚 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/vdrin`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/vdrin')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "Arya" :
          case "arya":
        case "8": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐀𝐫𝐲𝐚 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/arya.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/arya.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "chitoge" :
          case "Chitoge":
        case "9": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐂𝐡𝐢𝐭𝐨𝐠𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/chitoge.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/chitoge.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
      }
case "Tohru" :
          case "tohru":
        case "10": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐓𝐨𝐡𝐫𝐮 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/tohru.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/tohru.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Suzune" :
          case "suzune":
        case "11": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐒𝐮𝐳𝐮𝐧𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/suzune.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/suzune.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "sugoisugoi" :
          case "Sugoisugoi":
        case "12": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝐀𝐩𝐢 𝐒𝐮𝐠𝐨𝐢𝐬𝐮𝐠𝐨𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐞̀\n━━━━━━━━━━━━━━━━━━\nhttps://api-trunghieu.hieutrung38.repl.co/api/sugoisugoi.php`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-trunghieu.hieutrung38.repl.co/api/sugoisugoi.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Cu" :
          case "cu":
        case "13": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗰𝘂 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🖕🏿\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/cu`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/cu')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Gái áo dài" :
          case "gái áo dài":
        case "14": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌹\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/nuaodai`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/nuaodai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "học sinh" :
          case "Học sinh":
        case "15": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🧸\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/hocsinh`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/hocsinh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Video Anime" :
          case "vidanime":
        case "16": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝘃𝗶𝗱𝗲𝗼 𝗮𝗻𝗶𝗺𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 💓\n━━━━━━━━━━━━━━━━━━\nhttps://Api-By-Nhhoang.vnhoang06.repl.co/videoanime1`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/animevideo')).data.data,
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