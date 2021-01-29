const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    grade: String,
    subjects: [{ title: String, presentation: String, video: String }],
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports =
  mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
