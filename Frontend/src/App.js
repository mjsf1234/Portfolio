import "./App.css";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";
import Tools from "./Component/Tools/Tools";
import Contacts from "./Component/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Home />

      <Nav />

      <About />
      <Project />

      <Skills />

      <Tools />

      <Contacts />
    </div>
  );
}

export default App;
