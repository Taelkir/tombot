const Discord = require('discord.js');
const client = new Discord.Client();

// Get the discord API key
const credentials = require("./secrets.json");
const token = credentials.token;

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (message.content.toLowerCase() === 'tom' ) {
    message.channel.send(`Cool person you're talking about there.`);
  }
});

// Log in
client.login(token);
