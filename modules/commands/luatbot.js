module.exports.config = {
    name: "luatbot",
    version: "1.1.2",
    hasPermssion: 0,
    credits: "tdonguwu",
    description: "Bủ bủ lmao",
    commandCategory: "Rule",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};
 
module.exports.run = async function({ api, event, args, Users }) {
    const axios = require('axios');
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    let { threadID, messageID , senderID } = event;
    const res = await axios.get('https://api-trunghieu.hieutrung38.repl.co/api/kurumi.php');
    const link = res.data.data;
    var callback = () => api.sendMessage({
                 body: '💖 𝐋𝐔𝐀̣̂𝐓 𝐒𝐔̛̉ 𝐃𝐔̣𝐍𝐆 𝐁𝐎𝐓 💖 ⚠ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐡𝐚̀𝐧𝐡 𝐧𝐠𝐡𝐢𝐞̂𝐦 𝐜𝐡𝐢̉𝐧𝐡 𝐭𝐫𝐚́𝐧𝐡 𝐛𝐢̣ 𝐛𝐚𝐧\n𝟏: 𝐊𝐡𝐨̂𝐧𝐠 𝐬𝐩𝐚𝐦 𝐥𝐞̣̂𝐧𝐡 𝐛𝐨𝐭, 𝐬𝐩𝐚𝐦 𝐩𝐫𝐞𝐟𝐢𝐱 𝐪𝐮𝐚́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐠𝐚̂𝐲 𝐝𝐢𝐞 𝐛𝐨𝐭, 𝐜𝐡𝐞𝐜𝐤𝐩𝐨𝐢𝐧𝐭 🚫\n𝟐: 𝐊𝐡𝐨̂𝐧𝐠 𝐠𝐚̂𝐲 𝐰𝐚𝐫 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 (𝐬𝐢𝐦, 𝐧𝐢𝐧𝐨) 𝐯𝐢̀ 𝐧𝐨́ 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐭𝐡𝐚̣̂𝐭 !\n𝟑: 𝐊𝐡𝐨̂𝐧𝐠 𝐥𝐚̣𝐦 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐚̀𝐨 𝐲́ 𝐱𝐚̂́𝐮\n𝟒: 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 8 𝐥𝐚̂̀𝐧/60𝐬\n𝟓: 𝐓𝐫𝐮̛𝐨̛̀𝐧𝐠 𝐡𝐨̛̣𝐩 𝐛𝐢̣ 𝐛𝐚𝐧 𝐚𝐝𝐦𝐢𝐧 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐠𝐢𝐚̉𝐢 𝐪𝐮𝐲𝐞̂́𝐭 𝐦𝐨̛̉ 𝐛𝐚𝐧 𝐧𝐡𝐞́.\n𝟔: 𝐂𝐚̂́𝐦 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐝𝐮̛𝐨̛́𝐢 𝐦𝐨̣𝐢 𝐡𝐢̀𝐧𝐡 𝐭𝐡𝐮̛́𝐜, 𝐜𝐡𝐮̛̉𝐢 𝐭𝐡𝐨𝐚̉𝐢 𝐦𝐚́𝐢 𝐧𝐞̂́𝐮 𝐧𝐡𝐮̛ 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐱𝐚̀𝐢 𝐛𝐨𝐭 𝐯𝐚̀ 𝐲́ 𝐭𝐡𝐮̛́𝐜 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐡𝐮̛ 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜\n𝐇𝐚̃𝐲 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐦𝐨̣̂𝐭 𝐜𝐚́𝐜𝐡 𝐭𝐡𝐨̂𝐧𝐠 𝐦𝐢𝐧𝐡 𝐯𝐚̀ 𝐲́ 𝐭𝐡𝐮̛́𝐜 🌺',
                 attachment:  fs.createReadStream(__dirname + "/cache/luatbot.mp4")}, threadID,
        () => fs.unlinkSync(__dirname + "/cache/luatbot.mp4"), messageID);
          request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname+'/cache/luatbot.mp4')).on('close',
        () => callback());
};