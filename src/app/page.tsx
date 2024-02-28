import Link from "next/link";
import { ChevronDown, CheckCircle2, Info, Search } from "lucide-react";
import Signup from "./components/Signup";
import Items from "./components/Items";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <div className=" main">
      <div className="pt-5">
        <h1 className="text-5xl py-3 text-grayhead">Best Website builders in the US </h1>
        <div className="flex border-y-2 text-sm border-grayline justify-between py-3 text-graytext">
          <div className="flex space-x-5 ">
            <CheckCircle2 />
            <h6>Last Updated - February 22, 2020</h6>
            <Info />
            <h6>Advertising Disclosure</h6>
          </div>

          <div className="flex justify-end">
            Top Relevant <ChevronDown />
          </div>
        </div>
      </div>
      <div className="flex text-sm py-3 text-graytext">
        <ul className="flex space-x-20 ">
          <li className="rounded-lg p-2">Tools</li>
          <li className="rounded-lg p-2">AWS Builder</li>
          <li className="rounded-lg p-2">Start Build</li>
          <li className="rounded-lg p-2">Build Supplies</li>
          <li className="rounded-lg p-2">Build Supplies</li>
          <li className="rounded-lg p-2">BlueHosting</li>
        </ul>
      </div>
      <div className="text-sm py-3 text-graytext">
        <ul className="flex space-x-5 ">
          <li>Home</li>
          <li>{">"}</li>
          <li>Hosting for all</li>
          <li>{">"}</li>
          <li>Hosting</li>
          <li>{">"}</li>
          <li>Hosting6</li>
          <li>{">"}</li>
          <li>Hosting5</li>
        </ul>
      </div>

      <Items/>
      <h1 className="text-4xl mt-32 mb-8 text-grayhead">Related deals you might like for</h1>
      <Cards/>
      <Signup/>
      {/* <Link href="/dashboard" className="flex flex-col hover:underline">Dashboard</Link> */}
    </div>
  );
}
