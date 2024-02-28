import React from "react";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray1 ">
      <div className="px-72 pb-40 pt-10 w-full text-footergray">
        <div className="grid grid-cols-3 gap-8 px-4 py-6 lg:py-8 ">
          <div>
            <h2 className="mb-4 uppercase text-white">
            Categories
            </h2>
            <ul className=" text-gray-400 text-sm">
              <li className="mb-5">
                <a href="#" className=" hover:underline">
                Web Builder
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Hosting
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Data Center
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Robotic-Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 uppercase text-white">
            Contact
            </h2>
            <ul className="text-gray-400 text-sm">
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Privacy Policy
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Terms Of Services
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                Categories
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="hover:underline">
                About
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex h-8 pt-8 text-graynav ">
            <button className="hover:underline " type="button">
             United States 
            </button>
            <ChevronDown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
