import React from "react";
import { IoIosPeople } from "react-icons/io";
import { GrDeploy } from "react-icons/gr";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
const Services = () => {
  return (
    <div>
      <section id="services" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-[24px] tracking-wide font-medium title-font mb-4 text-gray-900 ">
              OUR SERVICES
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              OpsHive provides comprehensive DevOps services, including
              automation, monitoring, cloud migration, and infrastructure
              management. We specialize in streamlining software delivery
              pipelines and enhancing IT operations for businesses.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <IoIosPeople className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  CONSULTING
                </h2>
                <p className="leading-relaxed text-base">
                  OpsHive offers expert DevOps consulting services to help
                  clients optimize their software delivery and IT operations.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <GrDeploy className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  DEPLOYMENTS
                </h2>
                <p className="leading-relaxed text-base">
                  OpsHive deploys infrastructure in all ways recommends modern
                  solutions like microservices architecture to ensure smooth IT
                  operations
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <MdOutlineScreenshotMonitor className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  MONITORING
                </h2>
                <p className="leading-relaxed text-base">
                  OpsHive provides comprehensive monitoring solutions for
                  infrastructure and applications, enabling proactive detection
                  of issues and rapid response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
