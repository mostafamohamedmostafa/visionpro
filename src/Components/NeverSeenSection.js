import React from "react";
import HeroIcon from "../Images/HeroIcon.svg";
import NeverSeen from "../Images/NeverSeen.jpg";
import { Test } from "./Test";

export const NeverSeenSection = () => {
  return (
    <section className="NeverSeenSection text-center">
      <h1>You’ve never seen everything like this before.</h1>
      <div className="NeverSeenSection-Text">
        <h1 className="card-title">
          <img src={HeroIcon} className=" img-fluid"></img> Vision Pro
        </h1>
        <h5>
          <a href="">Watch the flim</a>
        </h5>
        <h5>
          <a href="">Watch the Guided Tour</a>
        </h5>
      </div>
      <img className="img-fluid" src={NeverSeen}></img>


      <div className="Model">




<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Take a closer look
  </button>
  





<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Test></Test>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>







      </div>
    </section>
  );
};
