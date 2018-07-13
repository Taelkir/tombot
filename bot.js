const Discord = require('discord.js');
const client = new Discord.Client();
const responses = require('./responses.js');
const utilities = require('./utilities.js');

// Get the discord API key
const credentials = require("./secrets.json");
const token = credentials.token;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.author.bot) {
    const cleanedMessage = utilities.parseMessage(message);
    responses.tom(message, cleanedMessage);
    responses.hewwo(message, cleanedMessage);
    responses.goodnight(message, cleanedMessage);
    responses.hmmm(message, cleanedMessage);
    responses.cod(message, cleanedMessage);
    responses.davide(message, cleanedMessage);
  }
});

client.on('message', message => {
  if (!message.author.bot) {
    const utilityRequest = utilities.utilityParse(message);
    if (utilityRequest){
      utilities.emoji(message, utilityRequest);
      // New utilities go here
    }
  }
});

// Log in
client.login(token);
