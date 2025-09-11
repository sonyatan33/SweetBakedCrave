import home1 from "../assets/home1.jpg";

function SubMenu() {
  return (
    <>
      <div className="bg-main-bg-color p-12 min-h-screen">
        <div className="flex gap-2 text-white text-xl pb-4">
          <b>Shop</b>
          <p>/</p>
          {/* change to the api name when linked */}
          <p>Cakes</p>
        </div>
        <div className="flex gap-4 pb-20 flex-wrap flex-shrink-0">
          <img src={home1} alt="" className="w-full md:w-7/12 xl:w-5/12" />
          <div className="flex flex-col gap-px text-white text-base md:text-lg">
            {/* change to relevant api names when linked */}
            <p className="text-xl md:text-2xl pb-2">Title</p>
            <p>Subtitle</p>
            <p>Price</p>
          </div>
        </div>
        <div className="flex flex-col text-2xl text-white">
          <p className="text-2xl md:text-3xl xl:text-4xl pb-4">
            Other Similar Products
          </p>
          <div className="flex gap-7 md:gap-11 xl:gap-14 flex-nowrap overflow-x-auto no-scrollbar">
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-60 h-72 md:w-80 md:h-96 xl:w-96 xl:h-[28rem] bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p>Cakes</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-60 h-72 md:w-80 md:h-96 xl:w-96 xl:h-[28rem] bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p>Tarts & Pies</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-60 h-72 md:w-80 md:h-96 xl:w-96 xl:h-[28rem] bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p>Pastries</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-60 h-72 md:w-80 md:h-96 xl:w-96 xl:h-[28rem] bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p>Cupcakes & Muffins</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenu;
