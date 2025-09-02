function Home() {
  return (
    <>
      <div className="bg-main-bg-color flex flex-col h-screen">
        <div className="relative bg-[url('../assets/home1.jpg')] bg-cover bg-center h-1/2">
          <p className="text-white text-5xl absolute bottom-0 m-10 w-0 overflow-visible">
            Freshly baked happiness
          </p>
        </div>
        <section className="flex flex-col items-center p-10">
          <p className="text-white text-4xl pb-4">Our Menu</p>
          <div className="flex gap-11 flex-nowrap overflow-x-auto w-4/5 no-scrollbar">
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-72 h-80 bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p className="text-white text-2xl">Cakes</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-72 h-80 bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p className="text-white text-2xl">Tarts & Pies</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-72 h-80 bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p className="text-white text-2xl">Pastries</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="menu_card w-72 h-80 bg-[url('../assets/home1.jpg')] bg-cover"></div>
              <p className="text-white text-2xl">Cupcakes & Muffins</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
