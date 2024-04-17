import React from "react";
import { FeaturesButton } from "./FeaturesButton";

export const AppsSection = (props) => {
  const Data = props.Data;

  return (
    <section className="AppsSection container-fluid text-center">
      <section className={props.BgStyle}>
        <h4>{props.AppsSectionTextSmall}</h4>
        <h1>{props.AppsSectionText}</h1>
        <video
          src={props.AppsSectionVideo}
          autoPlay
          loop
          muted
          controls
          className="img-fluid"
        ></video>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{props.LeftCardText}</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">{props.RightCardText}</p>

                <p className="d-inline-flex gap-1">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={props.ButtonCollapseId}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {props.AppsSectionButton}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse CollapseCustom" id={props.ButtonCollapse}>
          <div className="card card-body">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <img src={props.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{props.Text}</h5>
                    </div>
                  </div>
                </div>

                {Data.map((Data, index) => {
                  return (
                    <div className="carousel-item " key={index}>
                      <div className="card">
                        <img
                          src={Data.img}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{Data.Text}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
