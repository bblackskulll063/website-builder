import React from "react";
import { Search } from "lucide-react";

const Signup = () => {
  return (
    <div className="flex justify-between mt-16 py-12">
      <h1 className="text-3xl w-5/12 pl-10 text-graysign">
        Sign up and get exclusive special deals
      </h1>
      <form className="flex">
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-zinc-300">
            {/* <Search /> */}
          </div>
          <input
            type="search"
            className="block w-80 p-4 ps-10 inner-content text-gray-900 rounded-l-lg bg-white-50 "
          />
        </div>
        <button className="bg-btnblue w-28 h-14 rounded-r-xl text-white text-sm">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
