const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let dicenum = ["1","2","3","4","5","6"];
  let result = Math.floor((Math.random() * dicenum.length));

  let diceembed = new Discord.RichEmbed()
    .addField("Dice", "1 -> 6")
    .addField("Result", dicenum[result])

    message.channel.send(diceembed)
}
