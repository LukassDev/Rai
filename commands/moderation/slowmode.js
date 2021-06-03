const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
	name: 'slowmode',
	aliases: ['slmde', 'sm'],
	description: "Returns the bot's ping!",
	run: async (client, message, args) => {
	const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send(":x: It doesn't seem to be valid number");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        let embedSecs = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " seconds**")
        message.channel.send(embedSecs);
        return;
      } else {
         let embedSec = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " seconds**")
        message.channel.send(embedSec);
        return;
      }
    }
    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
         let embedMins = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " minutes**")
        message.channel.send(embedMins);
        return;
      } else {
         let embedMin = new Discord.MessageEmbed()
       .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " minute**")
        message.channel.send(embedMin);
        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
         let embedHrs = new Discord.MessageEmbed()
       .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " hours**")
        message.channel.send(embedHrs);
        return;      } else {
         let embedHr = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Slowmode is now **" + amount + " hour**")
        message.channel.send(embedHr);
        return;
      }
    } else {
      message.channel.send(
        "You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
  }
};
