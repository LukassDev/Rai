const Discord = require('discord.js');

module.exports = {
	name: 'speed',
	aliases: ['', ''],
	description: "",
	run: async (client, message, args) => {

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(encodeURI(`https://vacefron.nl/api/iamspeed?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  

     }
};