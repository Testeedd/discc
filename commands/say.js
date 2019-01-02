const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {

  let news1 = args.slice(0).join(" ");

  let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;

  const embed = new Discord.RichEmbed()
  .setTitle(`${usr.username}`)
  .setColor("#4169E1")
  .setDescription(`${news1}`)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS.", "https://i.imgur.com/fBv7xWF.jpg")
await message.channel.send(embed).then(msg => msg.delete(10000));
message.delete().catch(_O_o=>{});
}