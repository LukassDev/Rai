const discord = require('discord.js');
const client = new discord.Client();
const { MessageButton } = require('discord-buttons');

module.exports = {
	name: 'test',
	aliases: ['t'],
	descriptiopn: '',
	run: async (client, message, args) => {
		let emb = new discord.MessageEmbed()
			.setTitle('Important Links!')
			.setDescription(
				'Looking to invite Rai? Or join Light Studios? Click one of the buttons below!'
			)
			.setColor('RANDOM');

		let btn = new MessageButton()
			.setStyle('green')
			.setLabel('Accept')
			.setID('testy')
		let btn2 = new MessageButton()
			.setStyle('red')
			.setLabel('Decline')
			.setID('rai')
		await message.channel.send({
			buttons: [btn, btn2],
			embed: emb
		});
		
	client.on('clickButton', async (button) => {
    if (button.id === 'rai') {
    button.reply.send(`${button.clicker.user.tag} clicked button!`);
	}
  });
	}
};
