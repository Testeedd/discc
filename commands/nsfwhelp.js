const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
	const embed = new Discord.RichEmbed()
  .setTitle("command: nsfwhelp")
  .setColor("#4169E1 ")
  .setDescription(`
boobs - "дойки"
ass - "пятая точка"
pussy - "вафля"
fuck - "секас"`)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")
message.channel.send({embed}).then(msg => msg.delete(5000));
message.delete().catch(_O_o=>{});
}