const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

module.exports = {
	name: 'invite',
	aliases: ['inv', 'links'],
	descriptiopn: '',
	run: async (client, message, args) => {
		let emb = new discord.MessageEmbed()
			.setTitle('Important Links!')
			.setDescription(
				'Looking to invite Rai? Or join Light Studios? Click one of the buttons below!'
			)
			.setColor('RANDOM');

		let btn = new disbut.MessageButton()
			.setStyle('url')
			.setLabel('Invite Rai')
			.setID('shit')
			.setURL(
				'https://discord.com/api/oauth2/authorize?client_id=831321158678347837&permissions=4264951159&scope=bot'
			);
		let btn2 = new disbut.MessageButton()
			.setStyle('url')
			.setLabel('Join Light Studios')
			.setID('rai')
			.setURL('https://discord.gg/KpT9XbKUxA');
		await message.channel.send({
			buttons: [btn, btn2],
			embed: emb
		});
	}
};
