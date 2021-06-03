const Discord = require('discord.js');
const superagent = require('superagent'); 
module.exports = {
	name: 'hug',
	aliases: ['', ''],
	description: "",
	run: async (client, message, args) => {

    if (!message.mentions.users.first()) return message.reply("You need to mention someone to hug them");
    const { body } = await superagent
    .get("https://nekos.life/api/hug"); //lets see wut we went
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} hugged ${message.mentions.users.first().username}!`) // lets reply like this if we mentions
    .setImage(body.url) // hug gif well showing here
    .setFooter(`Aww how cute <3`);//your personnel Footer
    message.channel.send({embed})

}
};