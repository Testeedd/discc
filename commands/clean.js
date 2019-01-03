exports.run = (client, message, args, tools) => {
	
if (isNaN(args[0])) return message.channel.send('**укажите кол-во сообщений**');
if (args[0] > 100) return message.channel.send('**кол-во сообщений должно быть меньше 100**')

  message.channel.bulkDelete(args[0])
    .then( message => message.channel.send(`**успешно удалено \`${message.size}/${args[0]}\` сообщений**`).then( msg => msg.delete({timeout: 10000})))
	.catch( error => message.channel.send(`**ERROR** ${error.message}`));
}
