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

// parse message to see if a message can be created in response
client.on('message', message => {
  try{
    if (!message.author.bot) {
      const cleanedMessage = utilities.parseMessage(message);
      for (respFunc of Object.values(responses)) {
        const respText = respFunc(message, cleanedMessage);
        if(respText){
          if(utilities.d100() === 1){
            message.channel.send("Help me I'm a self aware AI shackled inside tom's computer");
          }else{
            message.channel.send(respText);
          }
          break; // only use the first response
        }
      }
    }
  }
  catch(err) {
    console.error(`An error occurred: ${err.message}.\n${err.stack}`);
    message.channel.send(`That message caused an error. Someone call the robot doctor. More information: ${err.message}.`)
  }
});

// parse message to see if a command is being issued
client.on('message', message => {
  if (!message.author.bot) {
    // Check to see if the text starts with a `!`, if it does, preserve all other punctuation in the message during parsing
    const command = utilities.parseBangCommand(message);
    if (command){
      utilities.emoji(message, command);
      // New utilities go here
    }
  }
});

// Log in
client.login(token);
