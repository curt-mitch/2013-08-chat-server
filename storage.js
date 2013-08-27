var storage = {};

storage.messages = [];

// // This puts our storage object onto the exports object Node
// // already provides for us...
// exports.storage = storage;

// Replace this file's exports object with our storage object, since
// we don't want to export multiple things
module.exports = storage;