const Random = require("srod-v2");
const Discord = require('discord.js');

module.exports = {
	name: 'tickle',
	aliases: ['tckle', 't'],
	description: "",
	run: async (client, message, args) => {

const Data = await Random.GetAnimeImage({ Anime: "tickle", Color: 'RANDOM' });
    
    return message.channel.send(Data);

     }
};