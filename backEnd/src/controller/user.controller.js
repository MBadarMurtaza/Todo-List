import User from "../models/user.model.js";

const userController = {
  singup: async (req, res) => {
    try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
        return res.status(400).json({ message: "user already exist" });
      }
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: "user create seccessfully" });
    } catch (error) {
      console.log("Error :", error);
      res.status(400).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      res.status(200).json({
        message: "user delete seccessfully",
      });
    } catch (error) {
      console.log("Error :", error);
      res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      if (user.password !== req.body.password) {
        return res.status(401).json({ message: "invalid password" });
      }
      res.status(200).json({ message: "login seccessfully" });
    } catch (error) {
      console.log("Error :", error);
      res.status(400).json({ message: error.message });
    }
  },
};

export default userController;
