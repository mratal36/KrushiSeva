import React from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import uncle from "../../components/img/uncle.png";
import { Link } from "react-router-dom";

function Cropclimateparams() {
  return (
    <>
    <PreHeader />
    <Header />

    <div className="card-outer-container">
        <div className="card-container-crop">
          <div className="card-crop">
            <div className="uncle-1">
              <div className="uncle-1-content">
                <p className="Para-cont">
                 Enter Your Climatic condition
                </p>
              </div>
              <img src={uncle} alt="" />
            </div>
            <div className="uncle-2">
              <div className="right-card-container">
                <h2>Enter value of your Climatic Conditions</h2>

                <div className="input-area">
                <label htmlFor="Area">Temperature</label>

                <div className="area-input-container">
                  <input
                    type="number"
                    id="Area"
                    className="area-input"
                    placeholder="enter value of Temperature"
                  />
                  <select name="areaUnit" id="">
                    <option value="areaUnit">Celcius</option>
                    <option value="areaUnit">Farenheit</option>
                    <option value="areaUnit">Kelvin</option>
                  </select>
                </div>

                 <label htmlFor="Area">Rainfall</label>

                <div className="area-input-soil-container">
                  <input
                    type="number"
                    id="Area"
                    className="area-input"
                    placeholder="enter value of Rainfall in mm"
                  />
                </div>

                 <label htmlFor="Area">Humidity</label>

                <div className="area-input-soil-container">
                  <input
                    type="number"
                    id="Area"
                    className="area-input"
                    placeholder="enter value of Humidity in percentage"
                  />
                </div>

                
              </div>

                <Link to="/crop/recommend-crop">
                  <button className="btn-crop">Submit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Cropclimateparams
