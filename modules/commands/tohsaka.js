module.exports.config = {
  name: "upt",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Hải harin",
  description: "sos", 
  commandCategory: "Không cần dấu lệnh",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const request = require('request');
  const res = await axios.get(`https://apivip.trieutaitan3.repl.co/thinh`);
  var poem = res.data.data;
const moment = require("moment-timezone");var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "tohsaka") {
       api.sendMessage({body: `「 👾 」 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀: ${thu} ${gio} 𝐕𝐚̀ 𝐁𝐎𝐓 𝐜𝐡𝐚̣𝐲 đ𝐚̃ 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲.\n◆━━━━━━━━━━━━━◆\nㅤ===🗃「  𝗗𝗔𝗧𝗔 𝗨𝗦𝗘𝗥  」🗃===\n「 🎎 」𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n「 🏩 」𝐓𝐨̂̉𝐧𝐠 𝐧𝐡𝐨́𝐦: ${global.data.allThreadID.length}\nㅤ=====「 🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥 」=====\n「 🎮 」 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: 𝗠𝗶𝗿𝗮𝗶 𝘃𝟮\n「 🐳 」 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n「 💾 」 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝟏.𝟐.𝟏𝟒\n「 💻 」𝐂𝐩𝐮 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${pidusage.cpu.toFixed(1)}\n「 📈 」 𝐑𝐚𝐦 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${byte2mb(pidusage.memory)}\n「 🌐 」𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}𝐦𝐬\n「 💬 」 𝐓𝐡𝐢́𝐧𝐡: ${poem}\n🎀──── •🌸• ────🎀\n`,  attachment: (await axios.get((await
axios.get(`https://api-ryo.hieutrung38.repl.co/api/vdrin.php`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
}
  module.exports.handleReaction = async function({ api, event, Threads, handleReaction, getText }) {
		var data = (await Threads.getData(String(threadID))).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(String(threadID), data);
}
module.exports.run = async ({ api, event, args, Threads }) => {
  global.client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	}