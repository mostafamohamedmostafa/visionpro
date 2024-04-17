import React from "react";

export const FeaturesButton = (props) => {
  const Data = props.Data;

  return (
    <section>
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
                  <img src={Data.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{Data.Text}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
