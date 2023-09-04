module.exports.config = {
name: "checktt2",
version: "1.0.0",
hasPermssion: 0,
credits: "SenProject",//fix by Qz
description: "check tương tác theo phong cách tu tiên",//fix&mod lqmb by Uynkaa
commandCategory: "checktt",
usages: "checktt",
cooldowns: 0,
dependencies: {
"fs-extra": ""
}
}

const path = __dirname + '/count-by-threadd/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "")) request("https://i.imgur.com/5vha48Y.jpg ").pipe(fs.createWriteStream(dirMaterial + "checkrank.jpg"));
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


const getRankName = count => {
    return count > 17097 ? 'Thách Đấu 1'
    : count > 17096 ? 'Thách Đấu 2'
    : count > 17095 ? 'Thách Đấu 3'
    : count > 17094 ? 'Thách Đấu 4'
    : count > 17093 ? 'Thách Đấu 5'
    : count > 17092 ? 'Thách Đấu 6'
    : count > 17091 ? 'Thách Đấu 7'
    : count > 17090 ? 'Thách Đấu 8'
    : count > 17089 ? 'Thách Đấu 9'
    : count > 17088 ? 'Thách Đấu 10'
    : count > 17087 ? 'Thách Đấu 11'
    : count > 17086 ? 'Thách Đấu 12'
    : count > 17085 ? 'Thách Đấu 13'
    : count > 17084 ? 'Thách Đấu 14'
    : count > 17083 ? 'Thách Đấu 15'
    : count > 17082 ? 'Thách Đấu 16'
    : count > 17081 ? 'Thách Đấu 17'
    : count > 17080 ? 'Thách Đấu 18'
    : count > 17079 ? 'Thách Đấu 19'
    : count > 17078 ? 'Thách Đấu 20'
    : count > 17077 ? 'Thách Đấu 21'
    : count > 17076 ? 'Thách Đấu 22'
    : count > 17075 ? 'Thách Đấu 23'
    : count > 17075 ? 'Thách Đấu 24'
    : count > 17074 ? 'Thách Đấu 25'
    : count > 17073 ? 'Thách Đấu 26'
    : count > 17072 ? 'Thách Đấu 27'
    : count > 17071 ? 'Thách Đấu 28'
    : count > 17070 ? 'Thách Đấu 29'
    : count > 17069 ? 'Thách Đấu 30'
    : count > 17068 ? 'Thách Đấu 31'
    : count > 17067 ? 'Thách Đấu 32'
    : count > 17066 ? 'Thách Đấu 33'
    : count > 17065 ? 'Thách Đấu 34'
    : count > 17064 ? 'Thách Đấu 35'
    : count > 17063 ? 'Thách Đấu 36'
    : count > 17062 ? 'Thách Đấu 37'
    : count > 17061 ? 'Thách Đấu 38'
    : count > 17060 ? 'Thách Đấu 39'
    : count > 17059 ? 'Thách Đấu 40'
    : count > 17058 ? 'Thách Đấu 41'
    : count > 17057 ? 'Thách Đấu 42'
    : count > 17056 ? 'Thách Đấu 43'
    : count > 17055 ? 'Thách Đấu 44'
    : count > 17054 ? 'Thách Đấu 45'
    : count > 17053 ? 'Thách Đấu 46'
    : count > 17052 ? 'Thách Đấu 47'
    : count > 17051 ? 'Thách Đấu 48'
    : count > 17050 ? 'Thách Đấu 49'
    : count > 17049 ? 'Thách Đấu 50'
    : count > 17049 ? 'Thách Đấu 51'
    : count > 17048 ? 'Thách Đấu 52'
    : count > 17047 ? 'Thách Đấu 53'
    : count > 17046 ? 'Thách Đấu 54'
    : count > 17045 ? 'Thách Đấu 55'
    : count > 17044 ? 'Thách Đấu 56'
    : count > 17043 ? 'Thách Đấu 57'
    : count > 17042 ? 'Thách Đấu 58'
    : count > 17041 ? 'Thách Đấu 59'
    : count > 17040 ? 'Thách Đấu 60'
    : count > 17039 ? 'Thách Đấu 61'
    : count > 17038 ? 'Thách Đấu 62'
    : count > 17037 ? 'Thách Đấu 63'
    : count > 17036 ? 'Thách Đấu 64'
    : count > 17035 ? 'Thách Đấu 65'
    : count > 17034 ? 'Thách Đấu 66'
    : count > 17033 ? 'Thách Đấu 67'
    : count > 17032 ? 'Thách Đấu 68'
    : count > 17031 ? 'Thách Đấu 69'
    : count > 17030 ? 'Thách Đấu 70'
    : count > 17029 ? 'Thách Đấu 71'
    : count > 17028 ? 'Thách Đấu 72'
    : count > 17027 ? 'Thách Đấu 73'
    : count > 17026 ? 'Thách Đấu 74'
    : count > 17025 ? 'Thách Đấu 75'
    : count > 17024 ? 'Thách Đấu 76'
    : count > 17023 ? 'Thách Đấu 77'
    : count > 17022 ? 'Thách Đấu 78'
    : count > 17021 ? 'Thách Đấu 79'
    : count > 17020 ? 'Thách Đấu 80'
    : count > 17019 ? 'Thách Đấu 81'
    : count > 17018 ? 'Thách Đấu 82'
    : count > 17017 ? 'Thách Đấu 83'
    : count > 17016 ? 'Thách Đấu 84'
    : count > 17015 ? 'Thách Đấu 85'
    : count > 17014 ? 'Thách Đấu 86'
    : count > 17013 ? 'Thách Đấu 87'
    : count > 17012 ? 'Thách Đấu 88'
    : count > 17011 ? 'Thách Đấu 89'
    : count > 17010 ? 'Thách Đấu 90'
    : count > 17009 ? 'Thách Đấu 91'
    : count > 17008 ? 'Thách Đấu 92'
    : count > 17008 ? 'Thách Đấu 93'
    : count > 17007 ? 'Thách Đấu 94'
    : count > 17006 ? 'Thách Đấu 95'
    : count > 17005 ? 'Thách Đấu 96'
    : count > 17004 ? 'Thách Đấu 97'
    : count > 17003 ? 'Thách Đấu 98'
    : count > 17002 ? 'Thách Đấu 99'
    : count > 17001 ? 'Thách Đấu 100'
    : count > 17000 ? 'Chiến Tướng 75~Thách Đấu'
    : count > 16000 ? 'Chiến Tướng 51~75*'
    : count > 15000 ? 'Cao Thủ 41~50*'
    : count > 14000 ? 'Cao Thủ 31~40*'
    : count > 13000 ? 'Cao Thủ 21~30*'
    : count > 12000 ? 'Cao Thủ 11~20*'
    : count > 11000 ? 'Cao Thủ 0~10*'
    : count > 10000 ? 'Tinh Anh I'
    : count > 9300 ? 'Tinh Anh II'
    : count > 8600 ? 'Tinh Anh III'
    : count > 7900 ? 'Tinh Anh IV'
    : count > 7200 ? 'Tinh Anh V'
    : count > 6500 ? 'Kim Cương I'
    : count > 5900 ? 'Kim Cương II'
    : count > 5300 ? 'Kim Cương III'
    : count > 4700 ? 'Kim Cương IV'
    : count > 4100 ? 'Kim Cương V'
    : count > 3500 ? 'Bạch Kim I'
    : count > 3000 ? 'Bạch Kim II'
    : count > 2500 ? 'Bạch Kim III'
    : count > 2000 ? 'Bạch Kim IV'
    : count > 1500 ? 'Bạch Kim V'
    : count > 1000 ? 'Vàng I'
    : count > 900 ? 'Vàng II'
    : count > 800 ? 'Vàng III'
    : count > 700 ? 'Vàng IV'
    : count > 600 ? 'Bạc I'
    : count > 500 ? 'Bạc II'
    : count > 400 ? 'Bạc III'
    : count > 300 ? 'Đồng I'
    : count > 200 ? 'Đồng II'
    : count > 100 ? 'Đồng III'
    : count > 0 ? 'Newbie'
    : ''
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '〘 ==== 𝐂𝐇𝐄𝐂𝐊 𝐀𝐋𝐋 ==== 〙';
        for (const user of storage) {
            msg += `\n${count++}〉『 ${user.name} 』➜ ${user.count}`;
        }
    } else if (query == 'help') {
        msg += '》Newbie ( < 100 tin nhắn )\n》Đồng I ( < 400 tin nhắn )\n》Bạc I ( < 700 tin nhắn )\n》Vàng I ( < 1500 tin nhắn )\n》Bạch Kim I ( < 4100 tin nhắn )\n》Kim Cương I ( < 7200 tin nhắn )\n》Tinh Anh I ( < 11000 tin nhắn )\n》Cao Thủ 0~10*( > 12000 tin nhắn )\n》Cao Thủ 11~20* ( > 13000 tin nhắn )\n》Cao Thủ 21~30* ( > 14000 tin nhắn )\n》Cao Thủ 31~40* ( > 15000 tin nhắn )\n》Cao Thủ 41~50* ( > 16000 tin nhắn )\n》Chiến Tướng 51~75* ( > 17000 tin nhắn )\n》Chiến Tướng 75~thách đấu* ( > 17001 tin nhắn )\n》Và TOP 100 thách đấu có số lượng tương tác nhiều nhất box\nSắp xếp theo thứ tự từ Đồng -> Thách Đấu\nCách vài trăm tương tác bạn sẽ được lên rank(tùy mức rank)'
    } else if (!query) {
      const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        const userID = event.type == "message_reply" && !event.args[1] ? event.messageReply.senderID : !event.args[1] ? event.senderID : Object.keys(event.mentions)[0];
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `=== 𝗖𝗛𝗘𝗖𝗞 Rank ===\n\n🏆 𝗧𝗼𝗽 𝗰𝘂̉𝗮 ${userID == senderID ? '𝗯𝗮̣𝗻' : storage[rankUser].name} : ${rankUser + 1}\n💬 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${storage[rankUser].count}\n🏅 Rank : ${getRankName(storage[rankUser].count)}\n⏰ 𝗧𝗶𝗺𝗲: ${timeNow}\n❓ [ checktt help ] , [ checkttall ]\n🔷 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝘃𝘂𝗶 𝘃𝗲̉`;
    }
    api.sendMessage({body:`${msg}`, attachment: fs.createReadStream(__dirname + `/noprefix/checkrank.jpg`)},event.threadID);
    return;
  }