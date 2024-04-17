import React from "react";

export const VideoSection = (props) => {
  return (
    <section className="VideoSection container-fluid text-center">
      <h1>{props.VideoSectionText}</h1>
      <video src={props.VideoSectionVideo} autoPlay loop muted controls className="img-fluid"></video>
    </section>
  );
};
