const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log('I am ready!');
});