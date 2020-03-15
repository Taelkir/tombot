// Read and parse incoming messages. Turns them into an array with each word as a string in the array with no punctuation
exports.parseMessage = message => {
    const cleanMessage = message.content
      .toLowerCase()
      .replace(/[^A-Za-z0-9\s]/g, "")
      .split(" ");
    return cleanMessage;
}

// Parses the message as a command with punctuation/capital letters intact for URLs etc
exports.parseBangCommand = message => {
  try {
    if (message.content.charAt(0) === "!"){
      const cleanMessage = message.content
        .substring(1)
        .split(" ");
      return cleanMessage;
    } else {
      return null;
    }
  }
  catch(err) {
    console.log(`There was an error with the message: "${message.content}". The error was: "${err.message}", during the parseBangCommand function.`)
  }
}

// Creates emojis
exports.emoji = (message, cleanedMessage) => {
  if (cleanedMessage[0] === 'emoji' ) {
    let img = cleanedMessage[1];
    let emojiName = cleanedMessage[2];
    message.guild.createEmoji(img, emojiName)
      .then(emoji => message.channel.send(`${message.author}, I made you an emoji. See if it works by typing :${emojiName}:.`))
      .catch((err) => {
        console.error(`Failed to create an emoji from the message: "${message.content}". The error was: ${err.message};`)
        message.channel.send(`Sorry, didn't manage to create that emoji for you. The error was "${err.message}". Remember that the syntax is "!emoji emojiURL emojiName".`);
      }); // end catch

  };
}

// Hewwo? Text replacement
exports.woobifwy = function (string) {
  return string.toString()
  .replace(/l/g, "w")
  .replace(/r/g, "w")
  .replace(/f/g, "fw");
}

exports.d100 = function() {
  return Math.floor(Math.random() * 100) + 1;
}