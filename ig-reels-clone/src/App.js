
import './App.css';
import VideoCard from './VideoCard';
function App() {
  return (
    <div className="app">

      <div className="app__top">
      <img 
      className='app__logo'
      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png"
      alt=""
      />
      <h1> Reels</h1>
      </div>
      <div className="app__videos">
      <VideoCard 
        channel={'pavi'}
        avatarSrc={'https://avatars0.githubusercontent.com/u/59897156?v=4'}
        song='song'
        url={'https://player.vimeo.com/external/420237319.sd.mp4?s=c25da38b732e29a30ed7f974b2d0199f5f7e072e&profile_id=165&oauth2_token_id=57447761'}
        likes={950}
        shares={30}
      /> 
      <VideoCard /> 
      <VideoCard /> 
      </div>
    </div>
  );
}

export default App;
