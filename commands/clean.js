const Discord = require("discord.js");
const moment = require("moment");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
 if(!args[0]) return message.channel.send("укажите кол-во сообщений");
 message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
} 

