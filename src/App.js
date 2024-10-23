import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main.js";
import Admin from "./pages/AdminPage/Admin.js";
import DetailedContentPage from "./pages/DetailedContentPage/DetailedContentPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/detail" element={<DetailedContentPage />} />
    </Routes>
  );
}

export default App;
