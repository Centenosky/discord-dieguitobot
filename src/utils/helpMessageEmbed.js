const Discord = require('discord.js');

const messageEmbed = () => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola, aquí está mi ayuda')
    .setDescription('Aquí tienes la lista de comandos...')
    .addField('!help', 'Obten la lista de comandos.')
    .addField('!delete mensajes', 'Elimina el numero de mensajes que quieras.')
    .addField('!bot', 'Pequeña descripción sobre mí.')
    .addField('!server', 'El nombre del server y el total de miembros.')
    .addField('!creator', 'Obten información sobre mi creador.')
    // .addField('Mi creador sigue añadiendome nuevas caracteristicas y pronto estaran disponibles más features.', 'Si tienes problemas puedes contactar a Diego Centeno')
    // .addField('!bot', '')

  return msgEmbed;
}

module.exports = messageEmbed;