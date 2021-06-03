const Discord = require("discord.js");
module.exports = {
  name: "bug",
  description:
    "Please specify the bug. Example:\n`punch isn't working. It isn't mentioning the user I'm trying to punch`",
  run: async (client, message, args) => {
    // again make this fit your command handler style 😀
    args = args.join(" ");
    const channels = message.channel;
    let check;
    if (args[0] === "temp") {
      check = "true";
    } else if (args[1] === "temp") {
      check = "true";
    } else {
      check = "false";
    }
    let check2;
    if (args[0] === "temp") {
      check2 = "86400";
    } else if (args[1] === "temp") {
      check2 = "86400";
    } else {
      check2 = "0";
    }
    let submittedEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Bug reported to Support Server!")
    .setDescription("Thanks for submitting your bug!, Your bug has been sent to my support server [Rai Support](https://discord.gg/9UAWxvfZJs), we'll check your report as soon as possible! We will DM when this bug has been resolved. Make sure to activate your DMs.")
    message.reply(submittedEmbed);
    channels
      .createInvite({
        temporary: `${check}`,
        maxAge: `${check2}`,
        maxUses: 0,
        reason: `Requested By : ${message.author.username}`
      })
      .then(InviteCode =>
        client.channels.cache.get("846443518956404776").send(
          new Discord.MessageEmbed()
.setTitle("🐛 New bug reported")
            .setColor("RANDOM")
            .setDescription(`**User:** ${message.author.tag}-(${message.author.id})\n**Server:** ${message.guild.name}`)
            .addField("Bug:", args)
            .setColor("RANDOM")
        )
      );
  }
};