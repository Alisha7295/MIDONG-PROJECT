module.exports.config = {
  name: "reallove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew fix get by Jukie",
  description: "Tìm Kiếm Nửa Kia Của Bạn ",
  commandCategory: "Trò Chơi",
  usages: "[boy/girl]",
  cooldowns: 15
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
    var name = (await Users.getData(id)).name
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("❌Rất tiếc! Không tìm thấy nửa đời của bạn 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
         

            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `=== [ 𝗥𝗘𝗔𝗟𝗟𝗢𝗩𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n\n[💓] Đ𝐚̂𝘆 𝗹𝗮̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗻𝘂̛̉𝗮 𝗸𝗶𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n[💕] 𝗧𝗲̂𝗻: ${n}\n[💟] 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘅𝗮́𝗰 đ𝗶̣𝗻𝗵 đ𝘂̛𝗼̛̣𝗰...\n[💞] Đ𝗼̣̂ 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝗴𝗶𝘂̛̃𝗮 𝗯𝗮̣𝗻 𝘃𝗮̀ 𝗰𝗮̣̂𝘂 𝗮̂́𝘆: ${a.toFixed(2)}%\n[🌐] 𝗟𝗶𝗻𝗸 𝗳𝗯 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: https://m.facebook.com/${url}\n[🌟] 𝗟𝗶𝗻𝗸 𝗳𝗯 𝗰𝘂̉𝗮 𝗰𝗮̣̂𝘂 𝗮̂́𝘆: https://m.facebook.com/${e}\n[🧸] 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗿𝗲𝗮𝗹𝗹𝗼𝘃𝗲 𝗯𝗼𝘆/𝗴𝗶𝗿𝗹 𝘁𝘂̀𝘆 𝗯𝗮̣𝗻 𝘁𝗵𝗶́𝗰𝗵`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
                     
            if (data.length == 0) return api.sendMessage("❌Rất tiếc! Không tìm thấy nửa đời của bạn 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `=== [ 𝗥𝗘𝗔𝗟𝗟𝗢𝗩𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n\n[💓] Đ𝐚̂𝘆 𝗹𝗮̀ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗻𝘂̛̉𝗮 𝗸𝗶𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n[💕] 𝗧𝗲̂𝗻: ${n}\n[💟] 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘅𝗮́𝗰 đ𝗶̣𝗻𝗵 đ𝘂̛𝗼̛̣𝗰...\n[💞] Đ𝗼̣̂ 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝗴𝗶𝘂̛̃𝗮 𝗯𝗮̣𝗻 𝘃𝗮̀ 𝗰𝗮̣̂𝘂 𝗮̂́𝘆: ${a.toFixed(2)}%\n[🌐] 𝗟𝗶𝗻𝗸 𝗳𝗯 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: https://m.facebook.com/${url}\n[🌟] 𝗟𝗶𝗻𝗸 𝗳𝗯 𝗰𝘂̉𝗮 𝗰𝗮̣̂𝘂 𝗮̂́𝘆: https://m.facebook.com/${e}\n[🧸] 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗿𝗲𝗮𝗹𝗹𝗼𝘃𝗲 𝗯𝗼𝘆/𝗴𝗶𝗿𝗹 𝘁𝘂̀𝘆 𝗯𝗮̣𝗻 𝘁𝗵𝗶́𝗰𝗵`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};