import "./App.css";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="container mx-auto flex">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
