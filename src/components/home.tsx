import Carousel from 'react-bootstrap/Carousel';
import blackGibbonRoom from '../images/black-gibbon-room.jpg';
import familyRoom from '../images/family-room.webp';
import orangutanRoom from '../images/orangutan-room.jpg';

interface WindowWidthProps {
  windowWidth: number;
}

const Home:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div
      style={{ backgroundColor: '#2E8B57', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}
    >
      <RoomCarousel windowWidth={windowWidth}/>
    </div>
  )
}


/*const carouselItemStyle = {
    height: '700px'
};*/

const RoomCarousel:React.FC<WindowWidthProps> = ({ windowWidth }) => {
    return (
      <div>
      <h1 className="display-2" style={{ color: '#f8f9fa', textAlign: 'center', marginTop: 40}}>Rooms</h1>
      <Carousel style={{ width: windowWidth > 900 ? '900px' : '400px', paddingTop: 50 }}>
        <Carousel.Item style={{ height: windowWidth > 900 ? '700px' : '310px' }}>
          <img
            className="d-block w-100"
            src={blackGibbonRoom}
            alt="Image One"
            style={{ height: '100%'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: windowWidth > 900 ? '700px' : '310px' }}>
          <img
            className="d-block w-100"
            src={familyRoom}
            alt="Image Two"
            style={{ height: '100%'}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: windowWidth > 900 ? '700px' : '310px' }}>
          <img
            className="d-block w-100"
            src={orangutanRoom}
            alt="Image Two"
            style={{ height: '100%'}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  };

export default Home;