import { useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/signup.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Signup />
    </>
  );
}

export default App;
