const utilities = require('./utilities.js');


function d100(){
  return Math.floor(Math.random() * 100);
}

// TODO: Add a one in a hundred chance of it saying "Help me I'm a self aware AI shackled inside tom's computer" instead of the expected output


// Check to see if the message has the word "tom" in, then 50% chance to call Tom handsome, 50% chance to compliment Tom's personality
exports.tom = (message, cleanedMessage) => {
  if (!message) {
    console.error(`responses.tom was called without providing a message to work with.`);
  }
  const author = message.author;
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === 'tom') {
      const percentage = d100();
      if (percentage < 100 && percentage >= 50) {
        return message.channel.send(`Handsome person you're talking about there, ${author}.`);
      } else if (percentage < 50) {
        return message.channel.send(`What a great person you're talking about, ${author}.`)
      }
    }
  }
};

// Check to see if the message has the word "hewwo" in, then respond saying hewwo back
exports.hewwo = (message, cleanedMessage) => {
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === "hewwo") {
      const author = message.author.username.toString().replace(/@/g, "");
      const hewwoAuthor = utilities.woobifwy(author);
      return message.channel.send(`H-Hewwo? ${hewwoAuthor}?`);
    }
  }
};

// Check for the words "goodnight" and "tombot" in the same message
exports.goodnight = (message, cleanedMessage) => {
  const author = message.author;
  let tombotMentioned = false;
  let goodnightWished = false;
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === "tombot") {
      tombotMentioned = true;
    }
    if (cleanedMessage[i] === "goodnight") {
      goodnightWished = true;
    }
    if (tombotMentioned && goodnightWished) {
      return message.channel.send(`Goodnight to you too, ${author}.`);
    }
  }
};

// Check for "Hmm"s and "Hmm{+1m}" back
exports.hmmm = (message, cleanedMessage) => {
  const letters = cleanedMessage.toString().split("");
  let sarcasticResponse = "H";
  if (letters[0] === "h" && letters[1] === "m") {
    for (let i=0; i < letters.length; i++){
      sarcasticResponse += "m";
    }
  sarcasticResponse += ".";
  return message.channel.send(sarcasticResponse);
  }
};

// Cod
exports.cod = (message, cleanedMessage) => {
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === 'cod' ) {
      message.channel.send(`Tom is cod.`);
    }
  }
}


exports.davide = (author, message) => {
  // TODO: every rime someone said davide, It said I'M DAVIDE
}
