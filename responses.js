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

// Check for "Hmm"s and "Hmm{+1m}" back according to the first Hmm, imitating the incoming hmm's punctuation when possible
exports.hmmm = (message, cleanedMessage) => {
  const hmmPattern = /^hm+$/;
  const hmm = cleanedMessage.find(w => hmmPattern.test(w));
  if(hmm){
    let sarcasticResponse = 'H' + Array(hmm.length).fill('m').join('');

    // order matters here; this array will be searched in order to find a match for the end of the
    // incoming message; so, putting the '' first would result in that always being the match, or
    // putting the '!' before the '?!' would result in the '?!' never being reached
    const endingPunctuation = ['...', '?!', '!?', '😨', '🤔', '?', '!', '~', ' :)', ' :(', '‽', ''];
    let sarcasticPunctuation = 
      endingPunctuation.find(p => message.content.endsWith(p)) || 
      endingPunctuation[Math.floor(Math.random() * endingPunctuation.length)];

    return message.channel.send(sarcasticResponse + sarcasticPunctuation);
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

// I'm davide
exports.davide = (message, cleanedMessage) => {
  for (i=0; i<cleanedMessage.length; i++){
    if (cleanedMessage[i] === "davide") {
      message.channel.send(`[Davide voice] I'M DAVIDE`);
    }
  }
}
