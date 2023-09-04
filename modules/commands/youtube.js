module.exports.config = {
	name: "youtube",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",//Mod by Võ Nhật Hoàng
	description: "Phát video thông qua link YouTube hoặc từ khoá tìm kiếm",
	commandCategory: "Phương tiện",
	usages: "< link/từ khóa >",
	cooldowns: 10,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"fs-extra": "",
		"axios": ""
	},
	envConfig: {
		"YOUTUBE_API": "AIzaSyBNqRSYmQ9D1WWIa186k8nSvo5mr2Rvk5M"
	}	
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
	let body = res.videoDetails.title;
	api.sendMessage(`Đang xử lý video \n-----------\n${body}\n-----------\nXin vui lòng đợi...`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
    });
	try {
		ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
		let body = res.videoDetails.title;
		ytdl(handleReply.link[event.body - 1])
			.pipe(createWriteStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`))
			.on("close", () => {
				if (statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`).size > 26214400) return api.sendMessage('[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Không thể gửi file vì dung lượng lớn hơn 25MB', event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID);
				else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID)
			})
			.on("error", (error) => api.sendMessage(`[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
	});
	}
	catch {
		api.sendMessage("[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Không thể xử lí yêu cầu của bạn", event.threadID, event.messageID);
	}
	return api.unsendMessage(handleReply.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const YouTubeAPI = global.nodemodule["simple-youtube-api"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	
	const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
	const keyapi = global.configModule[this.config.name].YOUTUBE_API
	
	if (args.length == 0 || !args) return api.sendMessage({body: '=== [ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗠𝗘𝗡𝗨 ] ====\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 + 𝘁𝗲̂𝗻 𝘃𝗶𝗱𝗲𝗼 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 (𝘃𝗱: ?𝘆𝗼𝘂𝘁𝘂𝗯𝗲 𝗰𝗼́ 𝗲𝗺 𝗰𝗵𝗼̛̀)\n𝟮. 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 + 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 (𝘃𝗱: ?𝘆𝗼𝘂𝘁𝘂𝗯𝗲 𝗵𝘁𝘁𝗽𝘀://𝘆𝗼𝘂𝘁𝘂.𝗯𝗲/𝗟𝗶𝘄𝗲𝗥𝗳𝗖𝗟𝗜𝗠𝘀)\n\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝟭 𝘀𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝗯𝗼𝘁 𝘀𝗲̃ 𝗸𝗵𝗼̂𝗻𝗴 𝗴𝘂̛̉𝗶 đ𝘂̛𝗼̛̣𝗰 𝘃𝗶̀ 𝗾𝘂𝗮́ 𝟮𝟱𝗠𝗕 𝗵𝗼𝗮̣̆𝗰 𝗹𝗼̂̃𝗶',attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/youtube')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
	const keywordSearch = args.join(" ");
	const videoPattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
	const urlValid = videoPattern.test(args[0]);
	
	if (urlValid) {
		try {
            var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
			(id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.mp4`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.mp4`).size > 26214400) return api.sendMessage('[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Không thể gửi file vì dung lượng lớn hơn 25MB', event.threadID, () => unlinkSync(__dirname + `/cache/${id}.mp4`), event.messageID);
					else return api.sendMessage({attachment: createReadStream(__dirname + `/cache/${id}.mp4`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.mp4`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(`[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
		}
		catch {
			api.sendMessage("[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Không thể xử lý yêu cầu của bạn", event.threadID, event.messageID);
		}

	}
	else {
		try {
			var link = [], msg = "", num = 0, numb = 0;
			var imgthumnail = [];
			var results = await youtube.searchVideos(keywordSearch, 6);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
				var idd = value.id;
				let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
  let gettime = datab.items[0].contentDetails.duration;
  let time = (gettime.slice(2));
        /////////////////////
        let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
  let channel = datac.items[0].snippet.channelTitle;
let folderthumnail = __dirname + `/cache/${numb+=1}.png`;

let linkthumnail = `https://img.youtube.com/vi/${value.id}/maxresdefault.jpg`;

let getthumnail = (await axios.get(`${linkthumnail}`, { responseType: 'arraybuffer' })).data;
  
  



  fs.writeFileSync(folderthumnail, Buffer.from(getthumnail, 'utf-8'));
  
  imgthumnail.push(fs.createReadStream(__dirname + `/cache/${numb}.png`));
        /////=//////////////
				msg += (`${num+=1}. ${value.title}\n→ Thời gian: ${time}\n→ Kênh: ${channel}\n-----------------------\n`);
      }
  
      var body = `[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n${msg}\n→ Hãy phản hồi tin nhắn này chọn một trong những tìm kiếm trên`
      
return api.sendMessage({attachment: imgthumnail, body: body}, event.threadID,(error, info) => global.client.handleReply.push({ 
  name: this.config.name, 
  messageID: info.messageID, 
  author: event.senderID, 
  link }),
  event.messageID);
      
		}
		catch (error) {
      //api.sendMessage("Không thể xử lý request do dã phát sinh lỗi: " + error.message, event.threadID, event.messageID);
      
      const fs = global.nodemodule["fs-extra"];
      const axios = global.nodemodule["axios"];
			var link = [], msg = "", num = 0, numb = 0;
      var imgthumnail = []
			var results = await youtube.searchVideos(keywordSearch, 6);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
        var idd = value.id;
let folderthumnail = __dirname + `/cache/${numb+=1}.png`;

let linkthumnail = `https://img.youtube.com/vi/${value.id}/hqdefault.jpg`;

let getthumnail = (await axios.get(`${linkthumnail}`, { responseType: 'arraybuffer' })).data;
  
  

        ////////////////////
let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
  let gettime = datab.items[0].contentDetails.duration;
  let time = (gettime.slice(2));
        ///////////////////
        let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
  let channel = datac.items[0].snippet.channelTitle;
        
  fs.writeFileSync(folderthumnail, Buffer.from(getthumnail, 'utf-8'));
  
  imgthumnail.push(fs.createReadStream(__dirname + `/cache/${numb}.png`));
        /////=//////////////
				msg += (`${num+=1}. ${value.title}\n→ Thời gian: ${time}\n→ Kênh: ${channel}\n-----------------------\n`);
      }
  
      var body = `[ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ] → Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n${msg}\n→ Hãy phản hồi tin nhắn này chọn một trong những tìm kiếm trên`
return api.sendMessage({attachment: imgthumnail, body: body}, event.threadID,(error, info) => global.client.handleReply.push({ 
  name: this.config.name, 
  messageID: info.messageID, 
  author: event.senderID, 
  link }),
  event.messageID);
		}
	}
  for(let ii = 1; ii < 7 ; ii++) {
  unlinkSync(__dirname + `/cache/${ii}.png`)}
  
  
  
  
            }