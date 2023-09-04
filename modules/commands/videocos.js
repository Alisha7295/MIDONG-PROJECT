const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "videocos",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTK",
  description: "video ",
  commandCategory: "Video cá nhân",
  usages: "videocosplay",
  cooldowns: 5,
    dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.imgur.com/YoTbz4d.mp4",
"https://i.imgur.com/097B6D8.mp4",
"https://i.imgur.com/xrCInYm.mp4",
"https://i.imgur.com/GG6YPqe.mp4",
"https://i.imgur.com/agVVYx5.mp4",
"https://i.imgur.com/o8ao6XY.mp4",
"https://i.imgur.com/bbh1V26.mp4",
"https://i.imgur.com/S8ISdD6.mp4",
"https://i.imgur.com/pauY8KR.mp4",
"https://i.imgur.com/9hfEbGH.mp4",
"https://i.imgur.com/72bYCsn.mp4",
"https://i.imgur.com/I3NJ05u.mp4",
"https://i.imgur.com/B5U6d33.mp4",
"https://i.imgur.com/jUG4eIz.mp4",
"https://i.imgur.com/CGB6XmV.mp4",
"https://i.imgur.com/KZNijRx.mp4",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",   
     ];
   var callback = () => api.sendMessage({body:` ====『𝗖𝗢𝗦𝗣𝗟𝗔𝗬』==== \n━━━━━━━━━━━━━━━━━━\n「𝐕𝐈𝐃𝐄𝐎 𝐂𝐔̉𝐀 𝐁𝐀̣𝐍 𝐍𝐄̀」\n[🚬] → 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼 𝗹𝗮̀: ${link.length}\n[🌟] → 𝗟𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼: 𝐭𝐮̛̣ 𝐢𝐦𝐠𝐮𝐫 đ𝐢 𝐜𝐡𝐮̛́ 𝐚𝐢 𝐫𝐚̉𝐧𝐡 :> \n━━━━━━━━━━━━━━━━━━\n → 𝐁𝐨̛́𝐭 𝐦𝐞̂ 𝐠𝐚́𝐢 𝐥𝐚̣𝐢 𝐧𝐡𝐚 𝐜𝐮̛𝐧𝐠 𝐝𝐮̣ 𝐛𝐚̂𝐲 𝐠𝐢𝐨̛̀ :𝟑`,attachment: fs.createReadStream(__dirname + "/cache/boobs.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "//cache/boobs.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"//cache/boobs.mp4")).on("close",() => callback());
};