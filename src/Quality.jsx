// Quality page developed by Tauseef
import React from "react";
import bg from "../src/assets/bg.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
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

function Quality() {
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
            Quality Policy
          </h1>
          <div className="text-white mt-2">
            <Link to="/" className="text-red-500 hover:text-white">
              Home
            </Link>{" "}
            &nbsp;{" >"} Quality Policy
          </div>
        </div>
      </div>
      <div className="container mx-auto  py-16 flex flex-col lg:flex-row bg-white  ">
        <div className="lg:w-1/2 border-2 shadow-xl  p-10 ">
          <div className="text-3xl text-bold text-red-600  pt-3 pb-8">
            <h1>Quality Policy</h1>
          </div>
          <div className="text-slate-500 mb-4">
            <p>
              <b className="text-bold text-slate-600 ">Quality</b> is our prime
              concern. We are able to maintain high quality standards through
              our committed personnel and sound infrastructure. We ensure that
              finest quality material is used for our products. For ensure the
              quality of each material, we are providing Materials Test
              Certificate along with supply. Our team of experts maintain a
              vigil on the quality of the products. Every single piece is
              attached with test certificates and reports. We are continually
              improving our quality to serve our clients better.
            </p>
          </div>
          <div className="text-slate-500 ">
            <p>
              <b className="text-bold text-slate-600 mt-2 mb-4">
                {" "}
                Quality Objectives :
              </b>
              <br />
              We consider three elements to be essential for the overall quality
              of the company services :
            </p>
          </div>

          <div className="text-slate-500 mb-4 mt-2">
            <p>Independence & Objectivity.</p>
            <p>Technical & Scientific Quality.</p>
            <p>Practical Benefits to Clients.</p>
          </div>
          <div className="text-slate-500 mb-4">
            <b className="text-bold text-slate-600 mt-2 mb-4">
              {" "}
              Our Excellence:
            </b>
            <br />
            Quality is our prime aim. We are able to maintain high quality
            standards through our committed personnel and sound infrastructure.
            We ensure that finest quality material is used for our products. For
            ensure the quality of each material, we are providing Materials Test
            Certificate along with supply. Our teams of experts maintain a vigil
            on the quality of the products. Every single piece is attached with
            test certificates and reports. We are continually improving our
            quality to serve our clients better.
          </div>
          <div className="text-slate-500 mb-4">
            <b className="text-bold text-slate-600"> Quality Control :</b>
            <br />
            We exercise stringent quality control measures for ensuring the
            accurate dimensions and mechanical properties of our products. Our
            quality assurance system assures each product to pass through
            following processes and quality systems :
          </div>
          <div className="text-slate-500 mb-4">
            Material Control System <br /> Machining and Dimensional Control{" "}
            <br />
            Process Control System <br /> Certification and Supplementary Test{" "}
            <br />
            Finishing and Marketing <br /> The impeccable quality standards of
            our product range as well as services have contributed immensely to
            the success of our company.
          </div>
          <div className="text-slate-500 mb-4">
            <p>
              <b className="text-bold text-slate-600 mt-2 mb-4">
                {" "}
                Quality Assurance : <br />{" "}
              </b>{" "}
              The quality assurance system is guided by principles that support
              our unique working culture which incorporates respect, self
              management, open communication and creativity.
            </p>
          </div>
          <div className="text-slate-500 mb-4">
            <b className="text-bold text-slate-600 mt-2 mb-4">
              Our Quality Standards :{" "}
            </b>{" "}
            <br /> The bitterness of poor quality remains long after low pricing
            is forgotten. So, we follow strong measure of quality checking.
            Understanding Customers requirement and ensuring to supply as per
            these requirements is realized with the help of Quality Assurance
            and Quality Control at Steelen Alloys Industries. Across the entire
            business chain of supplies, operations and marketing appropriate
            quality assurance systems are in place to ensure correctness at each
            step of the cycle. <br /> In our philosophy, quality is not only the
            durability and defect free nature of product but its utility and
            applicability to satisfy the sole purpose for which it was bought.
            Thus, we are committed to produce products, which can satisfy
            different requirements and purposes. We have adopted stringent
            quality control measures to ensure superior quality and zero defects
            products.
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

export default Quality;
