const Discord = require('discord.js');
const client = new Discord.Client();
const responses = require('./responses.js');

// Get the discord API key
const credentials = require("./secrets.json");
const token = credentials.token;

client.on('ready', () => {
  console.log('I am ready!');
});

/* Fun and games */

// Word reactions & responses
client.on('message', message => {
  if (!message.author.bot) {
    const cleanedMessage = utilities.parseMessage(message);

    responses.tom(message, cleanedMessage);
    responses.hewwo(message, cleanedMessage);
    responses.goodnight(message, cleanedMessage);
    responses.hmmm(message, cleanedMessage);
    responses.cod(message, cleanedMessage);

  }
});


/* Fun and games end */

/* Utilities */

// Creates emojis
client.on('message', message => {
  let splitMessage = message.content.split(" ");
  if (splitMessage[0] === '/tomoji' ) {
    let img = splitMessage[1];
    let emojiName = splitMessage[2];
    message.guild.createEmoji(img, emojiName);
    message.channel.send(`Done, ${message.author}. I created an emoji for you with the name "${emojiName}".`);
  }
});

/* Utilities end */


// Log in
client.login(token);
