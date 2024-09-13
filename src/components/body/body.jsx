import "../../index.css";
import "./body.css";
import { Link } from 'react-router-dom';



const Body = () => {
  return (
    <>
    <div className="body">
      <div className="background-image my-6 flex items-center">
        <div className="content">
          <p className="text-1">
            Welcome to Agriculture Farm
          </p>
          <p className="text-2">
          सही खाद ज्यादा उत्पद
          </p>
          <p className="text-3">
          "Empowering farmers with precise fertilizer recommendations for healthier crops and sustainable growth."
          </p>


          <div className="btnContainer">

          <Link to = "/crop">
          <button className="Btn mt-9 mb-9 cursor-pointer">Get crop</button>
          </Link>

          <Link to = "/fertilizer/crop-input">
          <button className="Btn mt-9 mb-9 cursor-pointer">Get Fertilizer</button>
          </Link>
          </div>
        </div>
        <div className="wrapper"></div>
      </div>
    </div>

    </>
  
  );
};

export default Body;
