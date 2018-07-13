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
    const cleanMessage = message.content
      .split(" ");
    return cleanMessage;
}


// Creates emojis
exports.emoji = (message, cleanedMessage) => {
  if (cleanedMessage[0] === 'emojithis' ) {
    let img = cleanedMessage[1];
    let emojiName = cleanedMessage[2];
    message.guild.createEmoji(img, emojiName);
    message.channel.send(`Done, ${message.author}. I created an emoji for you with the name "${emojiName}".`);
  };
}

// Hewwo? Text replacement
exports.woobifwy = function (string) {
  return string.toString()
  .replace(/l/g, "w")
  .replace(/r/g, "w")
  .replace(/f/g, "fw");
}
