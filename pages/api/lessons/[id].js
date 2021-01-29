import Lesson from "../../../db/models/Lesson";

export default async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const lesson = await Lesson.findById(id);
        if (!lesson) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: lesson });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        /*const lesson = await Lesson.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        }); */
        const lesson = await Lesson.findByIdAndUpdate(
          id,
          { $addToSet: { subjects: [req.body] } },
          {
            new: true,
            runValidators: true,
          }
        );
        if (!lesson) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: lesson });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedLesson = await Lesson.deleteOne({ _id: id });
        if (!deletedLesson) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
