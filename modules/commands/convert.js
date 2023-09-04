module.exports.config = {
    name: "convert",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "araxy",
    description: "Phản hồi video của bạn muốn chuyển từ dạng video sang mp4",
    commandCategory: "Tiện ích",
    usages: "reply",
    cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
  let t = (await axios.get(`https://api-trunghieu.hieutrung38.repl.co/api/thinh.php`)).data.data;
  let n = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data.data.date;
  let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
    var msg = { body : `===== 『 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 』 =====\n━━━━━━━━━━━━━━━━━━\n『🧸』𝐓𝐡𝐢́𝐧𝐡: ${t}\n『💿』𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐧𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐯𝐮𝐢 𝐯𝐞̉\n『🌐』𝐔𝐩𝐭𝐢𝐦𝐞: ${u.join(':')}\n『⏰️』𝐍𝐠𝐚̀𝐲 𝐭𝐚̣𝐨 𝐚𝐜𝐜: ${n}\n『⏳』 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀:\n⏰= [ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ] =⏰\n━━━━━━━━━━━━━━━━━\n`, attachment: audioss}
   
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
}