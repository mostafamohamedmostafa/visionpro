import React from "react";
import Front from "../Images/Front.jpg";
import Sensors from "../Images/Sensors.jpg";
import Audio from "../Images/Audio.jpg";
import HeadBand from "../Images/HeadBand.jpg";
import Displays from "../Images/Displays.jpg"; 
import lightSeal from "../Images/lightSeal.jpg";
import DigitalCrown from "../Images/DigitalCrown.jpg";
import Button from "../Images/Button.jpg";
import Power from "../Images/Power.jpg";



export const Test = () => {
  return (
    <section>
  
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    
    <li className="nav-item" role="presentation">
      <button className="nav-link active show" id="Front" data-bs-toggle="tab" data-bs-target="#Front-pane" type="button" role="tab" aria-controls="Front-pane" aria-selected="true">Front</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Cameras-tab" data-bs-toggle="tab" data-bs-target="#Cameras-tab-pane" type="button" role="tab" aria-controls="Cameras-tab-pane" aria-selected="false">Cameras</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Audio-tab" data-bs-toggle="tab" data-bs-target="#Audio-tab-pane" type="button" role="tab" aria-controls="Audio-tab-pane" aria-selected="false">Audio</button>
    </li>


    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Head-tab" data-bs-toggle="tab" data-bs-target="#Head-tab-pane" type="button" role="tab" aria-controls="Head-tab-pane" aria-selected="false">Head</button>
    </li>

    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Displays-tab" data-bs-toggle="tab" data-bs-target="#Displays-tab-pane" type="button" role="tab" aria-controls="Displays-tab-pane" aria-selected="false">Displays</button>
    </li>


    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Light-tab" data-bs-toggle="tab" data-bs-target="#Light-tab-pane" type="button" role="tab" aria-controls="Light-tab-pane" aria-selected="false">Light</button>
    </li>
    
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Digital-tab" data-bs-toggle="tab" data-bs-target="#Digital-tab-pane" type="button" role="tab" aria-controls="Digital-tab-pane" aria-selected="false">Digital</button>
    </li>

    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Top-tab" data-bs-toggle="tab" data-bs-target="#Top-tab-pane" type="button" role="tab" aria-controls="Top-tab-pane" aria-selected="false">Top</button>
    </li>

    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Power-tab" data-bs-toggle="tab" data-bs-target="#Power-tab-pane" type="button" role="tab" aria-controls="Power-tab-pane" aria-selected="false">Power</button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade  active" id="Front-pane" role="tabpanel" aria-labelledby="Front" tabindex="0">
    <img src={Front} className="card-img image-fluid" alt="Hero Image"/>

<h4>A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.</h4>

    </div>
    <div className="tab-pane fade" id="Cameras-tab-pane" role="tabpanel" aria-labelledby="Cameras-tab" tabindex="0">

    <img src={Sensors} className="card-img image-fluid" alt="Hero Image"/>

<h4>An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.</h4>

    </div>
    <div className="tab-pane fade" id="Audio-tab-pane" role="tabpanel" aria-labelledby="Audio-tab" tabindex="0">
    <img src={Audio} className="card-img image-fluid" alt="Hero Image"/>

<h4>Speakers are positioned close to your ears, delivering rich Spatial Audio that seamlessly blends with real-world sounds.</h4>


    </div>
    <div className="tab-pane fade" id="Head-tab-pane" role="tabpanel" aria-labelledby="Head-tab" tabindex="0">
    <img src={HeadBand} className="card-img image-fluid" alt="Hero Image"/>

<h4>Two head bands are included. The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro to your head. The Dual Loop Band features a pair of adjustable upper and lower straps for a precise fit.</h4>

    </div>
    <div className="tab-pane fade" id="Displays-tab-pane" role="tabpanel" aria-labelledby="Displays-tab" tabindex="0">

    <img src={Displays} className="card-img image-fluid" alt="Hero Image"/>

<h4>A pair of custom micro‑OLED displays deliver more pixels than a 4K TV to each eye — for stunning clarity.</h4>

    </div>
    <div className="tab-pane fade" id="Light-tab-pane" role="tabpanel" aria-labelledby="Light-tab" tabindex="0">
    <img src={lightSeal} className="card-img image-fluid" alt="Hero Image"/>

<h4>The Light Seal gently conforms to your face, delivering a precise fit while blocking out stray light.</h4>

    </div>
    <div className="tab-pane fade" id="Digital-tab-pane" role="tabpanel" aria-labelledby="Digital-tab" tabindex="0">

    <img src={DigitalCrown} className="card-img image-fluid" alt="Hero Image"/>

<h4>Press the Digital Crown to bring up the Home View, and turn it to control your level of immersion while using Environments.</h4>

    </div>
    <div className="tab-pane fade" id="Top-tab-pane" role="tabpanel" aria-labelledby="Top-tab" tabindex="0">
    <img src={Button} className="card-img image-fluid" alt="Hero Image"/>

<h4>Press the top button to take spatial videos and spatial photos in the moment.</h4>

    </div>
    <div className="tab-pane fade" id="Power-tab-pane" role="tabpanel" aria-labelledby="Power-tab" tabindex="0">


    <img src={Power} className="card-img image-fluid" alt="Hero Image"/>

<h4>The external battery supports up to 2 hours of general use and up to 2.5 hours of video playback.1.</h4>

    </div>
   
  </div>
    </section>
  );
};
