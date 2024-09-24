import { useLocation } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <div style={{ display: 'flex', gap: 300, alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
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
    return (
        <div>
            <TextCard text="Koe unohtumaton kokemus Jungle River Housessa"/>
            {/*{windowWidth > 950 && (
              <RoomCardGroup />
            )}*/}
        </div>
      )
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
    return (
      <Card className="text-center bg-transparent " style={{ width: '20rem', border: 'none' }}>
        <Card.Body>
          <Card.Text className="fs-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
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