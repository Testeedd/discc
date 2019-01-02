const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**нерпавильно написанно:** `ш!Poll <вопрос>`')

  const embed = new Discord.RichEmbed()
  .setTitle("command: poll")
  .setColor("#4169E1")
  .setDescription(`${question}`)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS.   Шpoll - голосование", "https://i.imgur.com/fBv7xWF.jpg")
await message.channel.send(embed).then(embedMessage => {
    embedMessage.react('👍').then(r => {
      embedMessage.react('👎')
    }).catch(error => {
      console.log(error)
    })
  }).catch(error => {
    console.log(error)
  });
}
 