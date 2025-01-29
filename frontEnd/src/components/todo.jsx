import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskInput) {
      setError("Task name is required");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ task: taskInput }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        return;
      } else {
        getAllTasks();
        setTaskInput("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 400) {
          navigate("/login");
        }
        const error = await response.json();
        setTasks([]);
        throw new Error(error.message);
      } else {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      setError(error);
      setTasks([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        return;
      } else {
        getAllTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onCheckboxChange = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        return;
      } else {
        getAllTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-full h-screen flex items-center justify-center p-4">
      <div className="bg-[#1e293b]/90 backdrop-blur-md shadow-2xl p-8 rounded-lg w-full max-w-md">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold mb-8 text-center tracking-wide">
          To-Do List
        </h1>

        {/* Input Section */}
        <div className="flex mb-6 hover:ring-2 hover:ring-indigo-500 rounded-md">
          <input
            type="text"
            className="block w-full rounded-l-lg bg-[#334155] px-4 py-2 text-base text-white placeholder:text-gray-400 outline-none shadow-md transition-all duration-300"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center w-12 rounded-r-lg shadow-md transform transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 text-white"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </div>

        {/* Task List Section */}
        <div className="space-y-4">
          {/* Example Task */}
          {tasks.map((task) => (
            <div className="flex items-center justify-between bg-gradient-to-br from-[#2c3a47] to-[#3d4c63] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-indigo-600 rounded-md"
                  checked={task.status}
                  onChange={()=>{onCheckboxChange(task._id)}}
                />
                {/* Task Text */}
                <span className="text-white text-sm sm:text-base font-medium" style={{ textDecoration: task.status ? "line-through" : "none" }}>
                  {task?.task}
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                {/* Delete Icon */}
                <button onClick={() => handleDelete(task._id)} className="text-red-400 hover:text-red-300 transform transition-transform duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v8.5A2.5 2.5 0 0 1 10.5 15h-5A2.5 2.5 0 0 1 3 12.5V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H13a1 1 0 0 1 1 1v1zM4.118 4l.401 8.026A1.5 1.5 0 0 0 6 13.5h4a1.5 1.5 0 0 0 1.481-1.474L11.882 4H4.118z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <hr className="border-gray-600" />
          <p className="text-gray-400 text-center mt-4 text-sm">
            Built with ❤️ by{" "}
            <span className="text-indigo-400 font-semibold">Badar</span>
          </p>
        </div>
      </div>
    </div>
  );
}
