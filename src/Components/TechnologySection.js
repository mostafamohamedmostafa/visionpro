import React from "react";
import Technology1 from "../Images/Technology1.jpg";
import Technology2 from "../Images/Technology2.jpg";
import Technology3 from "../Images/Technology3.jpg";
import Technology4 from "../Images/Technology4.jpg";
import Technology5 from "../Images/Technology5.jpg";

export const TechnologySection = () => {
  return (
    <section className="TechnologySection text-center container-fluid">
      <h4>Technology</h4>
      <h1>Innovation you can see, hear, and feel.</h1>
      <p>
        Pushing boundaries from the inside out. Spatial experiences on Apple
        Vision Pro are only possible through groundbreaking Apple technology.
        Displays the size of a postage stamp that deliver more pixels than a 4K
        TV to each eye. Incredible advances in Spatial Audio. A revolutionary
        dual‑chip design featuring custom Apple silicon. A sophisticated array
        of cameras and sensors. All the elements work together to create an
        unprecedented experience you have to see to believe.
      </p>

      <div className="container">
        <img className="img-fluid" src={Technology1}></img>

        <h3>More pixels than a 4K TV. For each eye.</h3>
        <p>
          The custom micro‑OLED display system features 23 million pixels,
          delivering stunning resolution and colors. And a specially designed
          three‑element lens creates the feeling of a display that’s everywhere
          you look.
        </p>
      </div>

      <section className="Tech">
        <div className="Tech-Text container">
          <h3>Our most advanced Spatial Audio system ever.</h3>
          <p>
            Dual-driver audio pods positioned next to each ear deliver
            personalized sound while letting you hear what’s around you. Spatial
            Audio makes sounds feel like they’re coming from your surroundings.
            Audio ray tracing analyzes your room’s acoustic properties to adapt
            and match sound to your space. And if you want to use headphones
            with Apple Vision Pro, AirPods Pro (2nd generation) with USB‑C offer
            the perfect experience, featuring Lossless Audio with ultra-low
            latency enabled by the H2 chip in both devices.
          </p>
        </div>
      </section>
      <div className="container">
        <img className="img-fluid" src={Technology3}></img>

        <h3>Responsive, precision eye tracking.</h3>
        <p>
          A high‑performance eye‑tracking system of LEDs and infrared cameras
          projects invisible light patterns onto each eye. This advanced system
          provides ultraprecise input without your needing to hold any
          controllers, so you can accurately select elements just by looking at
          them.
        </p>
      </div>

      <div className="container">
        <img className="img-fluid" src={Technology4}></img>

        <h3>A sophisticated sensor array.</h3>
        <p>
          A pair of high-resolution cameras transmit over one billion pixels per
          second to the displays so you can see the world around you clearly.
          The system also helps deliver precise head and hand tracking and
          real‑time 3D mapping, all while understanding your hand gestures from
          a wide range of positions.
        </p>
      </div>

      <div className="container">
        <img className="img-fluid" src={Technology5}></img>

        <h3>Revolutionary dual‑chip performance.</h3>
        <p>
          A unique dual‑chip design enables the spatial experiences on Apple
          Vision Pro. The powerful M2 chip simultaneously runs visionOS,
          executes advanced computer vision algorithms, and delivers stunning
          graphics, all with incredible efficiency. And the brand-new R1 chip is
          specifically dedicated to process input from the cameras, sensors, and
          microphones, streaming images to the displays within 12 milliseconds —
          for a virtually lag-free, real-time view of the world.
        </p>
      </div>

      <div className="row row-cols-1 ">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-text">
                Interaction designed for spatial computing.
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
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
    </section>
  );
};
