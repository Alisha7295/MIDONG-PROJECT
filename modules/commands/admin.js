module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 3,
	credits: "Mirai Team",
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Admin",
	usages: " bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
      "addedNewNDH": '𝗠𝗢𝗗𝗘 - Đã thêm thành công %1 người dùng trở thành Người hỗ trợ\n\n%2',
        "listAdmin": `====== [ 𝗗𝗮𝗻𝗵 𝗦𝗮́𝗰𝗵 𝗧𝗮̂́𝘁 𝗖𝗮̉ 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁 ] ======\n\n%1\n\n\n=== [ 𝗗𝗮𝗻𝗵 𝗦𝗮́𝗰𝗵 𝗧𝗮̂́𝘁 𝗖𝗮̉ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗛𝗼̂̃ 𝗧𝗿𝗼̛̣ 𝗕𝗼𝘁 ] ===\n\n%2`,
        "notHavePermssion": 'Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": 'Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": 'Đã gỡ bỏ %1 người điều hành bot:\n\n%2',
  "removedNDH": '𝗠𝗢𝗗𝗘 - Đã gỡ thành công vai trò Người hỗ trợ %1 người dùng trở lại làm thành viên\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async  ({ api, event, args, Users, permssion, getText }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const content = args.slice(1, args.length);
 axios.get('https://jrt-api.j-jrt-official.repl.co/gaisexy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
let callback = function () {
    if (args.length == 0)
      api.sendMessage({body:`=== [ 𝗕𝗮̣𝗻 𝗖𝗼́ 𝗧𝗵𝗲̂̉ 𝗗𝘂̀𝗻𝗴 ] ===━━━━━━━━━━━━━━━━━━\n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 => 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐥𝐚̀𝐦 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝𝐧𝐝𝐡 => 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐥𝐚̀𝐦 𝐧𝐝𝐡 𝐛𝐨𝐭 \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐥𝐢𝐬𝐭 => 𝐱𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐦𝐨𝐯𝐞 => 𝐠𝐨̛̃ 𝐛𝐨̉ 𝐚𝐝𝐦𝐢𝐧 \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐦𝐨𝐯𝐞𝐧𝐝𝐡 => 𝐠𝐨̛̃ 𝐛𝐨̉ 𝐧𝐝𝐡 \n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐱𝐨𝐧𝐥𝐲 => 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭\n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 => 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭\n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚 => 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐜𝐡𝐢̉ 𝐜𝐨́ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐯𝐨̛́𝐢 𝐛𝐨𝐭\n[🕊] 𝐚𝐝𝐦𝐢𝐧 𝐧𝐝𝐡𝐨𝐧𝐥𝐲 => 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐜𝐡𝐢̉ 𝐜𝐨́ 𝐧𝐝𝐡 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭 \n» 𝐇𝐃𝐒𝐃: ${global.config.PREFIX} 𝐀𝐝𝐦𝐢𝐧 [𝐭𝐞𝐱𝐭]
`,
						attachment: fs.createReadStream(__dirname + `/cache/admin.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/admin.${ext}`), event.messageID);
				};
				 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/admin.${ext}`)).on("close", callback);
			})
 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": { 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`[🕊]  ${name}\n𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/profile.php?id=${idAdmin} `);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`[🕊] ${name1}\n𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/profile.php?id=${idNDH} `);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n\n"), msg1.join("\n\n")), threadID, messageID);
        }

       
        case "add": { 
            if (event.senderID !=100024005894493) return api.sendMessage(`» Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `『ADMIN』» ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID !=100024005894493) return api.sendMessage(`» Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] ❯ ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
        
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("=== [ 𝗕𝗢𝗫𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧, 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐁𝐨𝐭 🎀", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("=== [ 𝗕𝗢𝗫𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐊𝐢́𝐜𝐡 𝐡𝐨𝐚̣𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧, 𝐜𝐡𝐢̉ 𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐁𝐨𝐭 🎀", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`=== [ 𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭 ✨️`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`=== [ 𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭 ✨️`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
          case 'pa':
        case '-pa': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
               if (config.adminPaseOnly == false) {
                config.adminPaseOnly = true;
                api.sendMessage("=== [ 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 🍞", threadID, messageID);
            } else {
                config.adminPaseOnly = false;
                api.sendMessage("=== [ 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 🍞", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ndhonly':
        case '-ndh': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("» Xin lỗi! lệnh này chỉ Admin mới dùng được", threadID, messageID);
            if (config.ndhOnly == false) {
                config.ndhOnly = true;
                api.sendMessage(`=== [ 𝗡𝗗𝗛𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐍𝐃𝐇 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭 🐰`, threadID, messageID);
            } else {
                config.ndhOnly = false;
                api.sendMessage(`=== [ 𝗕𝗢𝗫𝗢𝗡𝗟𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n - 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐍𝐃𝐇 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭 🐰`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case "addndh": { 
          if (event.senderID != 100081059557545) return api.sendMessage(`𝗠𝗢𝗗𝗘 - Cần quyền Admin chính để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", 1, `𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣ - ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
  }
        case "removendh":{
          if (event.senderID !=100024005894493) return api.sendMessage(`𝗠𝗢𝗗𝗘 - Cần quyền Admin để thực hiện`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`${id} -${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                      }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}