import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cakes from "../assets/cakes.jpg";
import {
  faChevronLeft,
  faChevronRight,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Shop() {
  const [productState, setProductState] = useState("flex");
  const [priceState, setPriceState] = useState("flex");

  function handleProductChange() {
    if (productState == "hidden") {
      setProductState("flex");
    } else {
      setProductState("hidden");
    }
  }

  function handlePriceChange() {
    if (priceState == "hidden") {
      setPriceState("flex");
    } else {
      setPriceState("hidden");
    }
  }
  return (
    <>
      <div className="bg-main-bg-color flex gap-12 px-12 py-12 min-h-screen">
        <form className="flex flex-col text-white w-1/6 gap-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleProductChange}
          >
            <p className="text-2xl">Product Type</p>
            <FontAwesomeIcon
              icon={faSortDown}
              className="text-2xl align-middle"
            ></FontAwesomeIcon>
          </div>
          <div id="product" className={`dropdown-list ${productState}`}>
            <a href="">All Products</a>
            <a href="">Cakes</a>
            <a href="">Tarts & Pies</a>
            <a href="">Pastries</a>
            <a href="">Cupcakes & Muffins</a>
          </div>
          <div className="h-px bg-white w-full"></div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={handlePriceChange}
          >
            <p className="text-2xl">Price Range</p>
            <FontAwesomeIcon
              icon={faSortDown}
              className="text-2xl align-middle"
            ></FontAwesomeIcon>
          </div>
          <div className={`dropdown-list ${priceState}`}>
            <div className="flex items-center cursor-pointer gap-2 w-max">
              <input id="price-1" type="checkbox" className="checkbox-layout" />
              <label htmlFor="price-1">&lt; $10</label>
            </div>
            <div className="flex items-center cursor-pointer gap-2 w-max">
              <input id="price-2" type="checkbox" className="checkbox-layout" />
              <label htmlFor="price-2">$10 - $25</label>
            </div>
            <div className="flex items-center cursor-pointer gap-2 w-max">
              <input id="price-3" type="checkbox" className="checkbox-layout" />
              <label htmlFor="price-3">$25 - $50</label>
            </div>
            <div className="flex items-center cursor-pointer gap-2 w-max">
              <input id="price-4" type="checkbox" className="checkbox-layout" />
              <label htmlFor="price-4">&gt; $50</label>
            </div>
          </div>
          <div className="h-px bg-white w-full"></div>
        </form>
        <div className="w-0.5 bg-white min-h-full"></div>
        <section className="text-white w-9/12">
          <p className="text-2xl pb-4">Title</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
            <div className="pb-7">
              <img src={cakes} alt="" className="pb-3" />
              <p className="text-xl">Cake</p>
              <p className="text-lg">Price</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-14 pb-4">
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            <p>1</p>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shop;
