const search = require('random-puppy')
const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Boobs")
  .setDescription("Here's a boob pic...")
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp()
  let key = [
    "boobs",
    "tits",
    "breasts",
    "nipple",
    "bust"
  ]
  
  if (!message.channel.nsfw) return message.channel.send(":underage: You need to be in an NSFW channel to use this command.");
  let res = key[Math.floor(Math.random()*key.length)]
  
  search(res).then(url => {
    em.setImage(url)
    message.channel.send({embed: em})
  })
}