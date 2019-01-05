module.exports = (client, member) => {

    client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("member-log").send(`"${member.user.username}" has joined this server`);
});
};
