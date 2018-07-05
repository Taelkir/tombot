function d100(){
  return Math.floor(Math.random() * 100);
}

// 50% chance to call Tom handsome, 50% chance to compliment Tom's personality
exports.tom = (author, message) => {
  // add IF TOM code
  const percentage = d100();
  if (percentage < 100 && percentage >= 50) {
    return message.channel.send(`Handsome person you're talking about there, ${author}.`);
  } else if (percentage < 50) {
    return message.channel.send(`What a great person you're talking about, ${author}.`)
  }
}

exports.davide = (author, message) => {
  // TODO: every rime someone said davide, It said I'M DAVIDE
}
