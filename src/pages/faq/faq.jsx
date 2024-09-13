import React from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import PreHeader from "../../components/preheader/preheader";
import urea from "../../components/img/UREA.png"
import loamy from "../../components/img/loamy.jpeg"
import red from "../../components/img/redsoil.jpeg"
import forest from "../../components/img/forestsoil.jpeg"
import laterite from "../../components/img/laterite.jpeg"
import blacksoil from "../../components/img/blacksoil.jpg"
import clayey from "../../components/img/clayey.jpg"
import nitrogen from "../../components/img/nitrogen.jpg"
import "./faq.css";

function faq() {
  return (
    <>
       <PreHeader />
      <Header />







      <div class="section-4">
        <div className="ques-grid">
    <h1>आप के सवाल</h1>
    <p className='para-faq'>Have a different question and can’t find the answer you’re looking for? Reach out to us through our contact page :)</p>
        </div>

        <div className="ques-card">
          <div className="faq-card">
            <div className="faq-ques">What do the N, P, and K values in the soil mean?</div>
            <div className="faq-ans">
            N (Nitrogen) supports leaf growth, P (Phosphorus) helps with root development, and K (Potassium) enhances plant health. Our app uses these values to recommend fertilizers.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why is soil type important for crop recommendations?</div>
            <div className="faq-ans">
            Different crops grow better in specific soil types. The app suggests crops suited to your soil for better yields.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How does soil pH affect crop growth?</div>
            <div className="faq-ans">
            Soil pH affects nutrient absorption. Most crops prefer slightly acidic to neutral soil. The app considers pH for accurate recommendations.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why do you need to know my state's name?</div>
            <div className="faq-ans">
            Your state determines local climate conditions. The app uses this to recommend crops and fertilizers suited to your region.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How do temperature and humidity affect crops?</div>
            <div className="faq-ans">
            Crops thrive in specific temperature and humidity ranges. The app tailors recommendations based on your local climate data.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What role does rainfall play in crop selection?</div>
            <div className="faq-ans">
            Rainfall affects water availability for crops. The app suggests crops that can grow well with your area’s rainfall patterns.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What is soil health and why does it matter for fertilizer recommendations?</div>
            <div className="faq-ans">
            Soil health, including nutrient levels and structure, affects crop growth. The app optimizes fertilizer use based on your soil's health.

            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How does the app recommend fertilizer quantities?</div>
            <div className="faq-ans">
            The app calculates fertilizer needs based on soil N, P, K levels, crop type, and area size to prevent overuse or underuse.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How do sustainable agricultural practices benefit me?</div>
            <div className="faq-ans">
            Sustainable practices improve soil health, reduce costs, and increase yields. The app promotes these by giving data-driven recommendations.

            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What is the importance of organic matter in soil?</div>
            <div className="faq-ans">
            Organic matter boosts soil fertility and structure, improving water retention. The app considers it in its recommendations.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What crops can I grow in my area?</div>
            <div className="faq-ans">
            The app recommends crops based on your soil type, climate, and nutrient levels for the best yield potential.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why does the app ask for my soil area?</div>
            <div className="faq-ans">
            Knowing your land size helps the app calculate the correct fertilizer quantity for your crops.

            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What’s the role of micronutrients in crop growth?</div>
            <div className="faq-ans">
            Micronutrients like zinc and iron are essential in small amounts. The app helps identify potential deficiencies.

            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How does temperature variation impact fertilizer efficiency?</div>
            <div className="faq-ans">
            Extreme temperatures affect nutrient uptake. The app adjusts fertilizer recommendations to local conditions.

            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Can the app help me rotate crops effectively?</div>
            <div className="faq-ans">
            Yes, the app suggests crop rotations based on nutrient levels to maintain soil health and prevent depletion.

            </div>
          </div>
        </div>
</div>



<div className="outer-section-container">
  <h1 className='heading-top'>Different Types of Soil</h1>
      <div className="section-pic-1">

        <div className="picture-container">
          <div className="info-img-card">
            <img src={loamy} alt="" />

          </div>
          <div className="hover-over-text">
            <h2 className="heading-hover">Loamy Soil</h2>
            <p className='hover-text'>
            Loamy soil is ideal for growing a wide range of crops, including cereals like wheat and rice, vegetables like potatoes and tomatoes, fruits like apples and grapes etc.
            </p>
          </div>

        </div>
        <div className="picture-container">
          <div className="info-img-card">
            <img src={blacksoil} alt="" />

          </div>
          <div className="hover-over-text">
                        <h2 className="heading-hover">Black Soil</h2>
            <p className='hover-text'>
            Black soil, rich in clay and organic matter, is ideal for growing cotton, along with crops like soybeans, wheat, sorghum, maize, and legumes such as lentils and chickpeas.
            </p>
          </div>

        </div>
        <div className="picture-container">
          <div className="info-img-card">
            <img src={clayey} alt="" />
          </div>
          <div className="hover-over-text">
                        <h2 className="heading-hover">Clayey Soil</h2>
            <p className='hover-text'>
            Clayey soil retains moisture well and is suitable for crops like rice, sugarcane, wheat, pulses, and root vegetables such as potatoes and carrots.
            </p>
          </div>

        </div>
        <div className="picture-container">
          <div className="info-img-card">
            <img src={red} alt="" />
          </div>
          <div className="hover-over-text">
                        <h2 className="heading-hover">Red Soil</h2>
            <p className='hover-text'>
            Red soil, rich in iron and well-drained, is ideal for crops like groundnuts, millets, cotton, pulses, and fruits such as watermelon and citrus.
            </p>
          </div>

        </div>
        <div className="picture-container">
          <div className="info-img-card">
            <img src={forest} alt="" />
          </div>
          <div className="hover-over-text">
                        <h2 className="heading-hover">Forest Soil</h2>
            <p className='hover-text'>
            Forest soil, found in mountainous regions, supports crops like tea, coffee, spices, tropical fruits, and various medicinal plants.
            </p>
          </div>

        </div>
        <div className="picture-container">
          <div className="info-img-card">
            <img src={laterite} alt="" />
          </div>
          <div className="hover-over-text">
                        <h2 className="heading-hover">Laterite Soil</h2>
            <p className='hover-text'>
            Laterite soil, rich in iron and aluminum, is suitable for crops like tea, coffee, cashew nuts, rubber, and coconut, especially in areas with heavy rainfall.
            </p>
          </div>

        </div>
      </div>
      </div>


      <Footer />
    </>
  )
}

export default faq
