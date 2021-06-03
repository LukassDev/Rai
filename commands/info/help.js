const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['h', 'hlp'],
	description: "Returns the bot's ping!",
	run: async (client, message) => {
	
	
		let embed = new Discord.MessageEmbed()
			.setTitle("Rai's Help Menu")
			.setColor('#fd3e36')
			.setDescription(
				'Hello there, I\'m Rai! Im a multipurpose bot still being worked on but released to the public! More commands in the future.\n\n<> - optional arguments || [] - required arguments'
			)
			.addField("❤️ Action Commands (4)", "```js\nr!tickle [@user]\nr!kiss [@user]\nr!slap [@user]\nr!hug [@user]```")
			.addField(
				'🔨 Moderation Commands (11)',
				'```js\nr!kick [@user] <reason>\nr!ban [@user] <reason>\nr!unban [user_id]\nr!addrole [@user] [@role]\nr!clearn [amount]\nr!lock <#channel>\nr!unlock <#channel>\nr!removerole [@user] [@role]\nr!slowmode [time]\nr!mute [@user] <time>\nr!unmute [@user]\n```'
			)
			.addField("😂 Fun Commands (1)", "```r!hack [@user]```")
			.addField('🎉 Giveaway Commands (3)', '```js\nr!start [#channel] [duration] [winners] [name]\nr!reroll [message_id]\nr!end [message_id]\n```')
			.addField('📸 Image Commands (7)', '```js\nr!gay <@user>\nr!love [@user] [@user]\nr!rip <@user>\nr!speed <@user>\nr!wasted <@user>\nr!stonks <@user>\nr!meeting [message]\n```')
			.addField('💡 Suggestion Commands (3)', '```js\nr!reply [message_id] [reply]\nr!setsuggest [#channel]\nr!suggest [suggestion]\n```')
			.addField('🛠️ Utility Command (8)', '```js\nr!avatar <@user>\nr!invite\nr!userinfo <@user>\nr!serverinfo\nr!help\nr!ping\nr!say [message]\nr!vote```')
			.addField("🎶 Music Commands", "👀")
			.addField("Important Links", "🔗 [Invite Me](https://discord.com/api/oauth2/authorize?client_id=831321158678347837&permissions=4264951159&scope=bot) | [Support Server](https://discord.gg/9UAWxvfZJs)")
			.setFooter('Thanks for using Rai! | Total Commands: 37')
			.setTimestamp(new Date().toLocaleString());
		message.channel.send(embed);
		
		await message.react('<:emoji_1:848378007780458538>')
	}
	
};

