import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-x-14">
      {[1, 1].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

export default App;
