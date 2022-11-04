import { Avatar, Button } from "@mui/material";
import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow </Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <h1> {song}</h1>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon />
          <SendIcon />
          <MoreHorizIcon />
          <CommentIcon />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize="small" />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <CommentIcon fontSize="small" />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
