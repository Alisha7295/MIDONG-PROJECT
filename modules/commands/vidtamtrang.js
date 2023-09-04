const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "vidtamtrang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTK",
  description: "video ",
  commandCategory: "Video cá nhân",
  usages: "Gaitik",
  cooldowns: 5,
    dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.imgur.com/26tBGNz.mp4",
"https://i.imgur.com/bKahRyR.mp4",
"https://i.imgur.com/nsAeBu9.mp4",
"https://i.imgur.com/YBEqu4T.mp4",
"https://i.imgur.com/Zq5iniZ.mp4",
"https://i.imgur.com/eAue5PQ.mp4",
"https://i.imgur.com/p0uF1JZ.mp4",
"https://i.imgur.com/c9d9k8V.mp4",
"https://i.imgur.com/Q7k7En2.mp4",
"https://i.imgur.com/17QK9Ym.mp4",
"https://i.imgur.com/RgXyYf6.mp4",
"https://i.imgur.com/TPCfN2n.mp4",
"https://i.imgur.com/5wFRzh6.mp4",
"https://i.imgur.com/eKg22cS.mp4",
"https://i.imgur.com/jPRR3s6.mp4",
"https://i.imgur.com/LfW7EHr.mp4",
"https://i.imgur.com/zy7sr6N.mp4",
"https://i.imgur.com/jaKWRn4.mp4",
"https://i.imgur.com/92xJwzd.mp4",
"https://i.imgur.com/bVJ4yC4.mp4",
"https://i.imgur.com/7u6af0D.mp4",
"https://i.imgur.com/77oeeE4.mp4",
"https://i.imgur.com/VeJ3zDB.mp4",
"",
"",
"",
"",   
     ];
   var callback = () => api.sendMessage({body:` ====『𝗧𝗔̂𝗠 𝗧𝗥𝗔̣𝗡𝗚』==== \n━━━━━━━━━━━━━━━━━━\n「𝐕𝐈𝐃𝐄𝐎 𝐂𝐔̉𝐀 𝐁𝐀̣𝐍 𝐍𝐄̀」\n[🚬] → 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼 𝗹𝗮̀: ${link.length}\n[🌟] → 𝗟𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼: 𝐭𝐮̛̣ 𝐢𝐦𝐠𝐮𝐫 đ𝐢 𝐜𝐡𝐮̛́ 𝐚𝐢 𝐫𝐚̉𝐧𝐡 :> \n━━━━━━━━━━━━━━━━━━\n[💓] → 𝐕𝐢𝐝𝐞𝐨 𝗰𝗼́ 𝐫𝐨̂̀𝐢 đ𝐨́ 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐛𝐮𝐨̂̀𝐧 𝐧𝐮̛̃𝐚 𝐧𝐡𝐚 𝐜𝐨̀𝐧 𝐥𝐚̀ 𝐛𝐨𝐭 𝐛𝐚̆́𝐧 𝐛𝐨̉ 𝐚́𝐚 :𝟑`,attachment: fs.createReadStream(__dirname + "/cache/boobs.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "//cache/boobs.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"//cache/boobs.mp4")).on("close",() => callback());
};