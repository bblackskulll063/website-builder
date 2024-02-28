import React from "react";
import { ChevronDown, Gem, Info,Check, Trophy } from "lucide-react";

const items = () => {
  return (
    <div className="my-8">
      <div className="rounded-lg my-8 relative">
        <div className="absolute -top-5 -left-2 bg-orange-500 text-white flex justify-center items-center rounded-r-lg py-2 pr-2">
          <Trophy className="mx-2 w-5" />
          Best Choice
        </div>
        <div className="absolute top-10 -left-6 text-xl text-grayicon flex justify-center items-center border rounded-full w-12 h-12">
          1
        </div>
        <div className="flex">
          <div className="flex-none w-3/12 p-16">
            <img src="/image.jpg" alt="..." />
            <p className="flex justify-center text-sm text-grayicon pt-3">
              Builder 1
            </p>
          </div>

          <div className=" grow text-graytext ">
            <p className="pt-5 ">
              <span className="font-bold">
                WixPro 72-Inch Responsive Website Builder-
              </span>{" "}
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h3 className="font-bold text-grayhead mt-2">Main highlights</h3>
            <p className="p-3">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <h2 className="flex mt-2 text-btnblue">
              Show more <ChevronDown />
            </h2>
          </div>

          <div className="relative w-3/12 ">
            <div className="mx-12 bg-lightblue rounded-b-xl px-6 py-4 space-y-1">
              {/* <Info className="flex justify-end w-3 text-grayicon"/> */}
              <h1 className="flex justify-center text-bluetext text-3xl">
                9.8
              </h1>
              <h3 className="flex justify-center text-bluetext">Exceptional</h3>
              <p className="flex justify-center text-xs">
                &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;
              </p>
            </div>
            <button className=" absolute bottom-0 p-3 w-full rounded-xl bg-btnblue text-white">
              View
            </button>
          </div>
        </div>
      </div>

      {/* 2nd items  */}
      <div className="rounded-lg my-8 relative">
        <div className="absolute -top-5 -left-2 bg-orange-500 text-white flex justify-center items-center rounded-r-lg py-2  pr-2">
          <Gem className="mx-2 w-5" />
          Best Value
        </div>
        <div className="absolute top-10 -left-6 text-xl text-grayicon flex justify-center items-center border rounded-full w-12 h-12">
          2
        </div>
        <div className="flex">
          <div className="flex-none w-3/12 p-16">
            <img src="/image.jpg" alt="..." />
            <p className="flex justify-center text-sm text-grayicon pt-3">
              Builder
            </p>
          </div>

          <div className=" grow text-graytext ">
            <p className="pt-5 ">
              <span className="font-bold">
                SiteCraft 68-Inch Ultimate Web Design Studio-
              </span>{" "}
              Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
              Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <h3 className="font-bold text-grayhead mt-2">Main highlights</h3>
            <p className="p-3">
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <h2 className="flex mt-2 text-btnblue">
              Show more <ChevronDown />
            </h2>
          </div>

          <div className="relative w-3/12 ">
            <div className="mx-12 bg-lightblue rounded-b-xl px-6 py-4 space-y-1">
              {/* <Info className="flex justify-end w-3 text-grayicon"/> */}
              <h1 className="flex justify-center text-bluetext text-3xl">
                9.5
              </h1>
              <h3 className="flex justify-center text-bluetext">Excellent</h3>
              <p className="flex justify-center text-xs">
                &#x2B50;&#x2B50;&#x2B50;&#x2B50;
              </p>
            </div>
            <button className=" absolute bottom-0 p-3 w-full rounded-xl bg-btnblue text-white">
              View
            </button>
          </div>
        </div>
      </div>

      {/* 3rd item  */}
      <div className="rounded-lg my-8 relative">
        <div className="absolute top-10 -left-6 text-xl text-grayicon flex justify-center items-center border rounded-full w-12 h-12">
          3
        </div>
        <div className="flex">
          <div className="flex-none w-3/12 p-16">
            <img src="/image.jpg" alt="..." />
            <p className="flex justify-center text-sm text-grayicon pt-3">
              Builder 1
            </p>
          </div>

          <div className=" grow text-graytext ">
            <p className="pt-5 ">
              <span className="font-bold">
                WixPro 72-Inch Responsive Website Builder-
              </span>{" "}
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h3 className="font-bold text-grayhead mt-2">Main highlights</h3>
            <p className="p-3">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <h2 className="flex mt-2 text-btnblue">
              Show more <ChevronDown />
            </h2>
          </div>

          <div className="relative w-3/12 ">
            <div className="mx-12 bg-lightblue rounded-b-xl px-6 py-4 space-y-1">
              {/* <Info className="flex justify-end w-3 text-grayicon"/> */}
              <h1 className="flex justify-center text-bluetext text-3xl">
                9.3
              </h1>
              <h3 className="flex justify-center text-bluetext">Exceptional</h3>
              <p className="flex justify-center text-xs">
                &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;
              </p>
            </div>
            <button className=" absolute bottom-0 p-3 w-full rounded-xl bg-btnblue text-white">
              View
            </button>
          </div>
        </div>
      </div>

      {/* 4th item  */}
      <div className="rounded-lg my-8 relative">
        <div className="absolute top-10 -left-6 text-xl text-grayicon flex justify-center items-center border rounded-full w-12 h-12">
          4
        </div>
        <div className="flex">
          <div className="flex-none w-3/12 p-16 items-center">
            <img src="/image.jpg" alt="..." />
            <p className="flex justify-center text-sm text-grayicon pt-3">
              CDK
            </p>
          </div>

          <div className=" grow text-graytext ">
            <p className="pt-5 ">
              <span className="font-bold">CDK Resposive Builder:</span> An
              extensive library of widgets and apps, and detailed step-by-step
              guides
            </p>

            <div className="flex text-lightbluetext">
              <p className="rounded-md bg-lightgray px-2 py-1 ">26% Off</p>
            </div>
            <h3 className="font-bold text-grayhead my-2">Main highlights</h3>
            <ul className="rounded-xl bg-lightyellow mx-4 p-3 space-y-4">
                <li><span className="text-btnblue bg-white rounded-md px-2 py-1 mr-2 ">9.9</span>Building Responsive</li>
                <li><span className="text-btnblue bg-white rounded-md px-2 py-1 mr-2">8.9</span>Cool</li>
                <li><span className="text-btnblue bg-white rounded-md px-2 py-1 mr-2">8.9</span>Docs</li>
            </ul>

            <p className="mt-4 text-grayhead ">Why we love it</p>
            <ul className="text-graytext mt-2 space-y-2">
                <li className="flex"><Check className="rounded-full p-1 mr-2 text-tickdarkblue bg-ticklightblue"/>Documentation</li>
                <li className="flex"><Check className="rounded-full p-1 mr-2 text-tickdarkblue bg-ticklightblue"/>Easy Use</li>
                <li className="flex"><Check className="rounded-full p-1 mr-2 text-tickdarkblue bg-ticklightblue"/>Out of box</li>
            </ul>

            <h2 className="flex mt-2 text-btnblue">
              Show more <ChevronDown />
            </h2>
          </div>

          <div className="relative w-4/12 ">
            <div className="mx-12 bg-lightblue rounded-b-xl px-6 py-4 space-y-1">
              {/* <Info className="flex justify-end w-3 text-grayicon"/> */}
              <h1 className="flex justify-center text-bluetext text-3xl">
                9.1
              </h1>
              <h3 className="flex justify-center text-bluetext">Very Good</h3>
              <p className="flex justify-center text-xs">
                &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;
              </p>
            </div>
            <button className=" absolute bottom-0 p-3 w-full rounded-xl bg-btnblue text-white">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default items;
