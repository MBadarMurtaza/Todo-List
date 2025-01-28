import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import TodoList from "./components/todo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
