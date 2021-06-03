const Discord = require('discord.js');

module.exports = {
	name: 'addrole',
	aliases: ['giverole', 'role', 'ar'],
	description: "Returns the bot's ping!",
	run: async (client, message, args) => {
		message.delete();

		if (!message.member.hasPermission('MANAGE_ROLES'))
			return message.channel
				.send(`You do not have MANAGE_ROLES permission`)
				.then(m => m.delete({ timeout: 5000 }));

		if (!args[0] || !args[1])
			return message.channel
				.send("Incorrect usage, It's `<username || user id> <role name || id>")
				.then(m => m.delete({ timeout: 5000 }));

		try {
			const member =
				message.mentions.members.first() ||
				message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find(
				r =>
					r.name === args[1].toString() ||
					r.id === args[1].toString().replace(/[^\w\s]/gi, '')
			);

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole)
				return message.channel
					.send('User already has that role')
					.then(m => m.delete({ timeout: 5000 }));

			const embed = new Discord.MessageEmbed()
				.setDescription(
					`I gave ${member.user} the role ${roleName}`
				)
				.setColor('RANDOM');

			return member.roles.add(roleName).then(() => message.channel.send(embed));
		} catch (e) {
			return message.channel
				.send('Try to give a role that exists next time...')
				.then(m => m.delete({ timeout: 5000 }))
				.then(() => console.log(e));
		}
	}
};
