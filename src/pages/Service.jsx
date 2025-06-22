import React from "react";
import Web from "../assets/web.png";
import Design from "../assets/web-degin.png";
import Mobile from "../assets/mobile-app.png";

function Service() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-20" id="service">
      <h2 className="text-5xl font-bold text-red-800 text-center mb-10">Our Services</h2>

      <p className="text-4xl py-24 mx-20  ">I provide wide range of web based services like below.</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:shadow-xl ">
          <img src={Web} alt="" className="w-20 my-10" />
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p>
            Responsible for planning and developing software solutions and web applications,
            supporting and maintaining a company's websites and digital products.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl  hover:scale-105 hover:shadow-xl">
          <img src={Design} alt="" className="w-20 my-10" />
          <h3 className="text-xl font-semibold mb-3">Web Design</h3>
          <p>
            The creation of websites or web applications and pages to reflect a company's brand
            and ensure a user-friendly experience.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:shadow-xl">
          <img src={Mobile} alt="" className="w-20 my-10" />
          <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
          <p>
            Develop mobile applications for iOS and Android platforms. Design and implement user
            interfaces for mobile applications.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Service;
