const pak = require("../package.json")
const config = require("../config.json")
//🔎 👤 ⚙ 🆔 📄 📝 ⌛ 🖍 🔊 📬 🚀


module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
    .setTitle(`Шалуняка бот`)
    .setTimestamp()
    .setAuthor(`${bot.user.username} Debugger`, bot.user.avatarURL)
    .setColor("7289DA")
    .setDescription(`
⚙ **Bot Version:** ${pak.version}\n
👤 **Bot Name:** ${bot.user.tag}\n
🆔 **Bot ID:** ${bot.user.id}\n
🚀 **Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n
🖍 **Bot Prefix:** ${config.prefix}\n
🔎 **I know:**\n -   ${bot.guilds.size} Guilds\n -   ${bot.channels.size} Channels\n -   ${bot.users.size} Users\n
⌛ **Uptime:** ${Math.round(bot.uptime / (1000 * 60 * 60))} hours, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutes, ${Math.round(bot.uptime / 1000) % 60} seconds.\n\n`)
  message.channel.send({embed: embed})
} else {
  message.channel.send("Nope!")
} 
}
