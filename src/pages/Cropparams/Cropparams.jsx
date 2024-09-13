import React from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import uncle from "../../components/img/uncle.png";
import "../crop/crop.css";
import "./cropparams.css";
import { Link } from "react-router-dom";
function Cropparams() {
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
                 Enter Ph State and Soil Type 
                </p>
              </div>
              <img src={uncle} alt="" />
            </div>
            <div className="uncle-2">
              <div className="right-card-container">
                <h2>Enter value of Ph State and Soil Type</h2>

                <div className="input-area">
                <label htmlFor="Area">Soil Ph</label>

                <div className="area-input-soil-container">
                  <input
                    type="number"
                    id="Area"
                    className="area-input"
                    placeholder="enter value of Ph"
                  />
                </div>

                <label htmlFor="Area">State</label>

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

                <Link to="/crop/climate-params">
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

export default Cropparams
