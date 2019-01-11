exports.run = (client, message, args, ops) => {

    if(!message.guild.id.size < 1) return message.reply("You must supply a Guild ID")
    if (message.author.id !== ops.ownerID) return
    message.guild.leave()
        .then(g => console.log(`Left the guild ${g}`))
         .catch(console.error);
}
