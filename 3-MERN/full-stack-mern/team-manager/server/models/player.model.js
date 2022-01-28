const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Player name is required."],
      minlength: [2, "First name must be at least 2 characters in length."],
      validate: {
        validator: function (name) {
          const re = /^[a-zA-Z-,.]+(\s{0,1}[a-zA-Z-,. ])*$/;
          return re.test(name);
        },
        message: props => `${props.value} is not a valid name.`
      }
    },
    position: {
      type: String
    },
    status: {
      type: String
    }
  }, { timestamps: true }
);

module.exports.Player = mongoose.model('Player', PlayerSchema);
// Or you can export like this:
// const Player = mongoose.model('example', PlayerSchema);
// module.exports = example;
