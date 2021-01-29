import dbConnect from "../../../utils/mongodb";
import Grade from "../../../db/models/Grade";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const grades = await Grade.find({}).sort("grade");
        res.status(200).json({ success: true, data: grades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const grade = await Grade.create(req.body);
        res.status(201).json({ success: true, data: grade });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
