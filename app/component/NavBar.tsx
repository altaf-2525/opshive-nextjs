import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="text-gray-600body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={"/opshive.svg"}
            alt={"Opshive Logo"}
            width={150}
            height={150}
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap cursor-pointer items-center  justify-center">
          <a
            href="#home"
            className="mr-5 cursor-pointer text-xl hover:text-gray-900">
            Home
          </a>
          <a href="#services" className="mr-5 text-xl hover:text-gray-900">
            Services
          </a>
          <a href="#team" className="mr-5 text-xl hover:text-gray-900">
            Team
          </a>
          <a href="#contact" className="mr-5 text-xl hover:text-gray-900">
            Contact Us
          </a>
        </nav>
        <a className="cursor-pointer" href="#contact">
          <button className="inline-flex  text-xl items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
