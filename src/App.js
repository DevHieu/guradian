import "./App.css";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import TrailerVideo from "./components/TrailerVideo/TrailerVideo.js";
import Description from "./components/Description/Description.js";
import Story from "./components/Story/Story.js";
import CharSkill from "./components/CharSkill/CharSkill.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TrailerVideo />
      <Story />
      <CharSkill />
    </div>
  );
}

export default App;
