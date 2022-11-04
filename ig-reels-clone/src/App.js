import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";
function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png"
          alt=""
        />
        <h1> Reels</h1>
      </div>
      <div className="app__videos">
      {reels.map(({url, likes, shares, channel, avatarSrc, song}) => (
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
        />
      ))}
        
      </div>
    </div>
  );
}

export default App;
