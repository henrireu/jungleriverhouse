import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from "./components/navigationbar";
import useWidth from "./helpers/useWidth";
import Home from './components/home/home';
import AboutUs from './components/aboutUs';

import Video from './components/backgroundVideo';
import Rooms from './components/rooms/rooms';
import TopOfVideoContent from './components/topOfVideoContent';

//import instagram from './images/instagram.png';
//import whatsapp from './images/whatsapp.png';

const App = () => {
  const windowWidth = useWidth();

  return (
    <Router>
      <div className="video-container">
        <Video />
        <div className="content-overlay">
          <NavigationBar windowWidth={windowWidth}/>
          <TopOfVideoContent windowWidth={windowWidth}/>
        </div>
      </div>
      {/*<Logos />*/}
      {/*<Home windowWidth={windowWidth}/>*/}

      <Routes>
        <Route path="/" element={<Home windowWidth={windowWidth} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  )
}

/*const Logos = () => {
  return (
    <div className="fixed-logo">
      <a href="https://www.instagram.com/jungleriverhouse/" target="_blank" rel="noopener noreferrer">
        <img className="logo-img" src={instagram} alt="instagram logo" />
      </a>
      <img className="logo-img" src={whatsapp} alt="whatsapp logo" />
    </div>
  )
}*/

export default App
