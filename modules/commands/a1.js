const axios = require('axios');
const fse = require('fs-extra');
const DownLoad = async (url, file, ext) => {
var array = [];
  for (var i = 0; i < url.length; i++) {
const dest = __dirname + `/cache/${file}_${i}.${ext}`; 
await require('image-downloader').image({ url: url[i], dest }); 
 array.push(fse.createReadStream(dest));
//fse.unlinkSync(dest);
  };
return array;
}
const config = {
	name: 'a1',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'nhhoang',
	description: 'Như tên',
	commandCategory: 'THÀNH VIÊN',
	usages: 'Hướng dẫn cách dùng những game có trên bot',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
const UID = sid
  
      const images = ['https://i.imgur.com/HO6713l.jpeg',
'https://i.imgur.com/rbQUe3H.jpeg',];
      const pn = args[0][0] + config.name
      api.sendMessage({body: "===『𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘』===\n━━━━━━━━━━━━━━━\n→ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗮́𝗰 𝗴𝗮𝗺𝗲 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n===== 𝗟𝗜𝗘̂𝗡 𝗤𝗨𝐀̂𝗡 =====\n→ ?𝗹𝗶𝗲𝗻𝗾𝘂𝗮𝗻 + 𝘁𝗲̂𝗻 𝘁𝘂̛𝗼̛́𝗻𝗴 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘀𝘂̛́𝗰 𝗺𝗮̣𝗻𝗵\n→ ?𝗹𝗾 + 𝗿𝗲𝗽𝗹𝘆 𝘁𝘂̛̀𝗻𝗴 𝘁𝗻 𝗰𝘂̉𝗮 𝗯𝗼𝘁 đ𝗲̂̉ 𝘁𝗮̣𝗼 𝟭 𝗸𝗵𝘂𝗻𝗴 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝘆𝗰\n===== 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘 =====\n→ ?𝗳𝗿𝗲𝗲 𝗳𝗶𝗿𝗲 + 𝗰𝗵𝘂̛𝗮 𝘂𝗽𝗱𝗮𝘁𝗲...\n→ ?𝗳𝗿𝗲𝗲 𝗳𝗶𝗿𝗲 + 𝗰𝗵𝘂̛𝗮 𝘂𝗽𝗱𝗮𝘁𝗲...\n==== 💓 ====", attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}