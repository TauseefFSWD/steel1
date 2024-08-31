// Contact page developed by Tauseef
import React from "react";
import bg from "../src/assets/bg.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import map from "../src/assets/map.png";
import {
  faHome,
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="Quality">
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
          <h1 className="text-6xl text-white font-bold uppercase">
            Contact us
          </h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} Get in Touch
          </div>
        </div>
      </div>

      {/* Contact details  Section */}
      <div className="flex flex-col md:flex-row justify-between p-8  bg-white">
        <div className="bg-red-700 text-white p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
          <p className="mb-6">
            Get in touch with us for any questions about our industries or
            projects.
          </p>

          <div className="mb-4">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <strong>It's ED Group of company</strong>
            <p>Enzoden Engineering and Technologies</p>
          </div>

          <div className="mb-4">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <strong>Head Office</strong>
            <p>
              Plot No. Pap/J5 8B, J Block, Indryani Nagar, Road MIDC, Bhosari,
              Pune 411026.
            </p>
          </div>

          <div className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <strong>Email us</strong>
            <p>info@tsl.co.in</p>
          </div>

          <div className="mb-4">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            <strong>Website</strong>
            <p>www.tsl.in</p>
          </div>

          <div className="mb-8">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <strong>Call Support</strong>
            <p>+91 789456123</p>
          </div>
        </div>
        {/* form Section */}
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            Send a Message
          </h2>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Company"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-md"
              />
            </div>
            <textarea
              placeholder="Message"
              className="mt-4 p-3 border border-gray-300 rounded-md w-full"
            ></textarea>

            <button className="mt-4 text-bold bg-red-700 text-white px-6 py-3  hover:text-black hover:bg-slate-600">
              SEND NOW
            </button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className=" flex justify-center items-center ">
        {/* image */}
        <div className="  ">
          <img
            src={map}
            alt="img"
            className="w-[80rem] h-[20rem] md:h-[30rem] object-fill"
          />
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="bg-red-700 py-8 px-4 flex flex-col lg:flex-row items-center  justify-center mt-5 mb-5">
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

export default Contact;
