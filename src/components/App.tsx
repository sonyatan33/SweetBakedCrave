import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";
import "../css/shop.css"
import Navbar from "./Navbar.js";
import Home from "./home.js";
import Footer from "./Footer.js";
import About from "./about.js";
import Shop from "./shop.js";
import SubMenu from "./subMenu.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        {/* for now, when link api, change to shop/:id */}
        <Route path="/subMenu" element={<SubMenu />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
