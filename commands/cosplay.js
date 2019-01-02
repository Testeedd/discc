const puppy = require('random-puppy')
const Discord = require("discord.js");


module.exports.run = (bot, message, args, discord) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: You need to be in an NSFW channel to use this command.")
  let keywords = [
   'nsfwcosplay',
   'cosplayonoff',
   'cosporn',
   'cosplayboobs'
  ]
  
  var result = keywords[Math.floor(Math.random()*keywords.length)]
  
  puppy(result).then(url => {
    let embed = new Discord.RichEmbed()
    .setTitle("Cosplay")
    .setDescription("Here's an cosplay pic...")
    .setImage(url)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    message.channel.send({embed: embed})
  })
}
