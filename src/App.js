import "./App.css";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import TrailerVideo from "./components/TrailerVideo/TrailerVideo.js";
import Description from "./components/Description/Description.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TrailerVideo />
      <Description />
    </div>
  );
}

export default App;
