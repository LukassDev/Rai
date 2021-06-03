const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "ass",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("This channel dosen't support nsfw content")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.ass());
    return message.channel.send(akanekoSan);
      
    }
  }
}
