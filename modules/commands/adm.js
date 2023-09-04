module.exports.config = {

    name: "adm",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "Lê Định",

    description: "",

    commandCategory: "𝐍𝐨 𝐏𝐫𝐞𝐟𝐢𝐱",

    usages: "",

    cooldowns: 10,

    denpendencies: {

        "fs": "",

        "request": ""

    }

};

module.exports.onLoad = () => {

    const fs = require("fs-extra");

    const request = require("request");

    const dirMaterial = __dirname + `/noprefix/`;

    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });

    if (!fs.existsSync(dirMaterial + "adm.mp4")) request("https://imgur.com/KRQeBlR.mp4").pipe(fs.createWriteStream(dirMaterial + "adm.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {

                body: `𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${name} Đ𝐚̂𝐲 𝐥𝐚̀ 𝐚𝐝𝐦𝐢𝐧 𝐜𝐮̉𝐚 𝐛𝐨𝐭`,

                attachment: fs.createReadStream(__dirname + `/noprefix/adm.mp4`)

            }

    if (event.body.toLowerCase() == "admin là ai"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Hiếu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "adm"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "adu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

}