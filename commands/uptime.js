const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let totalSeconds = (bot.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);

  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  let uptimeEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription(`My uptime is ${uptime}.`)
  .setColor(botconfig.green);

  message.channel.send(uptimeEmbed).then(msg => msg.delete(10000));
message.delete().catch(_O_o=>{});
}
