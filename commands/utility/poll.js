const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	aliases: ['ask', 'pll'],
	description: "",
	run: async (client, message, args) => {

let pollDescription = args.slice(0).join(' ');
if(!pollDescription) return message.reply(`What do you want to ask in this poll?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} just made a new poll.`)
        .setDescription(pollDescription)
        .setColor('RANDOM')
        .setFooter("Vote now! Poll started on " + new Date().toLocaleString())
        let msgEmbed = await message.channel.send(embedPoll);
        await msgEmbed.react('⬆️')
        await msgEmbed.react('🤷')
        await msgEmbed.react('⬇️')

     }
};