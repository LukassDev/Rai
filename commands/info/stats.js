const Discord = require('discord.js');

module.exports = {
	name: 'stats',
	aliases: ['', ''],
	description: '',
	run: async (client, message, args) => {
		console.log('Stats is underdevelopment');
		message.channel.send(':eyes:');
		await message.react('👀')
		await message.react('💢')
		await message.react('😔')
		await message.react('❎')
    await message.react('😂')
    await message.react('🤧')
    await message.react('🙂')
    await message.react('🤖')
    await message.react('😰')
    await message.react('💬')
    await message.react('⚡')
    }
};
