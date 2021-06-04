const mySecret = process.env['token'];
const { Collection, Client, Discord } = require('discord.js');
const client = new Client();
const fetch = require("node-fetch");
const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const ms = require('ms');

const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;

client.snipes = new Map();
client.config = config;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');
['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${client.guilds.cache.size} servers and ${client.users.cache.size} users | r.help`,
			type: 'COMPETING'
		}
	});
});
console.log(`Rai is online!`);

client.on('guildCreate', guild => {
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${prefix}help | ${client.guilds.cache.size} Servers | ${
				client.users.cache.size
			} Users`,
			type: 'COMPETING'
		}
	});
	let joinserverembed = new MessageEmbed()
		.setTitle('Rai joined a server!')
		.addField('Guild name:', guild.name)
		.addField("Guild ID:", guild.id)
		.addField('Time of join:', new Date().toLocaleString())
		.setColor('RANDOM')
		.setThumbnail(guild.iconURL({ dynamic: true }));
	client.channels.cache.get('847062895959343124').send(joinserverembed);
	guild.channels.cache
		.filter(c => c.type === 'text')
		.random()
		.send(
			'Thank you for inviting Rai! Please use r!help for list of commands!'
		);
});

client.on('guildDelete', guild => {
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${prefix}help | ${client.guilds.cache.size} Servers | ${
				client.users.cache.size
			} Users`,
			type: 'COMPETING'
		}
	});
	let leftserverembed = new MessageEmbed()
		.setTitle('Rai left a server!')
		.addField('Guild name:', guild.name)
		.addField('Time of removal:', new Date().toLocaleString())
		.setColor('RANDOM')
		.setThumbnail(guild.iconURL({ dynamic: true }));
	client.channels.cache.get('847062895959343124').send(leftserverembed);
});

client.on('guildMemberAdd', guild => {
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${prefix}help | ${client.guilds.cache.size} Servers | ${
				client.users.cache.size
			} Users`,
			type: 'COMPETING'
		}
	});
});

client.on('guildMemberRemove', guild => {
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${prefix}help | ${client.guilds.cache.size} Servers | ${
				client.users.cache.size
			} Users`,
			type: 'COMPETING'
		}
	});
});

client.snipes = new Map();
client.on('messageDelete', function(message, channel) {
	client.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author.tag,
		image: message.attachments.first()
			? message.attachments.first().proxyURL
			: null
	});
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
	updateCountdownEvery: 5000,
	default: {
		botsCanWin: false,
		embedColor: 'RANDOM',
		reaction: '🎊'
	}
});

client.on('message', async message => {
	const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
	if (message.content.match(prefixMention)) {
		return message.channel.send(
			'My prefix is `r!`. You can type `r!help` to see a list of my commands!'
		);
	}
	if (message.author.bot || message.channel.type === 'dm') return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.guild) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd.length == 0) return;
	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));
	if (command) command.run(client, message, args);
});

client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@everyone`)) {
return message.channel.send(`**Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=Geørge#0666`)
    .then(res => res.json())
    .then(data => {
        message.reply(`${data.message}`);
    });
      message.channel.stopTyping();
}
});


client.login("TOKEN-HERE");
