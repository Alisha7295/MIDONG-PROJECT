const fs = require("fs");
module.exports.config = {
name: "chill",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung",
  description: "chill",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Chill")==0 || (event.body.indexOf("chill")==0)) {
    var msg = {
        body: "𝒏𝒉𝒂̣𝒄 𝒄𝒉𝒊𝒍𝒍 𝒕𝒉𝒂̣̂𝒕🧸",
        attachment: fs.createReadStream(__dirname + `/noprefix/chill.mp4`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}