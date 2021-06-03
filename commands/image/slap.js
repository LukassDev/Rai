const Discord = require('discord.js');
const superagent = require('superagent'); 

module.exports = {
	name: 'slap',
	aliases: ['', ''],
	description: "",
	run: async (client, message, args) => {

    if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them");
    if(message.mentions.users.first().id === "SetYourID") return message.reply('you cant slap them, your are baka.:facepalm:'); 
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap"); 
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`bro , ${message.mentions.users.first().username} you have been slaped by ${message.author.username}`)
    .setImage(body.url)
    .setFooter(`Ouch! That must of hurt..`); 
    message.channel.send({embed})

	}
	};