const fs = require("fs");

let
path = __dirname+'/cache/autoreactionStatus.json',
data;

if(!fs.existsSync(path))fs.writeFileSync(path, '{}');
data = JSON.parse(fs.readFileSync(path));

module.exports.config = {
    name: "autoreaction",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Minami Tatsuo",
    description: "Auto reaction made by Minami Tatsuo",
    commandCategory: "Hệ Thống",
    usages: "noprefix",
    cooldowns: 0,
};

module.exports.handleEvent = function ({
    api,
    event,
    client,
    __GLOBAL
}) {
    if(!data.status && !!event.isGroup)return;
    
    let haha = event.body.toLowerCase();
    if (this.config.credits != 'Minami Tatsuo') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Credits has been changed! Stop Now!' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] STOP CHANGING CREDIT\g IDIOT ', event.threadID, event.messageID);
    }
    if (haha.includes("lol") || haha.includes("lmao") || haha.includes("haha") || haha.includes("bủh") || haha.includes("bruh") || haha.includes("😂") || haha.includes("🤣") || haha.includes("kk") || haha.includes("lồn") || haha.includes("😆") || haha.includes("óc") || haha.includes("ngáo")) {
        const allIcon2 = ['😂','🤣','😆','😹','🤡']; //
const icon2 = allIcon2[Math.floor(Math.random()*allIcon2.length)];
        return api.setMessageReaction(icon2, event.messageID, (err) => {}, true)
    }
    if (haha.includes("sad") || haha.includes("haiz") || haha.includes("khóc") || haha.includes("sad") || haha.includes(":'(") || haha.includes("please") || haha.includes("😢") || haha.includes("huhu") || haha.includes("buồn") || haha.includes("chán")) {
        const allIcon3 = ['😿','🤒','☹️','😐','😢']; //
const icon3 = allIcon3[Math.floor(Math.random()*allIcon3.length)];
        return api.setMessageReaction(icon3, event.messageID, (err) => {}, true)
    }
    if (haha.includes("wow") || haha.includes("wao") || haha.includes("whao") || haha.includes("xịn") || haha.includes("ye") || haha.includes("hehe") || haha.includes("tuyệt") || haha.includes("nice") || haha.includes("ghê") || haha.includes("õmg") || haha.includes("omg")) {
const allIcon = ['😦','😮','😯','😧','🤨']; //
const icon = allIcon[Math.floor(Math.random()*allIcon.length)];
        return api.setMessageReaction(icon, event.messageID, (err) => {}, true)
    }
   if (haha.includes("sủa") || haha.includes("ẳng") || haha.includes("súc vật") || haha.includes("đjt") || haha.includes("gáy") || haha.includes("ngáo") || haha.includes("câm") || haha.includes("cút") || haha.includes("cặc") || haha.includes("địt")) {
        return api.setMessageReaction("❎", event.messageID, (err) => {}, true)
   }
    if (haha.includes("/") || haha.includes("$")) {
        const allIcon4 = ['❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫','⚪','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛','⬜']; //
const icon4 = allIcon4[Math.floor(Math.random()*allIcon4.length)];
        return api.setMessageReaction(icon4, event.messageID, (err) => {}, true)
    }
    if (haha.includes("bot") || haha.includes("pot")) {
        return api.setMessageReaction("🤖", event.messageID, (err) => {}, true)
    }
if (haha.includes("Rin Tohsaka") || haha.includes("hiếu")) {
        const allIcon2 = ['🤴','🤵','👨‍💼']; //
const icon2 = allIcon2[Math.floor(Math.random()*allIcon2.length)];
        api.setMessageReaction(icon2, event.messageID, (err) => {}, true)
        api.sendMessage("Gọi cái địt mẹ mày", event.threadID, event.messageID);
    }
    if (haha.includes("nice") || haha.includes("hay")) {
        const allIcon = ['👸','💕','❤']; 
        const alltext = ["rất hay","cũng hay","như đầu buồi","hay cc"];
const text = alltext[Math.floor(Math.random()*alltext.length)];//
const icon = allIcon[Math.floor(Math.random()*allIcon.length)];
        api.setMessageReaction(icon, event.messageID, (err) => {}, true)
        api.sendMessage(text, event.threadID, event.messageID);
    }
    if (haha.includes("ngủ") || haha.includes("pai")) {
        api.sendMessage("👋", event.threadID, event.messageID)
    }
}
module.exports.run = function ({
    api,
    event,
    client,
    __GLOBAL
}) {
    data.status = !data.status?true:false;
    fs.writeFileSync(path, JSON.stringify(data));
    
    api.sendMessage(`${data.status?'bật':'tắt'} ${this.config.name}`, event.threadID);
}