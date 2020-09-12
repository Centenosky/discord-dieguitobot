const Discord = require('discord.js');

const messageEmbed = () => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola, soy Dieguitobot')
    .setDescription('Este bot aún esta en creación, me van a agregar nuevas caracteristicas pronto, Gracias. Puedes visitar el website de mi creador: https://skywalker0816.github.io/')
    .setFooter('©2020 Diego Centeno.')
    .setURL('https://skywalker0816.github.io/')

  return msgEmbed;
}

module.exports = messageEmbed;