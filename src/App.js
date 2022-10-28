import Header from "./Mylayout/Header";
import Footer from "./Mylayout/Footer";
import Home from "./Mylayout/Home";
import Hero from "./Mylayout/Hero";
import { Routes, Route } from "react-router-dom";
import Ourservices from "./Mylayout/Ourservices";
import About from "./Mylayout/About";
import Contact from "./Mylayout/Contact";
import Error from "./Mylayout/Error";
import ServiceDetails from "./Mylayout/ServiceDetails";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />}  />
        <Route path="/Ourservices" element={<Ourservices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service-details" element={<ServiceDetails/>}/>
        
        <Route path ="/error" element={<Error/>}/>
        
        
        </Routes>
      <Footer />
    </>
  );
};

export default App;
