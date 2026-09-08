import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
