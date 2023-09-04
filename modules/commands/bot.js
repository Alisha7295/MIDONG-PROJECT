const axios = require('axios');

module.exports.config = {
	name: 'bot',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'NTKhang',//mod lai by tpk
	description: 'OpenAI ChatGPT',
	commandCategory: 'Tiện ích',
	usages: 'text | img <text>',
	cooldowns: 5
};

module.exports.run = async function ({
	api, event, args
}) {
	switch (args[0]) {
		case 'img':
		case 'image': {   
			if (!args[1])
				return api.sendMessage('Vui lòng nhập nội dung', event.threadID, event.messageID);
			const response = await axios({
				url: 'https://APITPK-PHU.last-namename.repl.co/openai/imagecreate?apikey=Tpk05&size=1024x1024&query=' + encodeURIComponent(args.slice(1).join(' ')),
				method: 'GET'
			});
			const imageUrl = response.data.data[0].url;
			const image = await axios.get(imageUrl, {
				responseType: 'stream'
			});
			image.data.path = `image.png`;
			return api.sendMessage({
				attachment: image.data
			}, event.threadID, event.messageID);
		}
		default: {
			if (!args[0])
  var tpk = [
  "https://i.imgur.com/bebL2UH.jpeg",
  "https://i.imgur.com/t1SoBqA.jpeg",
  ];
  let image = [];
 for(let i = 0; i < 2; i++) {
    const stream = (await axios.get(tpk[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const msg = {
    body: `🖨️====『 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 』====🖨️
 
😻 𝗖𝗵𝗮̀𝗼 𝗯𝗮̣𝗻 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗺𝗶𝗿𝗮𝗶 𝗯𝗼𝘁/𝗔𝗟
👉 𝗯𝗮̣𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 !𝗯𝗼𝘁 + 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝘁𝗼̂𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗺𝗼̂𝗻 𝗵𝗼̣𝗰, 𝗰𝗼𝗱𝗲 𝘃𝗮̀ 𝗵𝗼̛𝗻 𝘁𝗵𝗲̂́ 𝗻𝘂̛̃𝗮 
💞 !𝗯𝗼𝘁 𝗶𝗺𝗴 + đ𝗶𝗲̂̀𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗯𝗼𝘁 𝘃𝗲̃`,
    attachment: image
};
				return api.sendMessage(msg, event.threadID, event.messageID);
			const response = await axios({
				url: 'https://APITPK-PHU.last-namename.repl.co/openai/chat?apikey=Tpk05&query=' + encodeURIComponent(args.join(' ')),
				method: 'GET'
			});
			const text = response.data.text;
			return api.sendMessage(text, event.threadID, event.messageID);
		}
	}
};
