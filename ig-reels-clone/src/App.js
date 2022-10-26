
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
      <VideoCard /> 
      <VideoCard /> 
      <VideoCard /> 
      </div>
    </div>
  );
}

export default App;
