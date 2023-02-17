import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
const Video = () => {
  const externalSource = "https://www.youtube.com/watch?v=Uj8UnKp2QVQ";
  return (
    <div className="">
      <ReactPlayer
        className="player"
        url={externalSource}
        controls
        playing
        muted
      />
    </div>
  );
};
export default Video;
