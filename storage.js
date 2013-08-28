var storage = {};

storage.messages = [{username:"Nigel", text:"Cheerio, lads."}, {username: "get", text: "money"}];

// // This puts our storage object onto the exports object Node
// // already provides for us...
// exports.storage = storage;

// Replace this file's exports object with our storage object, since
// we don't want to export multiple things
module.exports = storage;