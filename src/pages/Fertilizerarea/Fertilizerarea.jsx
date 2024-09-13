import React from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import uncle from "../../components/img/uncle.png";
import "./Fertilizerarea.css";
import { Link } from "react-router-dom";

import "./Fertilizerarea.css"

function Fertilizerarea() {
  return (
    <>
    <PreHeader />
    <Header />

    <div className="card-outer-container">
        <div className="card-container-fert">
          <div className="card-fert">
            <div className="uncle-1">
              <div className="uncle-1-content">
                <p className="Para-cont">
                 Enter Area State and Soil Type 
                </p>
              </div>
              <img src={uncle} alt="" />
            </div>
            <div className="uncle-2">
              <div className="right-card-container">
                <h2>Enter value of Area State and Soil Type</h2>

                <div className="input-area">
                <label htmlFor="Area">Area</label>

                <div className="area-input-container">
                  <input
                    type="number"
                    id="Area"
                    className="area-input"
                    placeholder="enter value of area"
                  />
                  <select name="areaUnit" id="">
                    <option value="areaUnit">Acres</option>
                    <option value="areaUnit">Hectare</option>
                    <option value="areaUnit">HectareSq.Ft.</option>
                    <option value="areaUnit">Sq. Meters</option>
                    <option value="areaUnit">Sq. Yards</option>
                    <option value="areaUnit">Sq. Kilometer</option>
                    <option value="areaUnit">Sq. inch</option>
                    <option value="areaUnit">Sq. ft</option>
                  </select>
                </div>

                <label htmlFor="State">State</label>

                <div className="area-input-container-2">
                  <select name="State" id="">
                    <option value="State">Gujarat</option>
                    <option value="State">Punjab</option>
                    <option value="State">West Bengal</option>
                    <option value="State">Rajasthan</option>
                    <option value="State">Madhya Pradesh</option>
                    <option value="State">Himachal Pradesh</option>
                    <option value="State">Haryana</option>
                    <option value="State">Assam</option>
                    <option value="State">Tamil Nadu</option>
                    <option value="State">Karnataka</option>
                    <option value="State">Kerela</option>
                    <option value="State">Maharastra</option>
                    <option value="State">Uttar Pardesh</option>
                    <option value="State">Odisha</option>
                    <option value="State">Bihar</option>
                  </select>
                </div>

                <label htmlFor="Soil">Soil Type</label>

                <div className="area-input-container-2">
                  <select name="Soil" id="">
                    <option value="Soil">Loamy</option>
                    <option value="Soil">Sandy</option>
                    <option value="Soil">Clayey</option>
                    <option value="Soil">Red</option>
                    <option value="Soil">Black</option>
                  </select>
                </div>
              </div>

                <Link to="/fertilizer/recommend">
                  <button className="btn-fert">Submit</button>
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

export default Fertilizerarea
