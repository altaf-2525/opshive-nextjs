import React from "react";

const ContactUs = () => {
  function grayscale(
    arg0: number
  ): import("csstype").Property.Filter | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <section id="contact" className="text-gray-600 body-font relative mt-6">
        <div className="flex flex-col text-center w-full ">
          <h1 className="sm:text-3xl text-[24px] tracking-wide font-medium title-font mb-4 text-gray-900 ">
            CONTACT US
          </h1>
        </div>
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Islamabad+(My%20Business%20Name)&ie=UTF8&t=&z=12&iwloc=B&output=embed
              "></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  BILLING ADDRESS
                </h2>
                <p className="mt-1 text-[10px]">
                  Beneficiary name: Qasim aziz <br />
                  Bank name: First Century Bank <br />
                  Address: 1731 N Elm St Commerce, GA 30529 USA <br />
                  Routing (ABA): 061120084 <br />
                  Account number: 4015353783290
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@opshive.io
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92-300-6891683</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              CONTACT US
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We&apos;re here for you! Fill out the form below to get in touch
              with our team and we&apos;ll do our best to assist you.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <form action="mailto:info@opshive.io">
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
