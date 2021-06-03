const Discord = require('discord.js');

module.exports = {
	name: 'clear',
	aliases: ['purge', 'c'],
	description: "Returns the bot's ping!",
	run: async (client, message, args) => {
		message.delete();

		if (!message.member.permissions.has('MANAGE_MESSAGES'))
			// sets the permission
			return message.channel.send(
				`You do not have correct permissions to do this action, ${
					message.author.username
				}` // returns this message to user with no perms
			);
		if (!args[0]) {
			return message.channel.send(`Please enter a amount 1 to 100`);
		}

		let deleteAmount;

		if (parseInt(args[0]) > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0]);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`I deleted ${deleteAmount} messages.`)
		await message.channel
			.send(embed)
			.then(m => m.delete({ timeout: 5000 }))
	}
};
//tf my keyboard just spammed delete
