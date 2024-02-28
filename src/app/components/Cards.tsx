import React from "react";

const Cards = () => {
  // var size = 3;
  const number = ["1", "2", "3"];
  return (
    <div  className="flex space-x-2">
      {number.map((card) => (
        <div key={card} className=" bg-white  w-1/2 rounded-lg p-4">
          <div className="flex justify-center">
            <img className=" w-40 my-8" src="image.jpg" alt="..." />
          </div>
          <ul className="flex space-x-1 mt-10 text-bluetext">
            <li className="rounded-md bg-lightgray px-2 py-1 ">20% Off</li>
            <li className="rounded-md bg-lightgray px-2 py-1 ">Limited time </li>
          </ul>

          <div className="p-1">
            <h1 className="flex justify-center text-grayicon font-bold">Webbuilder 1</h1>
            <p className="text-grayicon">Computer Modern clasic with wix support</p>

            {/* <h5 className="flex justify-center font-large text-sm text-zinc-400 p-3 w-28 my-2 bg-zinc-100 rounded-lg">
              Branding
            </h5> */}

            <ul className="flex items-center space-x-4 mb-4">
                <li className="text-graysign text-xl">$39.96</li>
                <li className="text-pricegray text-sm pt-4">$49.96</li>
                <li className="text-lightred text-sm pt-4">(20% Off)</li>
            </ul>

            <div className="flex flex-row justify-between">
              <button className="p-3 w-full rounded-lg bg-btnblue text-white">
                View Deal
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
