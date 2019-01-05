const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require("fs");
const config = require("./config.json");



fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
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
