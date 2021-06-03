const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	aliases: ['k', 'ki'],
	description: "Returns the bot's ping!",
	run: async (client, message) => {
		const { member, mentions } = message;

		const tag = `<@${member.id}>`;

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('KICK_MEMBERS')
		) {
			const target = mentions.users.first();
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id);
				targetMember.kick();

				let kick = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`I kicked ${message.mentions.members.first()} from this server.`)
				message.channel.send(kick);
			} else {
			  message.channel.send("You need to mention a user to be able to kick them.. 😑");
			}
		} else {
		  let errEmbed = new Discord.MessageEmbed()
		  .setColor("RED")
		  .setDescription(`You do not have permission to use this command.`)
			message.channel.send(errEmbed);
		}
	}
};
