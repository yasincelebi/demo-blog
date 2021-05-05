import { useContext, useEffect } from "react";
import "./App.scss";
import { PostContext } from "./context/PostContext";
import Posts from "./components/Posts";
function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
