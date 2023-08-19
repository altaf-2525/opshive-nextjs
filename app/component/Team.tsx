import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Team = () => {
  return (
    <div>
      <section id="team" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-[24px] tracking-wide font-medium title-font mb-4 text-gray-900 ">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our highly skilled and experienced IT team is dedicated to
              providing top-notch technical solutions and support.With a
              customer-centric approach, we strive to deliver innovative and
              efficient IT solutions to meet the unique needs of our clients.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/sirqasim.jpeg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Mr. Qasim Aziz
                  </h2>
                  <h3 className="text-gray-500 mb-3">CEO and Co-Founder </h3>
                  <p className="mb-4">
                    Cloud Solution Architect and DevOps Consultant. Leading
                    cross-functional teams to deliver exceptional software
                    products and services.
                  </p>
                  <span className="inline-flex">
                    <a
                      href="https://www.linkedin.com/in/qasim-malik-02812456/"
                      className="ml-2 text-gray-500">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/Qasim-Aziz"
                      className="ml-2 text-gray-500">
                      <AiFillGithub className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/altaf.jpeg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Mr. Altaf Hussain
                  </h2>
                  <h3 className="text-gray-500 mb-3">DevOps Engineer</h3>
                  <p className="mb-4">
                    DevOps Engineer and Kubernetes Developer. Automating
                    testing, deployment, and infrastructure management
                    processes.
                  </p>
                  <span className="inline-flex">
                    <a
                      href="https://www.linkedin.com/in/altaf-hussain-aa10b2181/"
                      className="ml-2 text-gray-500">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/altaf-2525"
                      className="ml-2 text-gray-500">
                      <AiFillGithub className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/azad.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Mr. Muhammad Azad
                  </h2>
                  <h3 className="text-gray-500 mb-3">React Developer</h3>
                  <p className="mb-4">
                    Building interactive user interfaces with Next.js.
                  </p>
                  <span className="inline-flex">
                    <a href="#" className="ml-2 text-gray-500">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/azad-nft"
                      className="ml-2 text-gray-500">
                      <AiFillGithub className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/shah.jpeg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    ShahTaj Bakht Yousafzai
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI/UX Designer</h3>
                  <p className="mb-4">
                    UI/UX designers focus on user-centered design principles,
                    ensuring that digital products are easy to use and
                    understand.
                  </p>
                  <span className="inline-flex">
                    <a className="ml-2 text-gray-500">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="ml-2 text-gray-500">
                      <AiFillGithub className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
