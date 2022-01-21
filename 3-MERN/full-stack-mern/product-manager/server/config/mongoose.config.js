// talks to mongodb and we don't have to do mongodb commands
const mongoose = require('mongoose');

// Export a function to be called in server.js
module.exports = (db_name) => {
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Successfully connected to ${db_name}`);
    })
    .catch((err) => {
      console.log(`Mongoose connection to ${db_name} failed:`, err);
    });
};