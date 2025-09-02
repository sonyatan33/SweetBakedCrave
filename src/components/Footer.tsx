import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="bg-main-bg-color flex flex-col items-center">
        <div className="font-fredericka text-black text-4xl font-medium m-auto lg:m-0 pt-32 pb-10">
          SweetBakedCrave
        </div>
        <div className="text-white flex gap-1 pb-10 justify-center items-center">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          <p>2025 SweetBakedCrave</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
