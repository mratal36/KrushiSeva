import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import Soil from "./pages/soil/soil";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import FertilizerNPK from "./pages/fertilizernpk/fertilizernpk";
import Fertilizerarea from "./pages/Fertilizerarea/Fertilizerarea";
import Output from "./pages/output/output";
import FAQ from "./pages/faq/faq";
import Cropparams from "./pages/Cropparams/Cropparams";
import Cropclimateparams from "./pages/Cropclimateparams/Cropclimateparams";
import Outputcrop from "./pages/Output-crop/Outputcrop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Soil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/fertilizer/crop-input" element={<Fertilizer />} />
          <Route path="/fertilizer/npk-input" element={<FertilizerNPK />} />
          <Route path="/fertilizer/area-input" element={<Fertilizerarea />} />
          <Route path="/fertilizer/recommend" element={<Output />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/crop/soil-params" element={<Cropparams />} />
          <Route path="/crop/climate-params" element={<Cropclimateparams />} />
          <Route path="/crop/recommend-crop" element={<Outputcrop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App