import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderText from "./components/HeaderText";
import MainText from "./components/MainText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeaderText>Yo! Sushi 🍣</HeaderText>
      <MainText />
    </div>
  );
}

export default App;
