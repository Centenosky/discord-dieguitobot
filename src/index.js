const Discord = require('discord.js');
const client = new Discord.Client();
const descriptionMessageEmbed = require('./utils/descriptionMessageEmbed')
const helpMessageEmbed = require('./utils/helpMessageEmbed')
const creatorMessageEmbed = require('./utils/creatorMessageEmbed')
const prefix = '!';

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	channel.send(`Bienvenido al server, ${member}!`);
});


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
    msg.reply('Hellouuu!');
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
  client.user.setActivity('Amoug Us', { type: 'PLAYING'})
  // client.user.setActivity('Spotify', { type: 'LISTENING'})
})

client.login(DISCORD_TOKEN);




// const Discord = require('discord.js');
// // const { prefix, token } = require('./config.json');
// const client = new Discord.Client();
// const prefix = '!';

// require('dotenv').config();
// const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// client.once('ready', () => {
// 	console.log('Ready!');
// });

// client.on('message', message => {
// 	if (!message.content.startsWith(prefix) || message.author.bot) return;

// 	const args = message.content.slice(prefix.length).trim().split(/ +/);
// 	const command = args.shift().toLowerCase();

// 	if (command === 'ping') {
// 		message.channel.send('Pong.');
// 	} else if (command === 'beep') {
// 		message.channel.send('Boop.');
// 	} else if (command === 'server') {
// 		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
// 	} else if (command === 'user-info') {
// 		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
// 	} else if (command === 'info') {
// 		if (!args.length) {
// 			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
// 		} else if (args[0] === 'foo') {
// 			return message.channel.send('bar');
// 		}

// 		message.channel.send(`First argument: ${args[0]}`);
// 	} else if (command === 'kick') {
// 		if (!message.mentions.users.size) {
// 			return message.reply('you need to tag a user in order to kick them!');
// 		}

// 		const taggedUser = message.mentions.users.first();

// 		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
// 	} else if (command === 'avatar') {
// 		if (!message.mentions.users.size) {
// 			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
// 		}

// 		const avatarList = message.mentions.users.map(user => {
// 			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
// 		});

// 		message.channel.send(avatarList);
// 	} else if (command === 'prune') {
// 		const amount = parseInt(args[0]) + 1;

// 		if (isNaN(amount)) {
// 			return message.reply('that doesn\'t seem to be a valid number.');
// 		} else if (amount <= 1 || amount > 100) {
// 			return message.reply('you need to input a number between 1 and 99.');
// 		}

// 		message.channel.bulkDelete(amount, true).catch(err => {
// 			console.error(err);
// 			message.channel.send('there was an error trying to prune messages in this channel!');
// 		});
// 	}
// });