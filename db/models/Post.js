const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    requred: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
