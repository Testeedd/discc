const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

const embed = new Discord.RichEmbed()
  .setTitle("Помощь!")
  .setColor("#4169E1 ")
  .setDescription(`
__ban__ - забанить участника(шban @user 1m/1d/1h)
__clean__ - очистка чата (шclean <кол-во сообщений>)
__kick__ - кикнуть участника (шkick @user <причина>)
__mute__ -мутить участника ( Шmute <время в милисекундах >) `)
  .setTimestamp()
  .setFooter("|LLIAJIYH-BOT| PROJECTS All rightes reserved.", "https://i.imgur.com/fBv7xWF.jpg")

  message.author.send({embed})
message.delete().catch(_O_o=>{});
	} 
