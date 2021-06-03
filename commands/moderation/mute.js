const ms = require("ms");

module.exports = {
  name: "mute",
  aliases: ["mutes", "muted"],
  category: "moderation",
  description: "mute @user",
  run: async (bot, message, args) => {

 //!tempmute @user 1s/m/h/d

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             

 let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 if(!tomute) return message.reply("Couldn't find user.");
 if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
 let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
 //start of create role
 if(!muterole){
 try{
 muterole = await message.guild.createRole({
 name: "Muted",
 color: "#00001",
 permissions:[]
 })
 message.guild.channels.cache.forEach(async (channel, id) => {
 await channel.overwritePermissions(muterole, {
 SEND_MESSAGES: false,
 ADD_REACTIONS: false
 });
 });
 }catch(e){
 console.log(e.stack);
 }
 }
 //end of create role
 let mutetime = args[1];
 if(!mutetime) return message.reply("You didn't specify a time!");

 await(tomute.roles.add(muterole.id));
 let muted = new Discord.MessageEmbed()
 .setDescription(`${member.user} has been muted for ${ms(ms(mutetime))}`)
 .setColor("RANDOM")
 message.reply(muted);
 
 user.send(`You have now muted in **${message.guild.name}**`);

 setTimeout(function(){
 tomute.roles.remove(muterole.id);
 let unmuted = new Discord.MessageEmbed()
 .setDescription(`<@${tomute.id}> has been unmuted!`)
 message.channel.send(unmuted);
 }, ms(mutetime));
}}