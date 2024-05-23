import "./App.css";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import TrailerVideo from "./components/TrailerVideo/TrailerVideo.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TrailerVideo />
    </div>
  );
}

export default App;
