import React from "react";
import HeroIcon from "../Images/HeroIcon.svg";
import HeroImage from "../Images/HeroImage.jpeg";
export const HeroSection = () => {
  return (
    <section className="HeroSection">
      <div className="card text-bg-dark">
        <img
          src={HeroImage}
          className="card-img image-fluid"
          alt="Hero Image"
        />
        <div className=" Hero-Section-Text">
          <h1 className="card-title"><img src={HeroIcon} className=" img-fluid"></img>   Vision Pro</h1>
          <h5>
            <a href="">Watch the Guided Tour</a>
          </h5>
        </div>
      </div>
    </section>
  );
};
