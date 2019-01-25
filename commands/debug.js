const pak = require("../package.json")
const config = require("../config.json")
//🔎 👤 ⚙ 🆔 📄 📝 ⌛ 🖍 🔊 📬 🚀


module.exports.run = (client, message, _args, discord) => {
  let embed = new discord.RichEmbed()
    .setTitle(`Шалуняка бот`)
    .setTimestamp()
    .setAuthor(`${client.user.username} Debugger`, client.user.avatarURL)
    .setColor("7289DA")
    .setDescription(`
⚙ **Bot Version:** ${pak.version}\n
👤 **Bot Name:** ${client.user.tag}\n
🆔 **Bot ID:** ${client.user.id}\n
🚀 **Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n
🖍 **Bot Prefix:** ${config.prefix}\n
🔎 **I know:**\n -   ${client.guilds.size} Guilds\n -   ${client.channels.size} Channels\n -   ${client.users.size} Users\n
⌛ **Uptime:** ${Math.round(client.uptime / (1000 * 60 * 60))} hours, ${Math.round(client.uptime / (1000 * 60)) % 60}  minutes, ${Math.round(client.uptime / 1000) % 60} seconds.\n\n`)
  message.channel.send({embed: embed})
} else {
  message.channel.send("Nope!")
} 
}
