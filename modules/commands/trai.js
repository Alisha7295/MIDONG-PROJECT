module.exports.config = {
  name: "trai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Táo",
  description: "Ảnh trai",
  commandCategory: "THÀNH VIÊN",
  usages: "trai",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://ApiNhhoangDawn.vnhoang06.repl.co/imganhtrai').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `===== 𝗔̉𝗡𝗛 𝗧𝗥𝗔𝗜 =====\n━━━━━━━━━━━━\n→ 𝘀𝗼̂́ 𝗮̉𝗻𝗵 𝘁𝗿𝗮𝗶 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼: ${res.data.count}\n→ 𝗹𝗶𝗻𝗸 𝗮̉𝗻𝗵: ${res.data.url}\n𝗕𝗼̛́𝘁 𝗠𝗲̂ 𝗧𝗿𝗮𝗶 𝗟𝗮̣𝗶 -.-`,
            attachment: fs.createReadStream(__dirname + `/cache/trai.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trai.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/trai.${ext}`)).on("close", callback);
      })
}