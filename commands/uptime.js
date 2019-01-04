const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let totalSeconds = (bot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400)
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);

  let uptime = `${days}дней ${hours} часов, ${minutes} минут и ${seconds} секунд`;

  let uptimeEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription(`Я работаю уже = ${uptime}.`)
  .setColor(botconfig.green);

  message.channel.send(uptimeEmbed).then(msg => msg.delete(10000));
message.delete().catch(_O_o=>{});
}
