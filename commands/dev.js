const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
	const embed = new Discord.RichEmbed()
  .setTitle("command: Dev")
  .setColor("#4169E1 ")
  .setDescription("Моим создателем является ШАЛУН#6666")
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(5000));
message.delete().catch(_O_o=>{});
}