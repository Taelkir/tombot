// Read and parse incoming messages. Turns them into an array with each word as a string in the array with no punctuation
exports.parseMessage = message => {
    const cleanMessage = message.content
      .toLowerCase()
      .replace(/[^A-Za-z0-9\s]/g, "")
      .split(" ");
    return cleanMessage;
}

// Parses the message but with punctuation/capital letters intact for URLs etc
exports.utilityParse = message => {
  if (message.content.charAt(0) === "!"){
    const cleanMessage = message.content
      .substring(1)
      .split(" ");
    return cleanMessage;
  } else {
    return null;
  }
}


// Creates emojis
exports.emoji = (message, cleanedMessage) => {
  if (cleanedMessage[0] === 'emoji' ) {
    let img = cleanedMessage[1];
    let emojiName = cleanedMessage[2];
    message.guild.createEmoji(img, emojiName);
    message.channel.send(`${message.author}, I tried to make your emoji for you. See if it works by typing :${emojiName}:.`);
  };
}

// Hewwo? Text replacement
exports.woobifwy = function (string) {
  return string.toString()
  .replace(/l/g, "w")
  .replace(/r/g, "w")
  .replace(/f/g, "fw");
}
