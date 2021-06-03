const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'reply',
	aliases: ['repl', 'repy'],
	description: "Returns the bot's ping!",
	run: async (client, message, args) => {
		let channel = await db.fetch(`suggestion_${message.guild.id}`);
		if (channel === null) return;

		if (!message.member.hasPermission('MANAGE_GUILD')) return;

		const rgx = /^(?:<@!?)?(\d+)>?$/;

		const messageID = args[0];
		const replyQuery = args.slice(1).join(' ');

		const number = new MessageEmbed()
			.setDescription(
				`:x:    | I don't think that was a Message ID!`
			)
			.setColor('RED');

		const id = new MessageEmbed()
			.setDescription(
				`:x: |You forgot to specify Message ID!`
			)
			.setColor('RED');

		const query = new MessageEmbed()
			.setDescription(
				`:x:   | You forgot to specify the Reply!`
			)
			.setColor('RED');

		const reply = new MessageEmbed()
			.setDescription(
				`:white_check_mark: | Successfully Replied the Suggestion.`
			)
			.setColor('GREEN');

		const noChannel = new MessageEmbed()
			.setDescription(
				`:x: | No Suggestion Channel found!`
			)
			.setColor('RED');

		const noMessage = new MessageEmbed()
			.setDescription(
				`:x:  | Didn't find any Suggestion with that ID!`
			)
			.setColor('RED');

		if (!messageID) return message.channel.send(id);

		if (!rgx.test(messageID)) return message.channel.send(number);

		if (!replyQuery) return message.channel.send(query);

		try {
			const suggestionChannel = message.guild.channels.cache.get(channel);

			if (!suggestionChannel) return message.channel.send(noChannel);

			const suggestedEmbed = await suggestionChannel.messages
				.fetch(messageID)
				.catch(error => {
					const noMessage = new MessageEmbed()
						.setDescription(
							`:x: | Didn't find any Suggestion with that ID!`
						)
						.setColor('RED');
					return message.channel.send(noMessage);
				});

			const data = suggestedEmbed.embeds[0];

			const replyEmbed = new MessageEmbed()
				.setAuthor(`${data.author.name}`, data.author.iconURL)
				.setDescription(data.description)
				.setColor('Random')
				.addField(`Reply from ${message.author.tag}`, replyQuery)
				.setFooter('Status: Replied')
				.setTimestamp();

			suggestedEmbed.edit(replyEmbed);

			message.channel.send(reply);

			const user = await client.users.cache.find(
				u => u.tag === data.author.name
			);

			const embed = new MessageEmbed()
				.setDescription(
					`You have got a Reply over your Suggestion :white_check_mark:. **[Message Link](https://discord.com/channels/${
						message.guild.id
					}/${channel}/${messageID})**`
				)
				.setColor('RANDOM');
			user.send(embed);
		} catch (err) {
			return;
		}
	}
};
