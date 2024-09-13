import React from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import PreHeader from "../../components/preheader/preheader";
import call from "./img2/call.jpg"
import email from "./img2/email.png"
import social from "./img2/social.png"
import "./contact.css";

function contact() {
  return (
    <>
    <PreHeader />
      <Header />
      <div className="back-2">
        <div className="contact-container">
          <div class="cont-container">
            <p>Contact</p>
          </div>
          <div className="wrapper"></div>
        </div>
        </div>

        <div className="farmer-form">

  <div className="farmer-form-data">

    <h1>Fill this form to Contact Us</h1>

          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name' />
          <label htmlFor="phNumber">Phone Number</label>
          <input type="number" placeholder='enter your moblie number' maxLength="10" id="phNumber" />

          <label htmlFor="Soil">Soil Health card Id Number</label>
          <input type="number" maxLength="10" placeholder='enter your Soil Health card id number' id="Soil" />

          <label htmlFor="aadhar">Aadhar Number</label>
          <input type="number" maxlength="10" placeholder='enter you aadhar number' id="aadhar" />

          <textarea name="Probelm" id="" placeholder='Enter your Problem'></textarea>

          <button className='farmer-form-btn'>Submit</button>
  </div>
        </div>


        <div className="contact-menu">

        <h1>NEED HELP?</h1>
        <p>We open the door to thousands of farmers worldwide. Ask your queries and get the best solution instantly. There are two ways to get the solutions.</p>
          <div className="contact-card-container">
            <div className="contact-card">
              <div className="icon-image">

              </div>

              <div className="card-Content">
                <p className='attr-1'>Call</p>
                <p className='attr-2'>+91 943215678</p>
              </div>

            </div>
            <div className="contact-card">
              <div className="icon-image-2">
    
              </div>

              <div className="card-Content">
                <p className='attr-1'>Social media</p>
                <p className='attr-2'>
                  <ul>
                    <li>IG - krushiseva123</li>
                    <li>Facebook - krushiseva123</li>
                    <li>LinkedIn - krushiseva123</li>
                  </ul>
                </p>
              </div>

            </div>
            <div className="contact-card">
              <div className="icon-image-3">
    
              </div>

              <div className="card-Content">
                <p className='attr-1'>Email</p>
                <p className='attr-2'>krushiseva123@gmail.com</p>
              </div>

            </div>

          </div>
        </div>
      <Footer />
    </>
  )
}

export default contact
