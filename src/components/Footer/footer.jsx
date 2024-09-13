import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import footerBg from "../img/footerBg.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#006401] inPhone py-20 text-[#FEA500]">
      <div className="flex justify-center items-center">


        {/* section-1 */}
        <div className="flex-1 border-r-2 border-black-600">
          <div>
          <Link to="/" className=" h-40 w-64  flex justify-center items-center mx-8 px-5 cursor-pointer">
            <img src={logo} className="footerLogo" alt="" />
            <div className="ml-4">
              <h3 className="text-2xl text-white font-bold mt-4">KrushiSeva</h3>
              <p className="text-md font-normal text-white mt-2">
                WeAreFarmerVoice
              </p>
            </div>
            </Link>
          </div>
        </div>

        {/* section-2 */}


        <div className="h-40 w-56 flex-1 justify-center px-16 border-r-2 border-black-600 items-center">
          <div className="flex flex-col gap-5">
            <ul className="list-none mr-24">
              <li
                className="text-lg text-white font-bold cursor-pointer"
              >
              <Link to="/home" className="text-lg text-white font-bold cursor-pointer">
              Home
              </Link>
              </li>
            </ul>
            <ul>
              <li>
                 <Link to = "/fertilizer/crop-input"   className="text-lg text-white font-bold cursor-pointer">
                 Fertilizer Recommendation
                 </Link>
              </li>

            </ul>
            <ul>
              <li>
                 <Link to = "/crop"   className="text-lg text-white font-bold cursor-pointer">
                 Crop Recommendation
                 </Link>
              </li>
            </ul>
          </div>
        </div>

                {/* section-3 */}
        <div className=" h-40 flex-1 px-16 border-r-2 border-black-600">
          <h1 className="text-xl ml-6 text-white font-bold w-56">
            Give us a follow on social media
          </h1>
          <div className="flex my-5 justify-left">
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector1}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector2}
              alt=""
            />
          </div>
          <p className="text-lg ml-6 text-white">
            Made by : <strong>ZestCoderzz</strong>
          </p>
        </div>
        <div className="flex-1 flex mr-6">
          <img src={footerBg} className="footerBgImg" alt="" />
          <h1 className="text-xl text-white font-bold mt-6">
            Ministry of agriculture and farmer's welfare
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
