import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/JD Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     {
//       id: "about",
//       title: "About",
//     },
//     {
//       id: "projects",
//       title: "Projects",
//     },
//     {
//       id: "contact",
//       title: "Contact",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <nav
//       className={`w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-bg-black" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-2xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={Logo} alt="logo" className="w-9 h-9 object-contain" />
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           {toggle ? <IoMdClose /> : <GiHamburgerMenu />}

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {};

  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-6 fixed w-full top-0 z-50">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-2xl tracking-tight">JD Briones</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <GiHamburgerMenu onClick={() => setToggle((toggle) => !toggle)} />
        </button>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } w-full  flex-grow items-center lg:flex lg:w-auto`}
      >
        <div class="text-lg lg:flex-grow">
          <a
            href="#projects"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Projects
          </a>
          <a
            href="#about"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
