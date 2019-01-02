const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
	const embed = new Discord.RichEmbed()
  .setTitle("command: invite")
  .setColor("#4169E1 ")
  .setDescription("[ТЫКАЙ СЮДА ДЛЯ ИНВАЙТ ССЫЛКИ](https://discordapp.com/oauth2/authorize?&client_id=521776946149851157&scope=bot&permissions=8)")
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(20000));
message.delete().catch(_O_o=>{});
}