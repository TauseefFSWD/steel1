// Service page developed by Tauseef
import React from "react";
import bg from "../src/assets/bg.jpg";
import Navbar from "./Navbar";
import pipe from "./assets/pipe.jpg";
import pipe2 from "./assets/pipe2.jpg";
import pipered from "./assets/pipered.jpg";
import pipe3 from "./assets/pipe3.jpg";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Products() {
  return (
    <div id="Services">
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
          <h1 className="text-6xl text-white font-bold uppercase">PIPES & TUBES</h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} products
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white pt-5">
        <div className="lg:w-1/2">
          <div className="">
            <div className="w-full mt-16">
              <div className=" w-full">
                <img src={pipe} alt="" className="w-auto " />
              </div>

              <div className="border-2 shadow-xl mt-2 p-10">
                <h1 className=" text-lg md:text-3xl  text-red-800 font-bold">
                  {" "}
                  What is the difference between Pipe and Tube ?
                </h1>

                <p className="mt-2">
                  People use the words pipe and tube interchangeably, and they
                  think that both are the same. However, there are significant
                  differences between pipe and tube. The short answer is: A PIPE
                  is a round tubular to distribute fluids and gases, designated
                  by a nominal pipe size (NPS or DN) that represents a rough
                  indication of the pipe conveyance capacity; a TUBE is a round,
                  rectangular, squared or oval hollow section measured by
                  outside diameter (OD) and wall thickness (WT), expressed in
                  inches or millimeters.
                </p>
              </div>
            </div>

            <div className="w-full mt-16">
              <div className=" w-full">
                <img src={pipe2} alt="" className="w-auto md:w-[60rem] h-80" />
              </div>

              <div className="border-2 shadow-xl mt-2 p-10">
                <h1 className=" text-md md:text-3xl  text-red-800 font-bold">
                  {" "}
                  Stainless Steel Pipes & Tubes Specifications
                </h1>

                <p className="mt-2">
                  People use the words pipe and tube interchangeably, and they
                  think that both are the same. However, there are significant
                  differences between pipe and tube. The short answer is: A PIPE
                  is a round tubular to distribute fluids and gases, designated
                  by a nominal pipe size (NPS or DN) that represents a rough
                  indication of the pipe conveyance capacity; a TUBE is a round,
                  rectangular, squared or oval hollow section measured by
                  outside diameter (OD) and wall thickness (WT), expressed in
                  inches or millimeters.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <img src={pipered} alt="" className=" w-auto md:w-[60rem]" />
            </div>

            <div className="w-full mt-20">
              <div className=" w-full">
                <img src={pipe3} alt="" className="w-auto md:w-[60rem] h-80" />
              </div>

              <div className="border-2 shadow-xl mt-2 p-10">
                <h1 className=" text-md md:text-3xl  text-red-800 font-bold">
                  {" "}
                  Stainless Steel Pipes & Tubes Specifications
                </h1>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                  <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A335 / A213 GR P11, P12, P22, P5, P9, P91, T11, T12,
                    T22, T5, T9, T91.
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A789, A790, A928 GR 2205 (S31803 / S32205), SMO254
                    (S32154),
                    <br />
                    2507 (S32750 / S32760), Ferralium 255 (S32550), SMO 654
                    (S32654).
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A789, A790, A928 GR 2205 (S31803 / S32205), SMO254
                    (S32154),
                    <br />
                    2507 (S32750 / S32760), Ferralium 255 (S32550), SMO 654
                    (S32654).
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A335 / A213 GR P11, P12, P22, P5, P9, P91, T11, T12,
                    T22, T5, T9, T91.
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A789, A790, A928 GR 2205 (S31803 / S32205), SMO254
                    (S32154),
                    <br />
                    2507 (S32750 / S32760), Ferralium 255 (S32550), SMO 654
                    (S32654).
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A335 / A213 GR P11, P12, P22, P5, P9, P91, T11, T12,
                    T22, T5, T9, T91.
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A789, A790, A928 GR 2205 (S31803 / S32205), SMO254
                    (S32154),
                    <br />
                    2507 (S32750 / S32760), Ferralium 255 (S32550), SMO 654
                    (S32654).
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-xl flex gap-2">
                    {" "}
                    <FaHandPointRight className="mt-1"/> <span> Alloy Steel Pipes & Tubes Specifications</span>
                  </h1>

                  <p>
                    {" "}
                    ASTM A335 / A213 GR P11, P12, P22, P5, P9, P91, T11, T12,
                    T22, T5, T9, T91.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* accordian */}
        <div className="lg:w-1/2 flex flex-col  p-8">
          <h1 className="text-bold text-center text-2xl">Our Products</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="my-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="bg-red-600 mt-10">
            <CardHeader>
              <CardTitle className="text-center text-white mt-  ">
                Got any Questions ?
              </CardTitle>
              <CardTitle className="text-center text-white   ">
                Call us Today !
              </CardTitle>
              <CardTitle className="text-center text-white  mt-5 mb-5 pt-5 text-3xl">
                +91789456123
              </CardTitle>
              <CardDescription className="text-center text-white">
                <a href="/">info@tsl.co.in</a>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Products;
