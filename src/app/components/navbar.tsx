import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray1 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-72 px-28 py-4">
          <div className="flex ml-24">
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="text-gray-500"/>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-white"
              />
            </div>
          </div>
          <div
            className="items-center justify-between w-full md:flex md:w-auto "
            id="navbar-search"
          >
            {/* <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div> */}
            <ul className="flex  flex-end justify-center p-4 md:p-0 md:space-x-20 text-graynav">
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Website Builders</a>
              </li>
              <li>
                <a href="#">Today's deals</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
