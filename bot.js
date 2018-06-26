const Discord = require('discord.js');
const client = new Discord.Client();

// Get the discord API key
const apiKey = require("./secrets.json");

console.log(apiKey.client_ID);
console.log(apiKey.client_secret);
