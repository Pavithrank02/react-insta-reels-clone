import React from "react";
import "./VideoHeader.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIcon />
      <h3>Reels</h3>
      <PhotoCameraIcon />
    </div>
  );
}

export default VideoHeader;
