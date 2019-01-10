const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require("fs");
const config = require("./config.json");


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});



client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
});

client.on('guildMemberAdd', async member => {
    let channel = member.guild.channels.find(c => c.name == 'member-log')

    let embed =  new Discord.RichEmbed()
        .setAuthor('Участник присоединился', member.user.avatarURL)
        .setDescription(`${member.user.username}#${member.user.discriminator} (${member})`)
        .setColor(0x41b581)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
    await channel.send(embed)
});


client.on('guildMemberRemove', async member => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Участник вышел', member.user.avatarURL)
        .setDescription(`${member.user.username}#${member.user.discriminator} (${member.id})`)
        .setColor(0xf04747)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
    let channel = member.guild.channels.find(c => c.name == 'member-log')
    await channel.send(embed)
});

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  });

let prefix = config.prefix

setInterval(function() {

let statuses =[
`${prefix}help | bit.ly/LLIAJIYH`,
`${prefix}help | ${client.users.size} пользователей`,
`${prefix}help | ${client.guilds.size} сервера`,
`${prefix}help | vk.com/wolves_xd`,
`создан ШАЛУН#6666`,
`${prefix}help | префикс = ${prefix}`
]

let status = statuses[Math.floor(Math.random()*statuses.length)];

client.user.setPresence({game: { name: status}, status: 'idle'});
}, 3000);

client.login(process.env.token);
