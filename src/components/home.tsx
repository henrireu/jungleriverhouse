import Carousel from 'react-bootstrap/Carousel';
import blackGibbonRoom from '../images/black-gibbon-room.jpg';
import familyRoom from '../images/family-room.webp';
import orangutanRoom from '../images/orangutan-room.jpg';

const Home = () => {
  return (
    <div
      style={{ backgroundColor: '#2E8B57', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}
    >
      <RoomCarousel />
    </div>
  )
}

const carouselItemStyle = {
    height: '700px'
};

const RoomCarousel = () => {
    return (
      <Carousel style={{ width: '900px', paddingTop: 50 }}>
        <Carousel.Item style={carouselItemStyle}>
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
        <Carousel.Item style={carouselItemStyle}>
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
      </Carousel>
    );
  };

export default Home;