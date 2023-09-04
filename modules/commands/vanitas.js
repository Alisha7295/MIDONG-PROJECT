module.exports.config = {
  name: "Vanitas",
  version: "3.1.1",
  hasPermssion: 0,
  credits: "Kudos",
  description: "",
  commandCategory: "Random-img alime",
  usages: "kurumi",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-trunghieu.hieutrung38.repl.co/api/vanitas.php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `𝐕𝐚𝐧𝐢𝐭𝐚𝐬  <3\n𝐋𝐢𝐧𝐤: ${res.data.data}`,
            attachment: fs.createReadStream(__dirname + `/cache/kurumi.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kurumi.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kurumi.${ext}`)).on("close", callback);
      })
}