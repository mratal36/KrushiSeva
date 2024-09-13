import React from 'react';
import { Link } from 'react-router-dom';
import "./soil.css";
import cloud from "../../components/img/cloud.png";




function soil() {
  return (
    <>
    <div className="cardContainer">
      <div className="card">
        <div className="right"></div>

        <div className="left">
          <div className="box-1">
            <p className="text"> Hello there! Have you had your soil tested recently?</p>
          <div className="btn-container">
            <Link to="/home" className="btn">
            <button>Yes</button>
            </Link>

            <Link to="https://soilhealth.dac.gov.in/home" target = "_blank" className="btn">
            <button>No</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default soil
