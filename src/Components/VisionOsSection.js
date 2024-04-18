import React from "react";
import VisionOs from "../Images/VisionOs.mp4";
import VisionOS1 from "../Images/VisionOS1.jpg";
import VisionOS2 from "../Images/VisionOS2.jpg";
import VisionOS3 from "../Images/VisionOS3.jpg";
import VisionOS4 from "../Images/VisionOS4.jpg";
import VisionOS5 from "../Images/VisionOS5.jpg";
import VisionOS6 from "../Images/VisionOS6.jpg";
import VisionOsVideo from "../Images/VisionOs.mp4";
import Vision1 from "../Images/Vision1.mp4";
import Vision2 from "../Images/Vision2.mp4";
import Vision3 from "../Images/Vision3.mp4";

export const VisionOsSection = () => {
  return (
    <section className="VisionOsSection text-center container-fluid">
      <h4>visionOS</h4>
      <h1>Apple’s first spatial operating system.</h1>
      <video
        src={VisionOs}
        autoPlay
        loop
        muted
        controls
        className="img-fluid"
      ></video>

      <div className="row row-cols-1 ">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-text">
                Interaction designed for spatial computing.
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-12">
          <div className="card h-100">
            <div className="card-body">
              <p className="card-text">
                Built on the foundation of macOS, iOS, and iPadOS, visionOS
                enables powerful spatial experiences. Control Apple Vision Pro
                with your eyes, hands, and voice — interactions feel intuitive
                and magical. Simply look at an element, tap your fingers
                together to select, and use the virtual keyboard or dictation to
                type.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1  g-0">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <img className="img-fluid" src={VisionOS1}></img>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <img className="img-fluid" src={VisionOS2}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-4 ">
          <div className="card h-100">
            <div className="card-body">
              <h2>Apps leap into life.</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-body">
              <p>
                In visionOS, apps can fill the space around you, beyond the
                boundaries of a display. They can be moved anywhere, scaled to
                the perfect size, react to the lighting in your room, and even
                cast shadows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-12 ">
          <div className="card h-100">
            <div className="card card-body">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card">
                      <img src={VisionOS3} className="card-img-top" alt="..." />
                      <div className="card-body"></div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="card">
                      <img src={VisionOS4} className="card-img-top" alt="..." />
                      <div className="card-body"></div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="card">
                      <img src={VisionOS5} className="card-img-top" alt="..." />
                      <div className="card-body"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h2>Expand your surroundings.</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-body">
              <p>
                Environments let you transform the space around you, so apps can
                extend beyond the dimensions of your room. Choose from a
                selection of beautiful landscapes, or turn your room into a
                personal movie theater with the Cinema Environment. The Digital
                Crown gives you full control over how immersed you are.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-12">
          <div className="card h-100">
            <div className="card-body">
              <img src={VisionOS6} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h2>Stay connected to people around you.</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-body">
              <p>
                Apple Vision Pro helps you remain connected to those around you.
                EyeSight reveals your eyes and lets those nearby know when
                you’re using apps or fully immersed in an experience. When
                someone approaches, Apple Vision Pro simultaneously lets you see
                the person and reveals your eyes to them.
              </p>
            </div>

            <p className="d-inline-flex gap-1 mb-6">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#VisionOsCollapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Learn more about VisionOs
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="collapse CollapseCustom" id="VisionOsCollapse">
        <div className="card card-body">
          <div
            id="carouselVisionSection"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <video
                    src={VisionOsVideo}
                    autoPlay
                    loop
                    muted
                    controls
                    className="img-fluid"
                  ></video>
                  <div className="card-body">
                    <h5 className="card-title">
                      Navigate visionOS simply by looking at apps, buttons, and
                      text fields. App icons and buttons subtly come to life
                      when you look at them.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="card">
                  <video
                    src={Vision1}
                    autoPlay
                    loop
                    muted
                    controls
                    className="img-fluid"
                  ></video>

                  <div className="card-body">
                    <h5 className="card-title">
                      Tap your fingers together to make a selection and gently
                      flick to scroll. Apple Vision Pro is designed to
                      understand hand gestures from comfortable positions, like
                      resting in your lap or on the sofa.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="card">
                  <video
                    src={Vision2}
                    autoPlay
                    loop
                    muted
                    controls
                    className="img-fluid"
                  ></video>

                  <div className="card-body">
                    <h5 className="card-title">
                      Simply look at the microphone button in a search field and
                      start speaking to dictate text.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="card">
                  <video
                    src={Vision3}
                    autoPlay
                    loop
                    muted
                    controls
                    className="img-fluid"
                  ></video>

                  <div className="card-body">
                    <h5 className="card-title">
                      Use Siri to quickly open or close apps, play media, and
                      more.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
