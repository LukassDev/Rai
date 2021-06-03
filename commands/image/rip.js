const Discord = require('discord.js');

module.exports = {
	name: 'rip',
	aliases: ['r.i.p'],
	description: '',
	run: async (client, message, args) => {
		const Member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.member;

		const Embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`Rest In Peace ${Member}`)
			.setImage(
				encodeURI(
					`https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({
						format: 'png'
					})}`
				)
			)
			.setFooter("Died on " + new Date().toLocaleString())

		return message.channel.send(Embed);
	}
};
