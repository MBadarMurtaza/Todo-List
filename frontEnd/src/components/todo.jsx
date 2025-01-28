import { useState } from "react";

export default function TodoList() {
  const [taskInput, setTaskInput] = useState("");

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-full h-screen flex items-center justify-center p-4">
      <div className="bg-[#1e293b]/90 backdrop-blur-md shadow-2xl p-8 rounded-lg w-full max-w-md">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold mb-8 text-center tracking-wide">
          To-Do List
        </h1>

        {/* Input Section */}
        <div className="flex mb-6">
          <input
            type="text"
            className="block w-full rounded-l-lg bg-[#334155] px-4 py-2 text-base text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 shadow-md transition-all duration-300"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center w-12 rounded-r-lg shadow-md transform transition-transform duration-300 hover:scale-110">
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
          <div className="flex items-center justify-between bg-gradient-to-br from-[#2c3a47] to-[#3d4c63] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              {/* Checkbox */}
              <input
                type="checkbox"
                className="w-5 h-5 accent-indigo-600 rounded-md"
              />
              {/* Task Text */}
              <span className="text-white text-sm sm:text-base font-medium">
                Example Task
              </span>
            </div>
            <div className="flex space-x-3 items-center">
              {/* Edit Icon */}
              <button className="text-indigo-400 hover:text-indigo-300 transform transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a1.5 1.5 0 0 1 0 2.121l-1.415 1.415-3.536-3.536L11.966.525a1.5 1.5 0 0 1 2.121 0l1.415 1.415zM1 13.5V16h2.5l9.915-9.914-2.5-2.5L1 13.5z" />
                </svg>
              </button>

              {/* Delete Icon */}
              <button className="text-red-400 hover:text-red-300 transform transition-transform duration-300 hover:scale-110">
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
