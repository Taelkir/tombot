const utilities = require('./utilities.js');

/* 
  this file exports an object containing functions that take a message and an array of the words in the message
  and returns a string if a suitable response is available
*/

// Check to see if the message has the word "tom" in, then 50% chance to call Tom handsome, 50% chance to compliment Tom's personality
exports.tom = (message, cleanedMessage) => {
  if (!message) {
    console.error(`responses.tom was called without providing a message to work with.`);
  }
  const author = message.author;
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === 'tom') {
      const percentage = utilities.d100();
      if (percentage < 100 && percentage >= 50) {
        return `Handsome person you're talking about there, ${author}.`;
      } else if (percentage < 50) {
        return `What a great person you're talking about, ${author}.`;
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
      return `H-Hewwo? ${hewwoAuthor}?`;
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
      return `Goodnight to you too, ${author}.`;
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
  return sarcasticResponse;
  }
};

// Cod
exports.cod = (message, cleanedMessage) => {
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === 'cod' ) {
      return `Tom is cod.`;
    }
  }
}

// I'm davide
exports.davide = (message, cleanedMessage) => {
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === "davide") {
      return `[Davide voice] I'M DAVIDE`;
    }
  }
}
