import React from "react";

import DesginSection1 from "../Images/DesginSection1.jpg";
import DesginSection2 from "../Images/DesginSection2.jpg";
import DesginSection3 from "../Images/DesginSection3.jpg";
import DesginSection4 from "../Images/DesginSection4.jpg";
import DesginSection5 from "../Images/DesginSection5.jpg";

import Desgin1 from "../Images/Desgin1.jpg";

import { DesginData } from "./Data";

export const DesginSection = () => {
  return (
    <section className="DesginSection">
      <div className="text-center DesginSectionText">
        <h4>Desgin</h4>
        <h1>Designed by Apple.</h1>
        <p>
          Apple Vision Pro is the result of decades of experience designing
          high‑performance, mobile, and wearable devices — culminating in the
          most ambitious product Apple has ever created. Apple Vision Pro
          integrates incredibly advanced technology into an elegant, compact
          form, resulting in an amazing experience every time you put it on.
        </p>
      </div>

      <div className="DesginCard container-fluid">
        <div className="row row-cols-1 ">
          <div className="col-lg-11 col-12">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">
                  <span>Front.</span> A singular piece of three-dimensionally
                  formed laminated glass flows into an aluminum alloy frame that
                  curves to wrap around your face.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-12">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">
                  <span> Light Seal. </span> The Light Seal gently flexes to
                  conform to your face, delivering a precise fit while blocking
                  out stray light.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-12">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">
                  <span> Head bands.</span> The Solo Knit Band provides
                  cushioning, breathability, and stretch, and a Fit Dial lets
                  you adjust Apple Vision Pro precisely to your head. The Dual
                  Loop Band offers an additional option for a personalized fit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-12">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">
                  <span> Power. </span>The external battery supports up to 2
                  hours of general use and up to 2.5 hours of video playback.1
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-12">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">
                  <span> Sound. </span> Speakers positioned close to your ears
                  deliver rich Spatial Audio while keeping you aware of your
                  surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DesginSectionTwo = () => {
  return (
    <section className="DesginSectionTwo">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-1">
          <div className="col-12">
            <div className="card h-100">
              <img className="img-fluid" src={DesginSection1}></img>
              <div className="card-body">
                <p className="card-text">
                  <span> EyeSight. </span>An outward display reveals your eyes
                  while wearing Apple Vision Pro, letting others know when you
                  are using apps or fully immersed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1  g-4">
          <div className="col-lg-6">
            <div className="card h-100">
              <img className="img-fluid" src={DesginSection2}></img>
              <div className="card-body"></div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <img className="img-fluid" src={DesginSection3}></img>
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card h-100">
              <img className="img-fluid" src={DesginSection4}></img>
              <div className="card-body">
                <p className="card-text">
                  A singular piece of three-dimensionally formed laminated glass
                  acts as an optical surface for the cameras and sensors that
                  view the world. It flows seamlessly into a custom aluminum
                  alloy frame that gently curves to wrap around your face while
                  serving as an attachment point for the Light Seal.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 text-center">
            <div className="card h-100">
              <img className="img-fluid" src={DesginSection5}></img>
              <div className="card-body">
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#DesginSectionCollapse"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Learn more about design
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse CollapseCustom" id="DesginSectionCollapse">
          <div className="card card-body">
            <div
              id="carouselDesginSection"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <img src={Desgin1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">The Light Seal magnetically attaches to the aluminum alloy frame. It gently flexes to conform to individual face shapes.</h5>
                    </div>
                  </div>
                </div>

                {DesginData.map((DesginData, index) => {
                  return (
                    <div className="carousel-item " key={index}>
                      <div className="card">
                        <img
                          src={DesginData.img}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{DesginData.Text}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
