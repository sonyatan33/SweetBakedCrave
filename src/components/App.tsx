import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";
import Navbar from "./Navbar.js";
import Home from "./home.js";
import Footer from "./footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
