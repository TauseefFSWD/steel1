// Service page developed by Tauseef
import React from "react";
import bg from "../src/assets/bg.jpg";
import Navbar from "./Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
function Techinfo() {
  const tablemap = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
          <h1 className="text-6xl text-white font-bold uppercase">
            CHEMICAL COMPOSITION
          </h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} Chemical Composition
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row bg-white pt-5">
        <div className="lg:w-1/2">
          <div className="  shadow-xl border-2 p-4 mt-14">
            <h1 className="text-2xl font-bold text-red-700 mt-10">
              {" "}
              Chemical Composition
            </h1>
            <div className="mt-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tablemap.map(() => {
                    return (
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
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

export default Techinfo;
