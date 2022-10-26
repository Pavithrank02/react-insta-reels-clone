import React, { useRef, useState } from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader';

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null); 
  const onVideoPress = () => {
    if(isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false)
    }else {
      videoRef.current.play()
      setIsVideoPlaying(true);
    }

  }
  return (
    <div className='videoCard'>
      <VideoHeader />
        <video 
        ref={videoRef}
        onClick={onVideoPress}
        className='videoCard__player'
        src='https://player.vimeo.com/external/420237319.sd.mp4?s=c25da38b732e29a30ed7f974b2d0199f5f7e072e&profile_id=165&oauth2_token_id=57447761'
        alt='IG reels video'
        loop
        />
    </div>
  )
}

export default VideoCard