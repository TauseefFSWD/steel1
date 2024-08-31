// Service page developed by Tauseef
import React from "react";
import bg from "../src/assets/bg.jpg";
import Navbar from "./Navbar";
import pipes from "../src/assets/pipes.jpg";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const card1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function Services() {
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
          <h1 className="text-6xl text-white font-bold uppercase">Services</h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} Services
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white pt-5">
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-2 md:mx-20 ">
            {card1.map((index) => (
              <div key={index} className="w-full ">
                <div className="text-center w-full">
                  <img src={pipes} alt="" className="w-auto " />
                  <div className=" ">
                    {" "}
                    <h1 className="text-red-600  mt-5 font-bold ">
                      Dairy Fittings
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Services;
