const Discord = require('discord.js');

const messageEmbed = () => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola, mi creador es Diego Centeno')
    .setDescription(`Puedes encontrarlo en redes sociales:`)
    .addField('GitHub', 'https://github.com/Skywalker0816')
    .addField('Twitter', 'https://twitter.com/Centenosky')
    // .addField(Facebook, 'Pequeña descripción sobre mí', true)
    // .addField('Instagram, 'Pequeña descripción sobre mí', true)

  return msgEmbed;
}

module.exports = messageEmbed;