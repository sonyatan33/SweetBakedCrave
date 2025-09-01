import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useState("w-0");
  // const handleClick = () => {
  //   set
  // }
  return (
    <>
      <header className="bg-nav-bg-color py-6 items-center sticky">
        <nav
          className="flex justify-between 
                    items-center w-[100%] px-10"
        >
          <FontAwesomeIcon
            className="block lg:hidden text-3xl"
            icon={faBars}
            onClick={() => setMenuStatus(!menuStatus)}
          />
          <div className="font-fredericka text-black text-4xl font-medium m-auto lg:m-0">
            SweetBakedCrave
          </div>
          <div
            className={`flex lg:hidden flex-col items-center fixed transition-transform ease-in-out duration-300 top-0 left-0 ${menuStatus ? "translate-x-0" : "-translate-x-full"} w-48 z-20 overflow-x-hidden bg-white shadow-xl h-screen gap-4`}
          >
            <FontAwesomeIcon
              className="px-4 pt-4 pb-9 ml-auto text-2xl"
              icon={faXmark}
              onClick={() => setMenuStatus(false)}
            ></FontAwesomeIcon>
            <div className="">Home</div>
            <div className="">Our Story</div>
            <div className="">Shop</div>
            <div className="">Sign Up</div>
          </div>
          <div className="font-inter hidden lg:flex gap-5">
            <div className="nav_btn">Home</div>
            <div className="nav_btn">Our Story</div>
            <div className="nav_btn">Shop</div>
            <div className="nav_btn">Sign Up</div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
