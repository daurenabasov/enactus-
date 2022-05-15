import React from 'react';
import "../../../App.css"
import CardTitle from "../../.././components/ main/section-second/CardTitle";
import SectionThird from "../../.././components/ main/section-third/SectionThird";
import Swipper from "../../.././components/ main/swipper/Swipper";
import Header from "../../.././components/header/Header";
import Home from "../../.././components/pages/home/Home";
import DataBase from "../../.././components/ main/section-four/DataBase";
import OurPartners from "../../.././components/ main/section-six/OurPartners";
import Footer from "../../.././components/ main/footer/Footer";

const Main = () => {
    return (
        <div className="App">
        <Header />
  
        <Home />
  
        <Swipper />
  
        <CardTitle />
  
        <SectionThird />
  
        <DataBase />
  
        {/* Ilgiz section */}
  
        <OurPartners />
  
        <Footer />
      </div>
    );
};

export default Main;