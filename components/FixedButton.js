import { AiOutlineDownload } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { SiMicrosoftexcel } from "react-icons/si";

const FixedButtons = () => {
  return (
    // <div className="fixed right-0 bottom-0 mr-4 mb-4 flex flex-col">
    //   <a
    //     href="#"
    //     className="bg-blue-500 text-white p-3 rounded-full mb-4"
    //     title="Download Excel template"
    //   >
    //     <AiOutlineDownload />
    //   </a>
    //   <a
    //     href="#"
    //     className="bg-blue-400 text-white p-3 rounded-full"
    //     title="Download Notes template"
    //   >
    //     <AiOutlineDownload />
    //   </a>
    // </div>
    <>
      <a href="#" className="fixed right-0 bottom-0 social-links mr-4 mb-4">
        <div id="twitter" className="social-btn flex-center">
          <SiMicrosoftexcel style={{ fontSize: "2rem" }} />
          <HiDownload style={{ fontSize: "1rem", marginTop: "15px" }} />
          <span>Excel template</span>
        </div>
      </a>
      <a href="#" className="fixed right-0 bottom-16 social-links mr-4 mb-6">
        <div id="twitter" className="social-btn flex-center">
          <CgNotes style={{ fontSize: "2rem" }} />
          <HiDownload style={{ fontSize: "1rem", marginTop: "15px" }} />
          <span>Notes template</span>
        </div>
      </a>
    </>
  );
};

export default FixedButtons;
