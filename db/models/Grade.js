const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  grade: {
    type: String,
    requred: true,
    maxlength: 40
  },
  subject: {
    type: String,
    required: true,
    maxlength: 200,
  },
});

module.exports = mongoose.models.Grade || mongoose.model("Grade", GradeSchema);