module.exports.config = {
	name: "id",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args, Users, Currencies }) {

    const axios = global.nodemodule['axios']; 
       /* const name = await Users.getNameUser(uid);
            const res = await axios.get(`https://golike.com.vn/func-api.php?user=${uid}`);
var time = res.data.data.date
        var msg = `Name: ${name}\nID: ${uid}\nReg lúc: ${time}`;*/
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
            const name = await Users.getNameUser(uid);
            const res = await axios.get(`https://golike.com.vn/func-api.php?user=${uid}`);
var time = res.data.data.date;
	return api.sendMessage(`Name: ${name}\nID: ${uid}\nReg lúc: ${time}`, event.threadID, event.messageID) }
    if (!args[0]) { 
            var uid = event.senderID;
            const name = await Users.getNameUser(uid);
            const res = await axios.get(`https://golike.com.vn/func-api.php?user=${uid}`);
var time = res.data.data.date;
        var msg = `Name: ${name}\nID: ${uid}\nReg lúc: ${time}`;
               return    api.sendMessage(msg, event.threadID, event.messageID);}
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const uid = await api.getUID(args[0]);  
                      var data = await api.getUserInfoV2(uid);
var name = data.name;
            const res = await axios.get(`https://golike.com.vn/func-api.php?user=${uid}`);
var time = res.data.data.date;
        var msg = `Name: ${name}\nID: ${uid}\nReg lúc: ${time}`;
    return api.sendMessage(msg, event.threadID, event.messageID) }
	else {
		 if (args.join().indexOf('@') !== -1) var uid = Object.keys(event.mentions);
                        var data = await api.getUserInfoV2(uid);
var name = data.name;
            const res = await axios.get(`https://golike.com.vn/func-api.php?user=${uid}`);
var time = res.data.data.date;
        var msg = `Name: ${name}\nID: ${uid}\nReg lúc: ${time}`;
         api.sendMessage(msg, event.threadID);
		return;
	}
}
                                     }