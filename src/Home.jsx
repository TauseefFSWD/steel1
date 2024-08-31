import React from "react";
import Navbar from "./Navbar";
import Carousel from "./shared/Carousel";
import steelImg from "./assets/about.png";
import { DiAndroid } from "react-icons/di";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/img-2.jpg";
import image3 from "./assets/img-3.png";
import logos from "./assets/logos.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

function Home() {
  const card = [1, 2, 3, 4];
  const card1 = [1, 2, 3];
  const card2 = [1, 2, 3, 4, 5];

  return (
    <div id="Home" className="mx-4 md:mx-0">
      <div className="mb-20">
        <Navbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div className=" flex flex-col md:flex-row ">
        {/* image */}
        <div className="w-full md:w-1/2   ">
          <img
            src={steelImg}
            alt="img"
            className=" object-contain md:h-[50rem] "
          />
        </div>

        {/* text section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-6">
          <h1 className="text-slate-500">We Are Steelen Alloys</h1>

          <h1 className="text-red-700 text-4xl font-bold">
            INDIA'S LEADING MANUFACTURER & STOCKIST OF PIPE FITTINGS AND Dairy
            Fittings
          </h1>

          <h1 className="border-b-2 border-pink-600 mt-5 w-20"></h1>

          <h1 className="font-bold mt-10">
            High Strength Steel Pipe With Excellent Corrosion Resistance,
            Internal Stress And Crack Resistance
          </h1>

          <p className="mt-12 text-gray-500">
            It is a great privilege to introduce ourselves as Steelen Alloys
            Manufacturer Pvt.Ltd. an ISO 9001:2008 certified & European Pressure
            Equipment Directive PED -97/23/EC Certified MANUFACTURER & EXPORTERS
            of Pipes, Tubes, Butt Weld Fittings, Forged Fittings, Fasteners &
            Flanges. We do manufacture various ranges of products as per
            National and International Standards of different materials like
            Carbon Steel, Stainless Steel, Alloy Steel material and many more.
          </p>

          <h1 className="text-xl mt-16">
            <span className="text-gray-700">It"s ED Group of company :</span>{" "}
            <span className="text-gray-500">
              {" "}
              Enzoden Engineering and Technologies
            </span>
          </h1>

          <div className="text-center bg-white mt-5">
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

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
        {card.map((index) => (
          <div key={index} className="w-full ">
            <Card className="w-full shadow-2xl border-2 hover:bg-red-600 hover:text-white ">
              <CardHeader>
                {/* <CardTitle>Cards</CardTitle> */}
                <CardDescription className="text-7xl flex justify-center items-center">
                  <DiAndroid />
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h1 className="font-bold">LARGEST INVENTORY</h1>

                <p className="mt-7">
                  We help customers develop their energy resources; bringing
                  world class capability and delivering it locally.
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* about industry section */}
      <div className=" flex flex-col md:flex-row mt-20  ">
        {/* image */}
        <div className="w-full md:w-1/2   ">
          <img
            src={image1}
            alt="img"
            className=" object-cover md:h-[52rem] lg:h-[45rem] "
          />
        </div>

        {/* text section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-6 mx-auto md:mx-20">
          <h1 className="text-slate-500">We Are Steelen Alloys</h1>

          <h1 className="text-red-700 text-4xl font-bold">About Industry</h1>

          <h1 className="border-b-2 border-pink-600 mt-5 w-20"></h1>

          <p className="mt-10 text-gray-500">
            Our corporate office is located in Mumbai, India with 3 warehouse’s
            near Seaport JNPT, catering to domestic and global export markets.
            We stock & supply a comprehensive range of seamless, welded process
            and line pipes ranging from 1/2" to 60" and also Plates, Sheet, Bars
            and Structural Steel like Angle and channels. Our products are fully
            certified and approved by all the major end users & inspection
            agencies.
          </p>

          <h1 className="text-slate-500 mt-20">We Are Steelen Alloys</h1>

          <h1 className="text-red-700 text-4xl font-bold">
            QUALITY OBJECTIVES
          </h1>

          <h1 className="border-b-2 border-pink-600 mt-5 w-20"></h1>

          {/* list */}
          <div className="mt-10 flex flex-col space-y-5">
            <div className="flex gap-4">
              <FaHandPointRight className="mt-1" />{" "}
              <span className="font-bold">PRACTICAL BENEFITS TO CLIENTS</span>
            </div>
            <div className="flex gap-4">
              <FaHandPointRight className="mt-1" />{" "}
              <span className="font-bold">PRACTICAL BENEFITS TO CLIENTS</span>
            </div>
            <div className="flex gap-4">
              <FaHandPointRight className="mt-1" />{" "}
              <span className="font-bold">PRACTICAL BENEFITS TO CLIENTS</span>
            </div>
            <div className="flex gap-4">
              <FaHandPointRight className="mt-1" />{" "}
              <span className="font-bold">PRACTICAL BENEFITS TO CLIENTS</span>
            </div>
            <div className="flex gap-4">
              <FaHandPointRight className="mt-1" />{" "}
              <span className="font-bold">PRACTICAL BENEFITS TO CLIENTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* black section */}
      <div className=" bg-gray-500 w-full pb-20 mt-10">
        <div className="block md:flex justify-around mx-2 md:mx-20 ">
          <div className="">
            <p className="text-gray-400 mt-20">We Are Steelen Alloys</p>
            <h1 className="text-white text-lg md:text-4xl font-bold">
              SUPERIOR QUALITY, GOOD SERVICE, TIMELY DELIVERY AND SINCERE
              CO-OPERATION BEST RATE GUARANTEED OF BELOW PRODUCTS
            </h1>
          </div>

          <div className="mt-10 md:mt-52">
            <h1 className="text-gray-300">
              Specialist in stainless steel, carbon steel pipes for oil and gas
              pipelines Since 2002.
            </h1>
          </div>
        </div>

        <h1 className="border-b-2 border-pink-600 mt-4 w-20 mx-2 md:mx-20"></h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-2 md:mx-20 ">
          {card1.map((index) => (
            <div key={index} className="w-full ">
              <div className="text-center w-full">
                <img src={image2} alt="" className="w-auto" />
                <div className="bg-red-600 p-5">
                  {" "}
                  <h1 className="text-white font-bold text-lg">
                    Dairy Fittings
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* red section */}
      <div className="bg-red-600 text-white text-center py-8 px-4 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0 ">
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

      {/* manufature process */}
      <div className="mt-6  ">
        <h1 className="text-gray-400 text-center">We Are Steelen Alloys</h1>

        <h1 className=" text-lg md:text-4xl text-red-600 font-bold text-center">
          Manufacturing Process
        </h1>

        <div className="flex flex-col justify-center items-center  mt-2">
          <img src={image3} alt="" className="" />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-gray-400 text-center">We Are Steelen Alloys</h1>

        <h1 className=" text-2xl md:text-4xl text-red-700 font-bold text-center">
          Products
        </h1>

        <div className=" flex flex-col md:flex-row mt-5 md:mt-20 mx-2 md:mx-20  ">
          {/* image */}
          <div className="w-full md:w-1/2   ">
            <img src={image1} alt="img" className=" object-cover h-[35rem] " />
          </div>

          {/* text section */}
          <div className="w-full md:w-1/2 mt-4 md:mt-6 mx-auto md:mx-20">
            <h1 className="text-slate-500">We Are Steelen Alloys</h1>

            <h1 className="text-red-700 text-4xl font-bold">
              {" "}
              We Are The Best manufacture
            </h1>

            <h1 className="border-b-2 border-pink-600 mt-5 w-20"></h1>

            <p className="mt-10 text-gray-500">
              Our corporate office is located in Mumbai, India with 3
              warehouse’s near Seaport JNPT, catering to domestic and global
              export markets. We stock & supply a comprehensive range of
              seamless, welded process and line pipes ranging from 1/2" to 60"
              and also Plates, Sheet, Bars and Structural Steel like Angle and
              channels. Our products are fully certified and approved by all the
              major end users & inspection agencies.
            </p>
          </div>
        </div>
      </div>

      {/* gif card */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 my-10 ">
          {card2.map(() => (
            <div className="flex justify-center items-center mt-4 md:mt-2">
              <img src={image2} alt="" className="w-[10rem] h-[8rem]" />
            </div>
          ))}
        </div>
      </div>

      {/* progress bar section */}
      <div className=" bg-blue-800 w-full pb-20 md:mt-10 py-1 md:py-20">
        <div className="mx-2 md:mx-52 ">
          <div className="">
            <p className="text-gray-400 mt-20">Industrial & manufacturing</p>
            <h1 className="text-white text-lg md:text-4xl font-bold">
              We produce positive resultss <br />{" "}
              <span> from ever-growing estates.</span>
            </h1>
          </div>
          <div className="flex flex-col space-y-5 ">
          <div className="lg:auto md:w-auto sm:w-[40rem] mt-5">
s          <div className="flex justify-between mb-2">
                <p className="text-white">Latest Equipemnts Used</p>
                <span className="text-white">95%</span>
              </div>
              <Progress value={95} className=" " />
            </div>

            <div className="lg:auto md:w-auto sm:w-[40rem] mt-5">
              <div className="flex justify-between mb-2">
                <p className="text-white">Factories Production</p>
                <span className="text-white">80%</span>
              </div>
              <Progress value={65} className=" " />
            </div>

            <div className="lg:auto md:w-auto sm:w-[40rem] mt-5">
              <div className="flex justify-between mb-2">
                <p className="text-white">Management & Services</p>
                <span className="text-white">65%</span>
              </div>
              <Progress value={80} className="" />
            </div>
          </div>
        </div>
      </div>

      {/* company logo */}
      <div className="mt-10 mx-0 md:mx-40  ">
        <h1 className="text-gray-400 text-center">We Are Steelen Alloys</h1>

        <h1 className=" text-lg md:text-4xl text-red-600 font-bold text-center">
          Manufacturing Process
        </h1>

        <div className="flex flex-col justify-center items-center hover:border-2 hover:border-red-500 mt-10">
          <img src={logos} alt="" className="" />
        </div>
      </div>

      {/* email form */}
      <div className="bg-red-700 py-8 px-4 flex flex-col lg:flex-row items-center  justify-center mt-10">
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

export default Home;
