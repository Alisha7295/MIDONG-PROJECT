module.exports.config = {
    name: 'imgur',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Lấy link ảnh/video',
    commandCategory: 'Tiện ích',
    usages: 'Reply [ảnh | video]',
    dependencies: {
        'image-downloader': 'axios',
        'tslib': '',
        'imgur': '',
        'request': ''
    }
};
const {ImgurClient} = require('imgur');
const {image} = require('image-downloader');
const {createReadStream, unlinkSync} = require('fs-extra');
const {get} = require('request');
module.exports.run = async function({ api, event }){
  try {
    const client = new ImgurClient({ clientId: 'd191da1e2b3ede' + 8});
    if (event.type != 'message_reply') return api.sendMessage(`⚡ Phản hồi ảnh/video!`, event.threadID, event.messageID);
    var i = 1
    const arr = [];
    for (const {url} of event.messageReply.attachments) {
    const dest = `${__dirname}/${get(url).uri.pathname.replace(/\/|-|_/g, '')}`;
    await image({ url, dest });
    const res = await client.upload({ image: createReadStream(dest), type: 'stream' });
//console.log(res)
     arr.push(`${res.data.link}`);
     unlinkSync(dest);
    };
    api.sendMessage(`[ 𝐔𝐏𝐋𝐎𝐀𝐃 𝐓𝐇𝐀̀𝐍𝐇 𝐂𝐎̂𝐍𝐆 ]\n──────────────────\n🌍 𝐋𝐢𝐧𝐤 𝐢𝐦𝐠𝐮𝐫:\n ${arr.join('\n')}\n🎥 𝐔𝐩 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠: ${arr.length}`,event.threadID, event.messageID); 
  } catch(e){
     api.sendMessage(e, event.threadID, event.messageID); 
  };
};