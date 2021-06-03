const Discord = require('discord.js');

module.exports = {
	name: 'removeroke',
	aliases: ['rr', 'rrole'],
	description: "Returns the bot's ping!",
	run: async (client, message, args) => {
		let target = message.mentions.members.first();

		if (!target) return message.reply(`I am unable to find the user`);

		let rrole = message.mentions.roles.first();

		if (!rrole) return message.reply(`I am unable to find the role`);

		let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
		let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

		const embed = new Discord.MessageEmbed()
			.setAuthor(target.user.username, ticon)
			.setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
			.setColor('RANDOM')
			.setDescription(`${rrole} role removed from ${target}`)
			.setFooter(`Role added by ${message.author.username}`, aicon)
			.setTimestamp();

		await message.channel.send(embed);

		target.roles.remove(rrole);
	}
};
