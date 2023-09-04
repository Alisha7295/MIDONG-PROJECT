module.exports.config = {
    name: 'xsmn',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod lai by tpk
    description: 'Kiểm tra xổ số miền Nam',
    commandCategory: 'Tiện Ích',
    usages: '[... | ngày/tháng/năm]',
    cooldowns: 3
};
const {
    get
} = require('axios');
module.exports.onLoad = o => {
    if (!!global.xsmb_setinterval) clearInterval(global.xsmb_setinterval);
   global.xsmb_setinterval = setInterval(async() => {
    if ('6:03:00 PM' == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim()) {
        const {
            data
        } = (await get(`https://TPK2-API.last-namename.repl.co/tien-ich/check-xsmb.json`)).data;
        global.data.allThreadID.forEach(i => o.api.sendMessage(data[0].message, i));
    };
  }, 1000);
};
module.exports.run = async function({
    api, event, args
}) {
    try {
        const out = (a, b) => api.sendMessage(`${a} `, event.threadID, b?event.messageID: null),
        {
            data
        } = (await get(`https://TPK2-API.last-namename.repl.co/tien-ich/check-xsmb.json`)).data
        if (!!args[0]) {
            if (args[0].split('/').length != 3) return out(`→ Vui lòng nhập đúng định dạng: ngày/tháng/năm`, true);
            if (find = data.find(i => i.date == args[0]), !find) return out(`→ Không tìm thấy kết quả xổ số của ngày "${args[0]}"`, true); else out(find.message, true);
        } else out(data[0].message, true);
    }catch(err) {
        out(err, true);
    };
}