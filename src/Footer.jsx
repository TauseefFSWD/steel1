//footer page developed by tauseef
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <p className="text-sm mb-4">
            We Steelen Alloys Manufacturer are Fastest growing International
            Suppliers & Exporters of Industrial Raw material to world renowned
            companies in India & abroad, providing them with world class quality
            material and service.
          </p>
          <button className="border border-gray-700 px-4 py-2 mt-2 text-sm hover:bg-gray-800">
            About Company
          </button>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2">
            <li>Pipes & Tubes</li>
            <li>Buttweld Fittings</li>
            <li>Forged Fittings</li>
            <li>Flanges</li>
            <li>Dairy Fittings</li>
            <li>Sheets & Plates</li>
            <li>Round Bars</li>
            <li>Fasteners</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tech Info</h3>
          <ul className="space-y-2">
            <li>Chemical Composition</li>
            <li>Mechanical Composition</li>
            <li>Pipe Data PIPE DATA</li>
            <li>Flanges Dimensions</li>
            <li>Forged Fittings</li>
            <li>Stainless Steel Pipe Dimension ANSI B.36.19</li>
            <li>Chemical Composition Of Stainless Steel</li>
            <li>Seamless Steel Pipe & Tubes</li>
            <li>Carbon Steel & Alloys Steel</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-10 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>📞 +91 9321426451</li>
            <li>📞 +91 7077727752</li>
            <li>
              📍 Plot No. Pap/J5 8B, J Block, Indryani Nagar, Road MIDC,
              Bhosari, Pune 411026.
            </li>
            <li>📧 info@steelen.co.in</li>
            <li>🌐 www.steelen.co.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-4 text-center">
        <p className="text-sm">
          &copy; 2022 Steelen Alloys Manufacturer Pvt.Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
