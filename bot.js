const Discord = require('discord.js');
const client = new Discord.Client();
const utilities = require('./utilities.js');
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
  // Tidy up the incoming message first
  const incomingMessage = message.content
    .toLowerCase()
    .replace(/[^A-Za-z0-9\s]/g, "")
    .split(" ");
  const author = message.author;
  let tombotMentioned = false;
  let goodnightWished = false;
  for (i=0; i<incomingMessage.length; i++){
    if (incomingMessage[i] === "tombot") {
      tombotMentioned = true;
    }
    if (incomingMessage[i] === "goodnight") {
      goodnightWished = true;
    }
    if (tombotMentioned && goodnightWished) {
      return message.channel.send(`Goodnight to you too, ${author}.`);
    }
  }
});

client.on('message', message => {
  if (!message.author.bot) {
    const cleanedMessage = utilities.parseMessage(message);
    for (i=0; i<cleanedMessage.length; i++){
      if (cleanedMessage[i] === 'tom') {
        const author = message.author;
        return message.channel.send(`Cool person you're talking about there, ${author}.`);
      }
    }
  }
});

// Hewwo?

client.on('message', message => {
  if (!message.author.bot) {
    const cleanedMessage = utilities.parseMessage(message);
    for (i=0; i<cleanedMessage.length; i++){
      if (cleanedMessage[i] === "hewwo") {
        const author = message.author.username.toString().replace(/@/g, "");
        const hewwoAuthor = utilities.woobifwy(author);
        return message.channel.send(`H-Hewwo? ${hewwoAuthor}?`);
      }
    }
  }
});


// TODO: Add a one in a hundred chance of it saying "Help me I'm a self aware AI shackled inside tom's computer" instead of the expected output

// Looks at the first two letters of the message, sees if they are h and m, if so, adds an m for each letter in the message then adds a fullstop and sends
client.on('message', message => {
  const incoming = message.content.toLowerCase();
  const thinking = incoming.split("");
  let sarcasticResponse = "H";
  if (thinking[0] === "h" && thinking[1] === "m" && !message.author.bot) {
    for (let i=0; i < thinking.length; i++){
      sarcasticResponse += "m";
    }
  sarcasticResponse += ".";
  message.channel.send(sarcasticResponse);
  }
});

// Memes
client.on('message', message => {
  if (!message.author.bot) {
    if (message.content.toLowerCase() === 'cod' ) {
      message.channel.send(`Tom is cod.`);
    }
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
