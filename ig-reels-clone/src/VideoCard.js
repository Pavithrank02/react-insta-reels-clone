import React from 'react'
import './VideoCard.css';

function VideoCard() {
  return (
    <div className='videoCard'>
        <video 
        className='video__player'
        src='https://player.vimeo.com/external/420237319.sd.mp4?s=c25da38b732e29a30ed7f974b2d0199f5f7e072e&profile_id=165&oauth2_token_id=57447761'
        loop
        />
    </div>
  )
}

export default VideoCard