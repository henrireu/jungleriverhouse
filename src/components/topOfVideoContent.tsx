import { useLocation } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap-icons/font/bootstrap-icons.css';

import blackGibbonRoom from '../images/rooms/black-gibbon-room.jpg';
import familyRoom from '../images/rooms/family-room.webp';
import orantuganRoom from '../images/rooms/orangutan-room.jpg';


interface WindowWidthProps {
  windowWidth: number;
}

interface TextCardProps {
  text: string;
}

const TopOfVideoContent:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div /*style={{ display: 'flex', flexDirection: 'column', gap: 300, alignItems: 'center', justifyContent: 'center', height: '80vh'}}*/>
      { currentPath === '/' ? (
        <HomeContent  />
      ) : currentPath === '/rooms' ? (
        <RoomsContent windowWidth={windowWidth} />
      ) : (
        <></>
      )}
    </div>
  )
}

const RoomsContent:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div style={{ display: 'flex', gap: 300}}>
      <TextCard text="Upeita huoneita hienolla näköalalla"/>
      {windowWidth > 950 && (
        <RoomCardGroup />
      )}
    </div>
  )
}

const HomeContent:React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    centerMode: true,
    arrows: false,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
      <div style={{ width: '19rem' }}>
        <Slider {...settings}>
          <TextCard text="Koe unohtumaton kokemus Jungle River Housessa"/>
          <TextCard text="Oletko valmis viidakkoretkelle?"/>
          <TextCard text="Nauti kauniista näkymästä Bohorok joelle"/>
        </Slider>
      </div>
      {/*<TextCard text="Koe unohtumaton kokemus Jungle River Housessa"/> */}
      <div className="down-icon">
        <ScrollIntoView selector="#scroll-home" smooth>         
          <i className="bi bi-arrow-down-circle"></i>
        </ScrollIntoView>
      </div>
    </div>
  )
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
  return (
    <Card className="text-center bg-transparent " style={{ width: /*'20rem'*/ '100%', border: 'none', textAlign: 'center' }}>
      <Card.Body>
        <Card.Text className="fs-2" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const RoomCardGroup = () => {
  const rooms = [
    { id: 1, name: 'Orantugan Room', image: orantuganRoom },
    { id: 2, name: 'Family Room', image: familyRoom },
    { id: 3, name: 'Black Gibbon Room', image: blackGibbonRoom }
  ];
  
  return (
    <Container style={{ width: 300}}>
      {rooms.map(room => (
        <div key={room.id} className="video-room-card">
          <Card className="mb-3" style={{ height: 80, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 8 }}>
            <Row >
              <Col md={4}>
                <Card.Img 
                  src={room.image} 
                  alt={`${room.name} image`} 
                  style={{ height: 60, width: 70, objectFit: 'cover', margin: '10px' }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title style={{ color: 'rgba(255, 255, 255, 0.5)'}}>{room.name}</Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default TopOfVideoContent;