import blackGibbonRoom from '../../images/rooms/black-gibbon-room.jpg';
import familyRoom2 from '../../images/rooms/familyroom2.jpg';
import orangutanRoom from '../../images/rooms/orangutan-room.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import RoomCarousel from '../roomCarousel';

interface WindowWidthProps {
  windowWidth: number;
} 

const RoomsSection:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div className="bg-color1 room-container">
      <div className="room-text">
        <h1 className="header1">Huoneet</h1>
        <h3 className="header2">LISÄTIETOA</h3>
      </div>
      {windowWidth > 1200 ? (
        <Container>
          <Row /*xs={1} lg={2} xl={3}*/>
            <Col>
              <HomeRoom name="Blackgibbon Huone" img={blackGibbonRoom} price={"31-36"} windowWidth={windowWidth}/>
            </Col>
            <Col>
              <HomeRoom name="Perhehuone" img={familyRoom2} price={"78-90"} windowWidth={windowWidth}/>
            </Col>
            <Col>
              <HomeRoom name="Orangutan Huone" img={orangutanRoom} price={"31-36"} windowWidth={windowWidth}/>
            </Col>
          </Row>
        </Container>
      ) : (
        <RoomCarousel />
      )}
    </div>
  )
}

  interface homeRoomProps {
    name: string;
    img: string;
    price: string;
    windowWidth: number;
  }

const HomeRoom = ({ name, img, price, windowWidth }: homeRoomProps) => {
  return (
    <Card className="text-center" text="white" style={{ backgroundColor: '#05866e', border: 'none', width: windowWidth >= 1400 ? '26rem' : '21rem'/*'24rem' : '19rem'*/, height: windowWidth >= 1400 ? '29rem' : '25rem' /*'29rem' : '23rem'*/ }}>
      <Card.Img variant="top" src={img} style={{ height: 300 }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Hinta / yö &nbsp;<strong style={{ fontSize: 25, }}>{price} €</strong>
          </div>
        </Card.Text>
        <Button variant="outline-light">LISÄTIETOA</Button>
      </Card.Body>
    </Card>
  );
}

export default RoomsSection;