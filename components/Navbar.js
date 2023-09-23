import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="flex z-50 items-center text-white flex-wrap p-3"
        style={{
          background: "#9B929236",
          borderRadius: "16px",
          boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.7px)",
          // -webkit-backdrop-filter: blur(2px);
          border: "1px solid rgba(100, 100, 100, 0.84)",
          margin: "20px 20px",
          borderRadius: "20px",
          zIndex: "999",
        }}
      >
        <Link href="/Main">
          <pa className="inline-flex items-center p-2 mr-4 ">
            {/* <Image src="/logo.png" alt="" width={100} height={80} /> */}
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              MarksMe
            </span>
          </pa>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto  outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          style={{ zIndex: "10" }}
          className={`w-full lg:inline-flex lg:flex-grow lg:w-auto ${
            isMenuOpen ? "" : "hidden"
          } mt-4 lg:mt-0`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/Marksupload">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all ">
                Marks
              </pa>
            </Link>
            <Link href="/Notes">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all">
                Notes
              </pa>
            </Link>
            <Link href="/podcastlist">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all ">
                Notes View
              </pa>
            </Link>
            <Link href="/NotifyMe">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all">
                Notification
              </pa>
            </Link>
            <div className="relative z-50" style={{ zIndex: "10" }}>
              <button
                style={{ zIndex: "10" }}
                className="inline-flex items-center justify-center w-full px-3 py-2 rounded text-white font-bold hover:bg-blue-500 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BiDotsVerticalRounded />
              </button>
              <div
                style={{ zIndex: "10" }}
                className={`absolute z-50 right-0 mt-2 py-2 w-48 bg-white  rounded-lg shadow-xl ${
                  isMenuOpen ? "" : "hidden"
                } `}
              >
                <Link href="/studentsList">
                  <pa
                    style={{ zIndex: "10" }}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Student List
                  </pa>
                </Link>
                <Link style={{ zIndex: "10" }} href="/addMentor">
                  <pa
                    style={{ zIndex: "10" }}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Mentor
                  </pa>
                </Link>
                <Link style={{ zIndex: "10" }} href="/profile">
                  <pa
                    style={{ zIndex: "10" }}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Profile
                  </pa>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
