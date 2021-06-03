const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
	name: 'vote',
	aliases: ['v', 'vte'],
	description: 'Vote for the bot',
	run: async (client, message) => {
		let embed = new Discord.MessageEmbed()
			.setTitle('Vote for Rai!')
			.setColor('RANDOM')
			.setDescription('Vote for Rai on DBL!\ntop.gg waiting for approval..')
			.setFooter('Thank you for voting for Rai!')
			.setTimestamp(new Date().toLocaleString());

		let DBL = new MessageButton()
			.setStyle('url')
			.setLabel('DBL')
			.setID("yy")
			.setURL('https://discordbotlist.com/bots/rai');
			let topgg = new MessageButton()
			.setStyle("red")
			.setID("hh")
			.setLabel("TOP.GG - Waiting for approval")
			await message.channel.send({
			buttons: [DBL, topgg],
			embed: embed
		});
		
	}
};
