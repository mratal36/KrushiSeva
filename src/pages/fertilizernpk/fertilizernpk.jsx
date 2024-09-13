import React from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import uncle from "../../components/img/uncle.png";
import "./fertilizernpk.css";
import { Link } from "react-router-dom";

function fertilizernpk() {
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
                  Great! Could you share the N P and K values from the test?
                </p>
              </div>
              <img src={uncle} alt="" />
            </div>
            <div className="uncle-2">
              <div className="right-card-container">
                <h2>Enter value of N P K</h2>

                <div className="input-npk">

                  <div className="input-npk-container">

                  <label htmlFor="N">Nitrogen</label>
                  <input className="npk-input"
                    type="Number"
                    placeholder="Enter the value of Nitrogen"
                    />
                    </div>
                  <div className="input-npk-container">
                    
                  <label htmlFor="N">Phosphorus</label>
                  <input className="npk-input"
                    type="Number"
                    placeholder="Enter the value of Phosphorus"
                    />
                    </div>
                  <div className="input-npk-container">

                  <label htmlFor="N">Potassium</label>
                  <input className="npk-input"
                    type="Number"
                    placeholder="Enter the value of Potassium"
                    />
                    </div>
                </div>

                <Link to="/fertilizer/area-input">
                  <button className="btn-fert">Submit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default fertilizernpk;