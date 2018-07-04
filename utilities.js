// Read and parse incoming messages
exports.parseMessage = message => {
    const cleanMessage = message.content
      .toLowerCase()
      .replace(/[^A-Za-z0-9\s]/g, "")
      .split(" ");
    return cleanMessage;
}

// Hewwo? Text replacement
exports.woobifwy = function (string) {
  return string.toString()
  .replace(/l/g, "w")
  .replace(/r/g, "w")
  .replace(/f/g, "fw");
}
