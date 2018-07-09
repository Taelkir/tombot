const utilities = require('./utilities.js');


function d100(){
  return Math.floor(Math.random() * 100);
}

// Check to see if the message has the word "tom" in, then 50% chance to call Tom handsome, 50% chance to compliment Tom's personality
exports.tom = (message) => {
  const cleanedMessage = utilities.parseMessage(message);
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


exports.davide = (author, message) => {
  // TODO: every rime someone said davide, It said I'M DAVIDE
}
