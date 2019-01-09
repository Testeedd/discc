const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

const embed = new Discord.RichEmbed()
  .setTitle("command: somehelp")
  .setColor("#4169E1 ")
  .addField("Если вы хотите видеть кто зашел и кто вышел", `Создайте канал с названием __member-log__ и все`)
  .addField("Если вы хотите видеть репорты", `создайте канал с названием __reports__ и все`)
  .addField("Если вы хотите видеть логи банов и киков", `создайте канал с названием __logs__ и все`)
  .addField("Если хотите, чтобы NSFW команды работали", `создайте канал с любым названием, но с ограничением NSFW и все будет работать`)
  .setDescription("после выполнения каждого из пунктов у вас все будет полностью работать)")
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(30000));
message.delete().catch(_O_o=>{});
	} 
