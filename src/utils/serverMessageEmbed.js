const Discord = require('discord.js');

const messageEmbed = () => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola, mi creador es Diego Centeno')
    .setDescription(`Nombre del server: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`)

  return msgEmbed;
}

module.exports = messageEmbed;