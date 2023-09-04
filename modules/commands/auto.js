module.exports.config = {
    name: 'auto',
    version: '10.02',
    hasPermssion: 0,
    credits: '',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'ADMIN',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: ['Chúc mọi người ngủ ngon.', 'Tôi là Bot còn các bạn là người nên khuya rồi các bạn nên đi ngủ thôi. Hẹn gặp lại các bạn vào ngày mai nha.']
},
{
    timer: '1:00:00 PM',
    message: ['Chúc mọi người buổi chiều vui vẻ.', 'Chúc mọi người buổi chiều vui vẻ và đủ năng lượng để chiến đấu qua ngày hôm nay nha.']
},
{
    timer: '7:00:00 AM',
    message: ['Chúc mọi người buổi sáng an lành.', 'Buổi sáng đầy năng lượng nha các bạn.']
},
{
    timer: '11:00:00 AM',
    message: ['Chúc mọi người buổi trưa nghỉ ngơi tốt.', 'Sáng tới giờ chiến đấu mệt rồi thì các bạn đi nghỉ một chút nha.']
}];
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
    if (á = config.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())); {
      var msg = r(á.message);
      msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://no1-19fc.manh10.repl.co/api/remix.php`)).data.data)
      msg = {
        body: msg, attachment: (await get((await get(`https://no1-19fc.manh10.repl.co/api/remix.php`)).data.data, {
          responseType: 'stream'
        })).data
      };
      global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i, (error, info) => {
        if (error) { console.log(error) } else
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            boxid: i,
            messID: messageID,
            type: "sendtoadmin"
          })
      }));
    };
  }, 1000);
};
module.exports.run = () => { };