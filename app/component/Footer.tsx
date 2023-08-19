import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 text-lg body-font">
        <div className="bg-gray-100">
          <div className="container px-5 mb-6 pb-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src={"/opshive.svg"}
                alt={"opshive logo"}
                width={100}
                height={100}
              />
            </a>
            <p className="text-xl text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Opshive —
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1">
                This site is owned and operated by Qasim Aziz.
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/company/opshive/about/"
                className="ml-3 text-gray-500">
                <AiFillLinkedin className="w-8 h-8" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
