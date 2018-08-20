const Discord = require('discord.js');
const client = new Discord.Client();
const responses = require('./responses.js');
const utilities = require('./utilities.js');

let happyToBeHere = true;

// Get the discord API key
const credentials = require("./secrets.json");
const token = credentials.token;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("error", (err) => {
  console.error(`An error occurred. The error was: ${err}.`)
});

// TODO: If one is returned, don't do any others
client.on('message', message => {
  try{
    if (!message.author.bot) {
      const cleanedMessage = utilities.parseMessage(message);
      responses.tom(message, cleanedMessage);
      responses.hewwo(message, cleanedMessage);
      responses.goodnight(message, cleanedMessage);
      responses.hmmm(message, cleanedMessage);
      responses.cod(message, cleanedMessage);
      responses.davide(message, cleanedMessage);
    }
  }
  catch(err) {
    console.error(`An error occurred: ${err.message}.`);
    message.channel.send(`That message caused an error. Someone call the robot doctor. More information: ${err.message}.`)
  }
});

client.on('message', message => {
  if (!message.author.bot) {
    // Check to see if the text starts with a `!`, if it does, preserve all other punctuation in the message during parsing
    const utilityRequest = utilities.utilityParse(message);
    if (utilityRequest){
      utilities.emoji(message, utilityRequest);
      // New utilities go here
    }
  }
});

// Log in
client.login(token);
