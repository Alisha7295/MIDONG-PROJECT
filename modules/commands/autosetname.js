module.exports.config = {
    name: "autosetname",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "BLACK",
    description: "Tự động setname cho thành viên mới",
    commandCategory: "Box Chat",
    usages: "[add <name> /remove] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const axios = require('axios');
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "add": {
            if (content.length == 0) return api.sendMessage("𝐏𝐡𝐚̂̀𝐧 𝐜𝐚̂́𝐮 𝐡𝐢̀𝐧𝐡 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨̉ 𝐭𝐫𝐨̂́𝐧𝐠!", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐱𝐨́𝐚 𝐜𝐚̂́𝐮 𝐡𝐢̀𝐧𝐡 𝐭𝐞̂𝐧 𝐜𝐮̃ 𝐭𝐫𝐮̛𝐨̛́𝐜 𝐤𝐡𝐢 đ𝐚̣̆𝐭 𝐭𝐞̂𝐧 𝐦𝐨̛́𝐢!!!", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`Đ𝐚̣̆𝐭 𝐜𝐚̂́𝐮 𝐡𝐢̀𝐧𝐡 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n𝐏𝐫𝐞𝐯𝐢𝐞𝐰: ${content} ${name}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("𝐍𝐡𝐨́𝐦 𝐛𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 đ𝐚̣̆𝐭 𝐜𝐚̂́𝐮 𝐡𝐢̀𝐧𝐡 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢!!", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`𝐗𝐨́𝐚 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐩𝐡𝐚̂̀𝐧 𝐜𝐚̂́𝐮 𝐡𝐢̀𝐧𝐡 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢`, threadID, messageID);
                break;
        }
        default: {
                if (!args[0]) return api.sendMessage({body: `=== [ 𝗔𝗨𝗧𝗢𝗦𝗘𝗧𝗡𝗔𝗠𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n🌸𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🌸\n\n𝟭. 𝗔𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗮𝗱𝗱 + 𝗯𝗱 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 đ𝗮̣̆𝘁 𝗸𝗵𝗶 𝘁𝘃𝗺 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 (𝘃𝗱: ?𝗮𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗮𝗱𝗱 𝘁𝘃𝗺)\n𝟮. 𝗔𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝗿𝗲𝗺𝗼𝘃𝗲 đ𝗲̂̉ 𝘅𝗼́𝗮 𝗯𝗱 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ đ𝗮̣̆𝘁 (𝘃𝗱: ?𝗮𝘂𝘁𝗼𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗿𝗲𝗺𝗼𝘃𝗲)`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/phongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}