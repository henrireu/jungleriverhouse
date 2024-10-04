import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home';
import OrangutanRoom from './pages/rooms/orangutanRoom';

import NavigationBar from "./components/navigationbar";
import useWidth from "./helpers/useWidth";
import ScrollToTop from './components/scrollToTop';
import AboutUs from './components/aboutUs';

import Video from './components/backgroundVideo';
import Rooms from './pages/rooms';
import TopOfVideoContent from './components/topOfVideoContent';

//import instagram from './images/instagram.png';
//import whatsapp from './images/whatsapp.png';

const App = () => {
  const windowWidth = useWidth();

  return (
    <Router>
      <MainContainer windowWidth={windowWidth} />
      {/*<Logos />*/}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:name" element={<OrangutanRoom />} />
      </Routes>
    </Router>
  )
}

interface WindowWidthProps {
  windowWidth: number;
}

const MainContainer = ({ windowWidth }: WindowWidthProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === '/' || currentPath === '/rooms') {
    return (
      <div className="video-container">
        <div className={currentPath === '/' ? 'background-img1' : 'background-img2'}>
          <Video />
        </div>
        <div className="content-overlay">
          <NavigationBar windowWidth={windowWidth}/>
          <TopOfVideoContent windowWidth={windowWidth}/>
        </div>
      </div>
    )
  } 

  return (
    <NavigationBar windowWidth={windowWidth}/>
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
