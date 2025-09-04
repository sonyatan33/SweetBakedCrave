import home1 from "../assets/home1.jpg";

function About() {
  return (
    <>
      <div className="bg-main-bg-color min-h-screen">
        <div className="bg-white h-auto flex flex-col py-6 md:p-0">
          <div className="flex flex-wrap-reverse w-full gap-4 md:gap-8 xl:gap-44 justify-center items-center px-2 py-2 md:px-8 md:py-8 lg:px-24 lg:py-12">
            <div className="flex flex-col w-full xl:w-96 px-10 xl:p-0">
              <p className="text-3xl">Lorem Ipsum</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                dolore esse, totam quasi laudantium id! Repudiandae eos ea
                aspernatur optio quaerat harum autem ut debitis temporibus. Odio
                nemo odit veritatis.
              </p>
            </div>
            <img src={home1} alt="" className="w-full xl:w-5/12 px-10 xl:p-0" />
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8 xl:gap-44 justify-center items-center px-2 py-2 md:px-8 md:py-8 lg:px-24 lg:py-12">
            <img src={home1} alt="" className="w-full xl:w-5/12 px-10 xl:p-0" />
            <div className="flex flex-col w-full xl:w-96 px-10 xl:p-0">
              <p className="text-3xl">Lorem Ipsum</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                dolore esse, totam quasi laudantium id! Repudiandae eos ea
                aspernatur optio quaerat harum autem ut debitis temporibus. Odio
                nemo odit veritatis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-10 lg:px-24 py-12 text-white">
          <p className="text-3xl text-center pb-5">Lorem Ipsum</p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            dignissimos et doloribus mollitia excepturi minima eveniet
            reiciendis, nobis architecto, molestiae quos. Ex dolore commodi
            explicabo rem ducimus quae ipsum assumenda!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
