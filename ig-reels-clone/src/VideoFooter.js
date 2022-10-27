import { Avatar, Button } from '@mui/material'
import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';


function VideoFooter({ likes, shares, channel, avatarSrc, song}) {
  return (
    <div className='videoFooter'>
    <div className='videoFooter__text'> 
      <Avatar src={avatarSrc} />
      <h3>{channel} . <Button>Follow </Button>
      </h3>
    </div>
    <div className='videoFooter__ticker'> 
    <MusicNoteIcon 
    className='videoFooter__icon'
    />
    <Ticker mode="smooth">
    {({index}) => (
      <>
        <h1>{song}</h1>
      </>
    )}
    </Ticker>
    </div>
    <div className='videoFooter__ticker'> 
    </div>
    </div>
  )
}

export default VideoFooter