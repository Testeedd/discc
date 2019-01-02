const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

let memberInfo = message.mentions.members.first();
const userinfoo = new Discord.RichEmbed()

.setAuthor(memberInfo.displayName)

.setThumbnail(memberInfo.user.avatarURL)

.setDescription("Информация о человеке!")

.setColor("#4169E1")

.addField("полное имя:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)

.addField("ID:", memberInfo.id)

.addField("аккаунт создан:", memberInfo.user.createdAt)

message.channel.send(userinfoo).then(msg => msg.delete(10000));
message.delete().catch(_O_o=>{});
}