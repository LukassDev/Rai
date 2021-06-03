const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	aliases: ['b', 'bn'],
	description: "Returns the bot's ping!",
	run: async (client, message) => {
		const { member, mentions } = message;

		const tag = `<@${member.id}>`;

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('BAN_MEMBERS')
		) {
			const target = mentions.users.first();
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id);
				targetMember.ban();
				let ban = new Discord.MessageEmbed()
				.setColor("RANDOM")
				.setDescription(`I banned ${message.mentions.members.first()} from this server.`)
				message.channel.send(ban);
			} else {
			  
				message.channel.send(`${tag}, I cannot ban a member if you do not mention them.. 😑 Please mention someone so i can ban them..`);
			}
		} else {
			message.channel.send(
				`${tag} You do not have permission to use this command.`
			);
		}
	}
};
