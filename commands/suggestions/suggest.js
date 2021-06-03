const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'suggest',
	aliases: ['sug', 'lck'],
	description: "Returns the bot's ping!",

	run: async (client, message, args) => {
		let channel = await db.fetch(`suggestion_${message.guild.id}`);
		if (channel === null) return;

		const suggestionQuery = args.join(' ');
		if (!suggestionQuery) return message.reply('Please Suggest Something.');

		const embed = new MessageEmbed()

			.setAuthor(
				"💡 Suggestion",
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setDescription(`**Submitted by:** ${message.author.tag}\n**Suggestion:** ${suggestionQuery}`)
			.setColor('RANDOM')
			.setFooter('Status: Pending')
			.setTimestamp();

		const done = new MessageEmbed()
			.setDescription(
				`:white_check_mark:  | Your suggestion is Submitted here, <#${channel}>\n\nNote: You agreed to get a DM on a reply over your Suggestion!`
			)
			.setColor('GREEN');

		message.channel.send(done);

		let msgEmbed = await message.guild.channels.cache.get(channel).send(embed);

		await msgEmbed.react('👍');
		await msgEmbed.react('🤷');
		await msgEmbed.react('👎');
	}
};
