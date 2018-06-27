const Discord = require('discord.js');
const client = new Discord.Client();

// Get the discord API key
const credentials = require("./secrets.json");
const token = credentials.token;

client.on('ready', () => {
  console.log('I am ready!');
});

/* Fun and games */

// If someone mentions me, call them out for their good taste in friends
client.on('message', message => {
  if (message.content.toLowerCase() === 'tom' ) {
    let author = message.author;
    message.channel.send(`Cool person you're talking about there, ${author}.`);
  }
});

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
  if (message.content.toLowerCase() === 'cod' ) {
    message.channel.send(`Tom is cod.`);
  }
});

/* Fun and games end */

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




// Log in
client.login(token);
