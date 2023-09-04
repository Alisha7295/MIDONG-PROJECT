module.exports.config = {
    name: "aov",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MintDaL",
    description: "Xem thông tin tướng liên quân",
    commandCategory: "Arena of Valor",
    usages: "[skill/null] [name]",
    cooldowns: 60
    };
module.exports.run = async function ({ api, event, Threads, getText, args }) {
  const axios = require("axios");
    const fs = require("fs-extra");
  if (args[0] == "skill") {
    try {  
      let res = (await	axios.get(encodeURI(`https://ginxkin-api.glitch.me/api/lienquan/`+ args.join(" ").slice(6)))).data;
      let skill0_img = (await axios.get(res.skill0_img, { responseType: "arraybuffer" })).data;
      fs.writeFileSync( __dirname + "/cache/skill0_img.png", Buffer.from(skill0_img, "utf-8"));    
      let skill1_img = (await axios.get(res.skill1_img, { responseType: "arraybuffer" })).data;
      fs.writeFileSync( __dirname + "/cache/skill1_img.png", Buffer.from(skill1_img, "utf-8"));  
      let skill2_img = (await axios.get(res.skill2_img, { responseType: "arraybuffer" })).data;
      fs.writeFileSync( __dirname + "/cache/skill2_img.png", Buffer.from(skill2_img, "utf-8"));  
      let skill3_img = (await axios.get(res.skill3_img, { responseType: "arraybuffer" })).data;
      fs.writeFileSync( __dirname + "/cache/skill3_img.png", Buffer.from(skill3_img, "utf-8"));  
      setTimeout(() => {
        api.sendMessage(`👤 Name: ${res.name}\n⚔️ Type: ${res.role}\n🧥 Skin: ${res.skins}\n\n=== [ Skill ] ===`, event.messageID);
				},1500)
      setTimeout(() => {
        api.sendMessage({body:`» Intrinsic: ${res.skill0}`,attachment: fs.createReadStream(__dirname + `/cache/skill0_img.png`)}, event.threadID,()=> fs.unlinkSync(__dirname + `/cache/skill0_img.png`), event.messageID);
				},1700)
      setTimeout(() => { 
        api.sendMessage({body:`\n» Skill 1: ${res.skill1}`,attachment: fs.createReadStream(__dirname + `/cache/skill1_img.png`)}, event.threadID,()=> fs.unlinkSync(__dirname + `/cache/skill1_img.png`));
				},2000)
      setTimeout(() => { 
        api.sendMessage({body:`\n» Skill 2: ${res.skill2}`,attachment: fs.createReadStream(__dirname + `/cache/skill2_img.png`)}, event.threadID,()=> fs.unlinkSync(__dirname + `/cache/skill2_img.png`));
				},2500)
      setTimeout(() => { 
        api.sendMessage({body:`\n» Skill 3: ${res.skill3}`,attachment: fs.createReadStream(__dirname + `/cache/skill3_img.png`)}, event.threadID,()=> fs.unlinkSync(__dirname + `/cache/skill3_img.png`));
				},3000) 
      return;
    } catch (err) {
      return api.sendMessage("Không tìm thấy tướng!",event.threadID)
  }
  }
  else {  
    try {  
    let res = (await	axios.get(encodeURI(`https://ginxkin-api.glitch.me/api/lienquan/`+ args.join(" ")))).data;
    let avatar = (await axios.get(res.avatar, { responseType: "arraybuffer" })).data;
    fs.writeFileSync( __dirname + "/cache/avatar_lq.png", Buffer.from(avatar, "utf-8"));

    api.sendMessage({body:`👤 Tên: ${res.name}\n⚔️ Loại: ${res.role} - Đánh ${res.stats.range}\n🧥 Số skin: ${res.skins}\n\n=== [ Thông Số ] ===\n\n🗡 Công vật lý: ${res.stats.atk}\n☄️ Công phép: ${res.stats.mtk}\n❤️ Máu: ${res.stats.hp}\n🛡 Giáp: ${res.stats.def}\n🛡 Giáp phép: ${res.stats.mdef}\n⚡️ Tốc đánh: ${res.stats.asd}\n✨ Giảm hồi chiêu: ${res.stats.cd}\n💥 Tỉ lệ chí mạng: ${res.stats.crit_rate}\n💨 Tốc chạy: ${res.stats.spd}\n💓 Hồi ${res.stats.heal} máu/5s\n💧 Hồi ${res.stats.mheal} năng lượng/5s\n» Đây là thông số từ lv1 -> lv15 «`,attachment: fs.createReadStream(__dirname + `/cache/avatar_lq.png`)}, event.threadID, event.messageID);
    return fs.unlinkSync(__dirname + `/cache/avatar_lq.png`);
    } catch (err) {
      return api.sendMessage("Không tìm thấy tướng!",event.threadID)
    }
  }
}