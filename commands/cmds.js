const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
	const embed = new Discord.RichEmbed()
  .setTitle("command: cmds")
  .setColor("#4169E1 ")
  .setDescription(`
avatar - ава человека
poll - голосование
say - сказать что-то
user-info - инфо о человеке
report - пожаловаться на пользователя
allservers - кол-во серверов использющих меня
nsfwhelp - помощь по NSFW пикчах`)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(20000));
message.delete().catch(_O_o=>{});
}