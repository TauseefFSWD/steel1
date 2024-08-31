// About page developed by Tauseef
import React from "react";
import Navbar from "./Navbar";
import bg from "../src/assets/bg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import pipes from "../src/assets/pipes.jpg";
import rod from "../src/assets/hot-rod.jpg";
import metal from "../src/assets/hot-metals.jpg";
import supp from "../src/assets/supplier.jpg";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div id="About">
      <div className="mb-20">
        <Navbar />
      </div>

      {/* Intro Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="container mx-auto px-4 relative z-10 text-bold">
          <h1 className="text-4xl text-white font-bold">
            About Steelen Alloys
          </h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} About
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="text-center py-16 bg-white">
        <h2 className="text-gray-400 text-xl mb-4">We Are Steelen Alloys</h2>
        <h3 className="text-5xl font-serif text-blue-900 mb-4">
          We are committed to provide safe <br /> industrial solutions to many
          factories
        </h3>
        <p className="text-gray-500 max-w-2xl text-xl mx-auto">
          At Steelen Alloys, our goal is to generate oriented sales by our staff
          members which enables us to meet the clients' expectations in a timely
          manner.
        </p>
      </div>

      {/* Image Left, Text Right Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white">
        <div className="lg:w-1/2">
          <img src={pipes} alt="Pipes" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="font-semibold text-xl mb-4 text-gray-600">
            At Steelen Alloys Quality is Guaranteed, we take use of innovative &
            latest available technology to meet client's full requirements
            regarding Quality & Value for money.
          </h2>
          <p className="text-gray-600 mb-6">
            It is a great privilege to introduce ourselves as Steelen Alloys an
            ISO 9001:2008 certified & European Pressure Equipment Directive PED
            -97/23/EC Certified MANUFACTURER & EXPORTERS of Pipes, Tubes, Butt
            Weld Fittings, Forged Fittings, Fasteners & Flanges. We do
            manufacture various ranges of products as per National and
            International Standards of different materials like Carbon Steel,
            Stainless Steel, Alloy Steel material and many more. Our corporate
            office is located in Mumbai, India with 3 warehouse’s near Seaport
            JNPT, catering to domestic and global export markets. We stock &
            supply a comprehensive range of seamless, welded process and line
            pipes ranging from 1/2" to 60" and also Plates, Sheet, Bars and
            Structural Steel like Angle and channels. Our products are fully
            certified and approved by all the major end users & inspection
            agencies.
          </p>

          {/* Statistics Section */}
          <div className="text-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center border border-gray-300 p-8">
                <h3 className="text-red-500 text-4xl font-bold">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center border border-gray-300 p-8">
                <h3 className="text-red-500 text-4xl font-bold">36</h3>
                <p className="text-gray-600">Industries Served</p>
              </div>
              <div className="text-center border border-gray-300 p-8">
                <h3 className="text-red-500 text-4xl font-bold">105</h3>
                <p className="text-gray-600">Factories Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Vision Section with Left Image and Right Text */}
      <div className="container ">
        <div className="container  flex flex-col lg:flex-row bg-white">
          <div className="lg:w-1/2 flex flex-col justify-center p-8">
            <h2 className="text-red-600 text-3xl font-bold mb-2">
              Our Mission
            </h2>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
            <p
              className="text-gray-600 max-w-xl text-2xl
          "
            >
              Provide technically sound solutions and create additional value in
              mutual interest with our customers resulting in being a preferred
              Stockists & Suppliers
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img
              src={rod}
              alt="Our Mission"
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white">
          <div className="lg:w-1/2 p-4">
            <img
              src={metal}
              alt="Industry Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center p-8">
            <h2 className="text-red-600 text-3xl font-bold mb-2">
              Industry Vision
            </h2>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
            <p className="text-gray-600 max-w-xl text-2xl">
              We help customers develop their energy resources; bringing
              world-class capability and delivering it locally.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-600 text-white text-center py-8 px-4 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-bold">
              High Strength Steel Pipe With Excellent Corrosion Resistance,
              Internal Stress And Crack Resistance
            </h2>
            <p>
              Each of our units are equipped with modern infrastructure to
              deliver quality products.
            </p>
          </div>
        </div>
        <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white">
          Get A Quote
        </button>
      </div>
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="w-full container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white">
          {/* Content Section on the Left */}
          <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Who We Are
            </h2>

            {/* Manufacturer Section */}
            <div className="border-b border-gray-200">
              <button
                className={`w-full text-left py-4 px-6 focus:outline-none ${
                  activeIndex === 0 ? "bg-blue-900 text-white" : "text-gray-800"
                }`}
                onClick={() => toggleAccordion(0)}
              >
                Manufacturer
                <span className="float-right">
                  {activeIndex === 0 ? "▼" : "▶"}
                </span>
              </button>
              {activeIndex === 0 && (
                <div className="px-6 py-4 text-gray-600">
                  We are Professional Exporter & Manufacturer of Fasteners,
                  Flanges, ERW Pipes of stainless steel pipes, Alloy steel
                  &Nickel Alloy Grade delivered globaly to the whole of the
                  world.
                </div>
              )}
            </div>

            {/* Supplier Section */}
            <div className="border-b border-gray-200">
              <button
                className={`w-full text-left py-4 px-6 focus:outline-none ${
                  activeIndex === 1 ? "bg-blue-900 text-white" : "text-gray-800"
                }`}
                onClick={() => toggleAccordion(1)}
              >
                Supplier
                <span className="float-right">
                  {activeIndex === 1 ? "▼" : "▶"}
                </span>
              </button>
              {activeIndex === 1 && (
                <div className="px-6 py-4 text-gray-600">
                  {/* Text Section */}
                  <p>
                    For over years, customers have depended on Steelen Alloys
                    for the very best in specialty metals, complete processing
                    services, timely delivery and expert service.
                  </p>
                </div>
              )}
            </div>

            {/* Stockiest Section */}
            <div className="border-b border-gray-200">
              <button
                className={`w-full text-left py-4 px-6 focus:outline-none ${
                  activeIndex === 2 ? "bg-blue-900 text-white" : "text-gray-800"
                }`}
                onClick={() => toggleAccordion(2)}
              >
                Stockiest
                <span className="float-right">
                  {activeIndex === 2 ? "▼" : "▶"}
                </span>
              </button>
              {activeIndex === 2 && (
                <div className="px-6 py-4 text-gray-600">
                  Steelen Alloys is one of the largest stockholder of Stainless
                  Steel, Nickel Alloys, Alloy Steel, Duplex/Super Duplex steel
                  which are supplied to domestic & international market.
                </div>
              )}
            </div>

            {/* Exporter Section */}
            <div className="border-b border-gray-200">
              <button
                className={`w-full text-left py-4 px-6 focus:outline-none ${
                  activeIndex === 3 ? "bg-blue-900 text-white" : "text-gray-800"
                }`}
                onClick={() => toggleAccordion(3)}
              >
                Exporter
                <span className="float-right">
                  {activeIndex === 3 ? "▼" : "▶"}
                </span>
              </button>
              {activeIndex === 3 && (
                <div className="px-6 py-4 text-gray-600">
                  Steelen Alloys is one of the reputed export houses from India.
                  It is an organization with strong roots and a variegated past
                  with a clear vision of future.
                </div>
              )}
            </div>
          </div>

          {/* Image Section on the Right */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
            <img
              src={supp}
              alt="Supplier"
              className="rounded-lg border-4 border-red-600 max-w-full"
            />
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="bg-red-700 py-8 px-4 flex flex-col lg:flex-row items-center  justify-center">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4 lg:mb-0">
          Stay Updated With Our Newsletter
        </h2>
        <div className="flex items-center bg-white rounded overflow-hidden ml-5">
          <input
            type="email"
            className="w-full lg:w-auto p-4 text-gray-700 placeholder-gray-500 focus:outline-none"
            placeholder="Email address ..."
          />
          <button className="bg-gray-800 text-white text-center px-6 py-4   font-semibold">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
