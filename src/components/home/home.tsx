import blackGibbonRoom from '../../images/rooms/black-gibbon-room.jpg';
import familyRoom2 from '../../images/rooms/familyroom2.jpg';
import orangutanRoom from '../../images/rooms/orangutan-room.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomeRoom from '../home/homeRoom';
import RoomCarousel from '../roomCarousel';
import JungleTrekSection from './jungleTrekSection';
import ReviewSection from './reviewSection';
import ContactFooter from '../contactFooter';

interface WindowWidthProps {
  windowWidth: number;
} 

const Home:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div id="scroll-home" className="bg-color1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
      <JungleTrekSection />
      <RoomsSection windowWidth={windowWidth}/>
      <ReviewSection />
      <ContactFooter />
    </div>
  )
}

const RoomsSection:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div className="bg-color2" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 50 }}>
      <h1 className="jungle-header" style={{ marginTop: 50, marginBottom: 50 }}>Huoneet</h1>
      {windowWidth > 1200 ? (
        <Container>
        <Row xs={1} lg={2} xl={3} /*className="g-4 justify-content-md-center"*/>
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
    
export default Home;