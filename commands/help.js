const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

const embed = new Discord.RichEmbed()
  .setTitle("Помощь!")
  .setColor("#4169E1 ")
  .addField("__Help__", `Данное меню`)
  .addField("__Dev__", `создатель бота`)
  .addField("__cmds__", `все команды`)
  .addField("__invite__", `пригласить бота`)
  .addField("__somehelp__", `подсказки по боту`)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(30000));
message.delete().catch(_O_o=>{});
	} 
