import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import LeetcodeComponent from "./components/LeetcodeComponent";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="app">
      <FormComponent setUsername={setUsername} />
      <LeetcodeComponent username={username} />
    </div>
  );
}

export default App;
