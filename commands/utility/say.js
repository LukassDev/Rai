const Discord = require('discord.js');

module.exports = {
	name: 'say',
	aliases: ['', ''],
	description: "",
	run: async (client, message, args) => {
    message.delete(); 
    if (args.join(" ") === "@everyone" || args.join(" ") === "@here") return message.channel.send("Stop, Dont try to make me ping anyone!");
    message.channel.send(args.join(" "));
     }
};