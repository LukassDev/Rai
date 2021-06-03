const Discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency", "pong"],
    description: "Returns the bot's ping!",
    run: async(client, message) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rai's Ping")
        .setDescription(`**Latency**: ${Date.now() - message.createdTimestamp}ms.\n**API Latency**: ${Math.round(client.ws.ping)}ms`)
        .setColor('BLACK')
        message.channel.send(embed)
    }
}
