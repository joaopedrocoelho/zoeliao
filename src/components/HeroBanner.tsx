import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "variable",
  subsets: ["latin"],
});

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[200px]">🧝‍♀️</span>
      <div className="text-center w-full">
        <h1
          className={`${raleway.className} font-light text-5xl w-full text-gray-900 sm:text-6xl`}
        >
          Data to enrich your online business
        </h1>
        <p
          className={`${raleway.className} font-normal mt-6 text-lg leading-8 text-gray-600`}
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div
          className={` ${raleway.className} mt-10 flex items-center justify-center gap-x-6`}
        >
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-medium leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
