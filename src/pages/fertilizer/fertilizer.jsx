import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import uncle from "../../components/img/uncle.png";
import carot from "../../components/img/carot.jpg"
import corn from "../../components/img/corn.jpg"
import tomato from "../../components/img/tomato.jpg"
import potato from "../../components/img/potato.jpg"
import wheat from "../../components/img/wheat.jpg"
import onion from "../../components/img/onion.jpg"
import bellpaper from "../../components/img/bellpaper.jpg"
import tea from "../../components/img/tea.jpg"
import "./fertilizer.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Fertilizer = () => {
  return (
    <>
      <PreHeader />
      <Header />

      <div className="card-outer-container">
        <div className="card-container-fert">
          <div className="card-fert">
            <div className="uncle-1">
              <div className="uncle-1-content">
                <p className="Para-cont">What crop are you planning to grow?</p>
              </div>
              <img src={uncle} alt="" />
            </div>
            <div className="uncle-2">
              <div className="right-card-container">
                <h2>Crop Input</h2>
                <div className="input-box">
                  <input className="input-crop" type="text" />
                  <div className="search-img">Q</div>
                </div>

                <div className="crop-container">
                <div className="crop-card">
                        <img src={carot} alt="" />
                        <button id="Carot" className="crop-txt">Carot</button>
                    </div>
                    <div className="crop-card">
                        <img src={corn} alt="" />
                        <button id="Corn" className="crop-txt">Corn</button>
                    </div>
                    <div className="crop-card">
                        <img src={tomato} alt="" />
                        <button id="Tomato" className="crop-txt">Tomato</button>
                    </div>
                    <div className="crop-card">
                        <img src={potato} alt="" />
                        <button id="Potato" className="crop-txt">Potato</button>
                    </div>
                    <div className="crop-card">
                        <img src={wheat} alt="" />
                        <button id="Wheat" className="crop-txt">Wheat</button>
                    </div>
                    <div className="crop-card">
                        <img src={onion} alt="" />
                        <button id="Onion" className="crop-txt">Onion</button>
                    </div>
                    <div className="crop-card">
                        <img src={bellpaper} alt="" />
                        <button id="Bellpaper" className="crop-txt">Bellpaper</button>
                    </div>
                    <div className="crop-card">
                        <img src={tea} alt="" />
                        <button id="Tea" className="crop-txt">Tea</button>
                    </div>

                </div>
                  <Link to="/fertilizer/npk-input">
                <button className="btn-fert">
                  Submit
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fertilizer;
