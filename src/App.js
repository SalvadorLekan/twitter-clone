import "./App.css";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { RiHome7Fill, RiNotification2Line } from "react-icons/ri";
import { FiSearch, FiMail, FiPlus } from "react-icons/fi";
import { GiFeather } from "react-icons/gi";
import EmoVG from "./components/EmoVG";

function App() {
  return (
    <>
      <div className="container mx-auto flex">
        <Nav />
        <Main />
        <Aside />
      </div>
      <div className="fixed p-2 bg-white text-gray-500 bottom-0 text-2xl flex justify-evenly w-screen sm:hidden">
        <EmoVG>
          <RiHome7Fill />
        </EmoVG>
        <EmoVG>
          <FiSearch />
        </EmoVG>
        <EmoVG>
          <RiNotification2Line />
        </EmoVG>
        <EmoVG>
          <FiMail />
        </EmoVG>
      </div>
      <div className="fixed w-16 bottom-14 right-7 sm:hidden flex justify-center items-center bg-blue-700 hover:shadow hover:bg-blue-600 rounded-full h-16 p-3">
        <FiPlus className="text-xl text-white" />
        <GiFeather className="text-4xl text-white" />
      </div>
    </>
  );
}

export default App;
