const Discord = module.require("discord.js");

const ms = require("ms");

module.exports.run = async (bot, message, args) =>{

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permissions to use this command");

//!tempmute @user 1s/m/h/d

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!tomute) return message.reply("Я не могу найти этого пользователя.");

if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Я не могу его замутить!");

let muterole = message.guild.roles.find(`name`, "Muted");

if(!muterole){

try{

muterole = await message.guild.createRole({

name: "Muted",

color: "#000000",

permissions:[]

})

message.guild.channels.forEach(async (channel, id) => {

await channel.overwritePermissions(muterole, {

SEND_MESSAGES: false,

ADD_REACTIONS: false

});

});

}catch(e){

console.log(e.stack);

}

}

let mutetime = args[1];

if(!mutetime) return message.reply("Вы не указали время!");

await(tomute.addRole(muterole.id));

message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){

tomute.removeRole(muterole.id);

message.channel.send(`<@${tomute.id}> has been unmuted!`);

}, ms(mutetime));

}
