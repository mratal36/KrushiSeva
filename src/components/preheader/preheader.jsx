import React from "react";
import "./preheader.css";
import footerBg from "../img/footerBg.png";
import { useEffect } from "react";
import TranslateComponent from "../TranslateComponent/TranslateComponent";

const PreHeader = () => {
  return (
    <>
      <div className="bg-[#006401] px-6 py-2 md:inline-block hidden w-full up-nav">
        <div className="flex justify-between items-center ml-6">
          <div className="flex justify-center items-center">
            <img src={footerBg} className="logo" />
            <p className="font-semibold text-white text-xs sm:text-sm ml-1">
              Ministry of agriculture and farmer's welfare
            </p>
          </div>
          <TranslateComponent />
        </div>
      </div>
    </>
  );
};

export default PreHeader;
