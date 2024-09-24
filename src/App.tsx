import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from "./components/navigationbar";
import useWidth from "./helpers/useWidth";
import Home from './components/home/home';
import AboutUs from './components/aboutUs';

import Video from './components/backgroundVideo';
import Rooms from './components/rooms/rooms';
import TopOfVideoContent from './components/topOfVideoContent';

// react slickin karousellit menee sekaisin kun ne käärii diviin

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

      {/*<Home windowWidth={windowWidth}/>*/}

      <Routes>
        <Route path="/" element={<Home windowWidth={windowWidth} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  )
}

export default App
