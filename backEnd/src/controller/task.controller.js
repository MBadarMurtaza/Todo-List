import Task from "../models/task.model.js";
export const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = new Task({
      task,
      userId: req.user.id,
    });
    await newTask.save();
    res.status(201).json({ message: "Task created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Task.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Task not found" });
    }
    data.status = !data.status;
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
