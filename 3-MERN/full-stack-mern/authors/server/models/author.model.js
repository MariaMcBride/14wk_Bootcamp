const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author name is required."],
      minlength: [3, "Author name must be at least 3 characters long."],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z-,.]+(\s{0,1}[a-zA-Z-,. ])*$/.test(name);
        },
        message: props => `${props.value} is not a valid name.`
      }
    }
  }, { timestamps: true }
);

module.exports.Author = mongoose.model('Author', AuthorSchema);