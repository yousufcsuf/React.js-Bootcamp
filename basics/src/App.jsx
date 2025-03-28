import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Newapp from "./Newapp";
import WelcomeMessage from "./exercise1/WelcomeMessage";
import Greeting from "./excercise2/Greeting";
import ProductInfo from "./excercise2/ProductInfo";
import UserList from "./exercise3/UserList ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
