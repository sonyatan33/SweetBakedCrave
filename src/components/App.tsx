import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";
import "../css/shop.css"
import Navbar from "./Navbar.js";
import Home from "./home.js";
import Footer from "./Footer.js";
import About from "./about.js";
import Shop from "./shop.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
