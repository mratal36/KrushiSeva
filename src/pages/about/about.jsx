import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import PreHeader from "../../components/preheader/preheader";
import "./about.css";


function about() {

  return (
    <>
      <PreHeader />
      <Header />

      <div className="back">
        <div className="about-container">
          <div class="abt-container">
            <p>About</p>
          </div>
          <div className="wrapper"></div>
        </div>

        <div className="abt-content">
          <h1 className="head">Our Mission</h1>

          <ul className="mission-list">
            <li>
              {" "}
              To empower farmers with the tools and resources they need to make
              informed decisions about fertilizer usage.
            </li>
            <li>
              {" "}
              To promote sustainable agriculture practices and improve crop
              yields.
            </li>
            <li> To enhance farmers' income and livelihoods.</li>
          </ul>
        </div>
      </div>

        <div  className="abt-content-2">
          <div className="mock-cards">
            <div className="que-image">
              <div className="image-1"></div>
              <p className="que-text">Vision</p>
            </div>
            <div className="que-content">
              <ul className="List-points">
                <li>
                  To empower farmers worldwide to achieve optimal crop yields.
                </li>
                <li>
                  To improve farmers' livelihoods through data-driven insights
                  and innovative technologies.
                </li>
              </ul>
            </div>
          </div>
          <div className="mock-cards">
            <div className="que-image">
              <div className="image-2"></div>
              <p className="que-text">Technology</p>
            </div>
            <div className="que-content">
              <ul className="List-points">
                <li>
                  Utilizes advanced machine learning algorithms to analyze soil
                  data, crop information, and weather patterns.
                </li>
                <li>
                  Employs data analysis techniques to identify optimal
                  fertilizer recommendations.
                </li>
              </ul>
            </div>
          </div>
          <div className="mock-cards">
            <div className="que-image">
              <div className="image-3"></div>
              <p className="que-text">Benefit</p>
            </div>
            <div className="que-content">
              <ul className="List-points">
                <li>
                  Optimize fertilizer usage to maximize plant growth and
                  productivity. .
                </li>
                <li>
                  Promote sustainable soil management practices to enhance
                  fertility and long-term productivity.
                </li>
              </ul>
            </div>
          </div>
          <div className="mock-cards">
            <div className="que-image">
              <div className="image-4"></div>
              <p className="que-text">Commitment</p>
            </div>
            <div className="que-content">
              <ul className="List-points">
                <li>
                  To continuously invest in research and development to improve
                  our app and services.
                </li>
                <li>
                  {" "}
                  To support farmers in achieving their agricultural goals.
                </li>
              </ul>
            </div>
          </div>
        </div>


      <Footer />
    </>
  );
}

export default about;
