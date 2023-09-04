module.exports.config = {
    name: 'ghichu',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'www.facebook.com/levy.nnm.2k5',
    commandCategory: 'ADMIN',
    usages: '[]',
    cooldowns: 3,
    dependencies: {
        axios: '',
        'fs-extra': ''
    }
};
const {
    readFileSync, writeFileSync, existsSync
} = require('fs-extra');


const {
    get, post
} = require('axios');
const CN = `https://api.nambsls.repl.co/ship`;
module.exports.language = require('./cmd.js').language;
module.exports.run = async function({
    api, event, args
}) {
    try {
        if (!args[0]) return api.sendMessage({body: `=== 『 𝗚𝗛𝗜 𝗖𝗛𝗨́ 』 ====\n━━━━━━━━━━━━━━━━━━\n\n1. → 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ?𝗴𝗵𝗶𝗰𝗵𝘂 + 𝗿𝗲𝗽𝗹𝘆 𝗹𝗶𝗻𝗸 𝗰𝗮̂̀𝗻 𝘂𝗽 𝗹𝗲̂𝗻 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀\n2. → 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ?𝗴𝗵𝗶𝗰𝗵𝘂 + 𝘁𝗲̂𝗻 𝗺𝗱𝗹 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘀𝗲𝗻𝗱𝗳𝗶𝗹𝗲`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/phongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
      if (event.senderID != 100059953981036) return api.sendMessage(`Không thể gửi file`, event.threadID, event.messageID)
        const dest = `${__dirname}/${args[0]}.js`;
        if (event.type == 'message_reply') {
            const mr0 = event.messageReply.args[0];
            const url = !!args[1] ? `${mr0}?pw_id=${args[1]}`: mr0;
            const res = await get(url);
            if (!!res.data.status) return api.sendMessage(`${res.data.message}`, event.threadID, event.messageID);
            api.sendMessage(`Reaction để xác nhận áp dụng code mới vào file ${args[0].split('/').pop()}`, event.threadID, (err, data) => global.client.handleReaction.push({
                name: this.config.name, messageID: data.messageID, author: event.senderID, data: res.data, dest, file: args[0]
            }), event.messageID);
        } else {
            if (!existsSync(dest)) return api.sendMessage(`Không tìm thấy file ${args[0].split('/').pop()}.js`, event.threadID, event.messageID);
            const res = await post(`${CN}/create`, {
               n: args[0], data: readFileSync(dest, 'utf-8'), t_end_id: args[1], pw_id: args[2]});
               if (res.data.status != 201) return api.sendMessage(`${res.data.message}`, event.threadID, event.messageID); else api.sendMessage(`${res.data.data}`, event.threadID, event.messageID);
        };
    } catch(e) {
        api.sendMessage(`${e}`, event.threadID)
    };
};
module.exports.handleReaction = function( {
    handleReaction: $, api, event, getText
}) {
    if (event.userID != $.author) return;
    writeFileSync($.dest, $.data, 'utf-8');
    require('./cmd.js').loadCommand({
        moduleList: [$.file], threadID: event.threadID, messageID: $.messageID, getText
    });
};