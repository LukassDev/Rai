 const Discord = require('discord.js');

module.exports = {
	name: 'nuke',
	aliases: ['nke', 'nk'],
	description: "Nukes a channel!",
	run: async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");

  if (!message.channel.parentID) {
    message.channel.clone({ position: message.channel.rawPosition }).then((ch) => {
      let nuke = new Discord.MessageEmbed()
      .setTitle("Channel Nuked!")
      .setColor("ORANGE")
      .setImage('https://media1.tenor.com/images/b19fe8078c0ca25db66e20494d74fbee/tenor.gif?itemid=14282225')
      ch.send(nuke).then((msg) => msg.delete({ timeout: 30000 }));
    });
  } else {
    message.channel.clone({ parent: message.channel.parentID, position: message.channel.rawPosition }).then((ch) => {
       let nuke1 = new Discord.MessageEmbed()
      .setTitle("Channel Nuked!")
      .setImage('https://media1.tenor.com/images/b19fe8078c0ca25db66e20494d74fbee/tenor.gif?itemid=14282225')
      ch.send(nuke1).then((msg) => msg.delete({ timeout: 30000 }));
    });
  }
  message.channel.delete();
	}
}