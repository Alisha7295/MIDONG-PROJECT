module.exports.config = {
  name: "time",
  version: "1.2",
  hasPermssion: 0,
  credits: "TrúcCute",// chính chủ xin đừng hiểu nhầm thay credits
  description: "xem giờ",
  commandCategory: "Bổ não",
  usages: "[Trống]",
  cooldowns: 5,
  dependencies: {
    "moment-timezone": "",
    "axios": ""
  }
}

module.exports.run = async ({ api, event, Users }) => {
  const axios = require('axios');
  const res = await axios.get('https://apicadaovn.miraiofficials123.repl.co');
  const data = res.data.data;
  const data2 = res.data.url;
  let cc = (await axios.get(data2, {
			responseType: "stream"
		})).data;
  const qq = await axios.get('https://Api-By-Nhhoang.vnhoang06.repl.co/thinh');
  const data1 = qq.data.url;
  const moment = require('moment-timezone');
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
  var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
  var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ nhật'
  if (thu == 'Monday') thu = 'Thứ 2'
  if (thu == 'Tuesday') thu = 'Thứ 3'
  if (thu == 'Wednesday') thu = 'Thứ 4'
  if (thu == "Thursday") thu = 'Thứ 5'
  if (thu == 'Friday') thu = 'Thứ 6'
  if (thu == 'Saturday') thu = 'Thứ 7'
  var tile = Math.floor(Math.random() * 101);
  var msg = [
    "admin rất đẹp trai",
    "admin sinh ngày 18 tháng 10",
    "admin đang kiếm bồ",
    "Kẹo sữa mikita được làm từ sữa",
    "con người thiếu oxi sẽ chết",
    "admin rất yêu crush",
    "chửi bot sẽ bị ban",
    "admin là trai",
    "admin là nam",
    "oxi là chất gây nghiện",
    "admin yêu con gái chứ không trai",
    "admin là trai thẳng",
    "tag admin bằng ban",
    "chửi bot bạn không khác gì thiểu năng vì rảnh háng chửi 1 thứ vô tri",
    "bạn sẽ nổi tiếng nếu thay credits",
    "người Trung Quốc là China",
    "người Việt Nam nói tiếng Việt",
    "buồn ngủ bạn sẽ ngủ",
    "muối rất mặn",
    "đường rất ngọt",
    "con người biết nói",
    "chúng ta đang sống ở trái đất"
  ]
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage({body:
    `=== [ 𝗧𝗛𝗢̛̀𝗜 𝗚𝗜𝗔𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 ` + name +
    `\n💓────────────💓` +
    `\n→ 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ` + thu +
    `\n→ 𝗕𝐚̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ ` + gio + 
    ` 𝗴𝗶𝗼̛̀ ` + phut + 
    ` 𝗽𝗵𝘂́𝘁 ` + giay + 
    ` 𝗴𝗶𝐚̂𝘆` +
    `\n→ 𝗡𝗴𝗮̀𝘆 ` + ngay +
    ` 𝘁𝗵𝗮́𝗻𝗴 ` + thang +
    ` 𝗻𝗮̆𝗺 ` + nam +
    `\n→ 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗰𝗼́ 𝗻𝘆 𝘁𝗿𝗼𝗻𝗴 𝗻𝗮̆𝗺 𝗻𝗮𝘆 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀: ` + tile + 
    `%` +
    `\n[𝗕𝗮̣𝗻 𝗰𝗼́ 𝗯𝗶𝗲̂́𝘁?]: ` + msg[Math.floor(Math.random() * msg.length)] +
    `\n🌟────────────🌟` +
    `\n→ 𝗧𝗵𝗶́𝗻𝗵: ` + data1 +
    `\n\n🧸────────────🧸` +
    `\n→ 𝗖𝗮 𝗱𝗮𝗼: ` + data
                          , attachment: cc}, event.threadID, event.messageID)
}