const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
	name: 'kiss',
	aliases: ['', ''],
	description: "",
	run: async (client, message, args) => {

    if (!message.mentions.users.first()) return message.reply("O3o you must mention user that you want to kiss him/her");
	if (message.mentions.users.first().id === message.author.id) return message.channel.send('wai , why you want to kiss yourself');
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} has kissed ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`🤗`);
    message.channel.send({embed})

}
};