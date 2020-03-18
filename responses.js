const utilities = require('./utilities.js');

/* 
  this file exports an object containing functions that take a message and an array of the words in the message
  and returns a string if a suitable response is available
*/

// Check to see if the message has the word "tom" in, then 50% chance to call Tom handsome, 50% chance to compliment Tom's personality
exports.tom = (message, cleanedMessage) => {
  const author = message.author;
  if (cleanedMessage.includes('tom')) {
    const roll = utilities.d100();
    if (roll > 50) {
      return `Handsome person you're talking about there, ${author}.`;
    } else {
      return `What a great person you're talking about, ${author}.`;
    }
  }
};

// Check to see if the message has the word "hewwo" in, then respond saying hewwo back
exports.hewwo = (message, cleanedMessage) => {
  if(cleanedMessage.includes('hewwo')){
      const author = message.author.username.toString().replace(/@/g, "");
      const hewwoAuthor = utilities.woobifwy(author);
      return `H-Hewwo? ${hewwoAuthor}?`;
    }
};

// Check for the words "goodnight" and "tombot" in the same message
exports.goodnight = (message, cleanedMessage) => {
  const author = message.author;
  const words = new Set(cleanedMessage);
  if (words.has('tombot') && words.has('goodnight')) {
    return `Goodnight to you too, ${author}.`;
  }
};


// Check for "Hmm"s and "Hmm{+1m}" back according to the first Hmm, imitating the incoming hmm's punctuation when possible
exports.hmmm = (message, cleanedMessage) => {
  const hmmPattern = /^hm+$/;
  const hmm = cleanedMessage.find(w => hmmPattern.test(w));
  if(hmm){
    const sarcasticResponse = 'H' + Array(hmm.length).fill('m').join('');

    // order matters here; this array will be searched in order to find a match for the end of the
    // incoming message; so, putting the '' first would result in that always being the match, or
    // putting the '!' before the '?!' would result in the '?!' never being reached
    const endingPunctuation = [
      '...', '?!', '!?', ' 😨', ' 🤔', '?', '!', '~', ' :)', ' :(', '‽', '.', ';', ' 🔥', ' 🤮', ' >:3', ' >:)))', ''
    ];
    const sarcasticPunctuation = 
      endingPunctuation.find(p => message.content.endsWith(p.trim())) || 
      endingPunctuation[Math.floor(Math.random() * endingPunctuation.length)];

    return sarcasticResponse + sarcasticPunctuation;
  }
};

// Cod
exports.cod = (message, cleanedMessage) => {
  if (cleanedMessage.includes('cod') ) {
    return `Tom is cod.`;
  }
}

// I'm davide
exports.davide = (message, cleanedMessage) => {
  if (cleanedMessage.includes("davide")) {
    return `[Davide voice] I'M DAVIDE`;
  }
}
