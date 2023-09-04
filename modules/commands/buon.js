module.exports.config = {

    name: "buon",

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

    if (!fs.existsSync(dirMaterial + "buồn.mp4")) request("https://i.imgur.com/0i3FRGR.mp4").pipe(fs.createWriteStream(dirMaterial + "buồn.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {

                body: `𝗛𝗮̃𝘆 𝘃𝘂𝗶 𝗹𝗲̂𝗻 𝗻𝗮̀𝗼 𝗯𝗯𝗶 ${name} 𝗰𝘂̉𝗮 𝗯𝗼𝘁 💗`,

                attachment: fs.createReadStream(__dirname + `/noprefix/buồn.mp4`)

            }

    if (event.body.toLowerCase() == "buồn vãi ò"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "bùn"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "bùn quá ae"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "bùn vcl"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "dawn bùn"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "tui bùn"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

}