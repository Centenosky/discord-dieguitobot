const Discord = require('discord.js');
const client = new Discord.Client();
const descriptionMessageEmbed = require('./utils/descriptionMessageEmbed')
const helpMessageEmbed = require('./utils/helpMessageEmbed')
const creatorMessageEmbed = require('./utils/creatorMessageEmbed')
const prefix = '!';

var mensajes = ["Hola", "Hellou", "Que ondaa", "Que pasaa"];
var aleatorio = Math.floor(Math.random()*(mensajes.length));
var games = ["Amoung Us", "VALORANT", "Fortnite"];

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenida');
	if (!channel) return;
	channel.send(`Bienvenido al server, ${member}!`);
})


client.on('message', msg => {
  console.log(msg.content);
  console.log();

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (msg.channel.type === 'dm') {
    console.log('Enviaste un DM');
  } 
  if (msg.content.toLocaleLowerCase() === 'hola') {
    msg.reply('Hola!');
    msg.react('👍🏼');
  }
  if (msg.content.toLocaleLowerCase() === 'hellou') {
    msg.reply(mensajes[aleatorio]);
    msg.react('👍🏼');
  }
  if (msg.content.includes('tonto' || 'Tonto')) {
      msg.reply('El único tontito aqui eres tu');
  }
  if (msg.content.includes('buenisima' || 'Buenisima')) {
      msg.reply('La netaaa');
  }
  if (msg.content === 'a') {
    // msg.channel.send('a');
  }
  if (command === 'server') {
    msg.channel.send(`Nombre del server: ${msg.guild.name}\nTotal de miembros: ${msg.guild.memberCount}`);
  }
  if (command === 'help') {
    msg.channel.send(helpMessageEmbed());
  }
  if (command === 'bot') {
    msg.channel.send(descriptionMessageEmbed());
  }
  if (command === 'creator') {
    msg.channel.send(creatorMessageEmbed());
  }
  if (command === 'delete') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return msg.reply('Eso no parece ser un número valido.');
		} else if (amount <= 1 || amount > 100) {
      return msg.reply('Necesitas poner un número entre 1 y 99');
		}
		msg.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			msg.channel.send('Hubo un error tratando de eliminar los mensajes del canal!');
		})
	}
})

client.on('ready', () => {
  console.log(`Conectando... ${client.user.tag}`);
  client.user.setActivity( games[aleatorio], { type: 'PLAYING'})
  // client.user.setActivity('Spotify', { type: 'LISTENING'})
})

client.login(DISCORD_TOKEN);