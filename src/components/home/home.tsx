import blackGibbonRoom from '../../images/rooms/black-gibbon-room.jpg';
import familyRoom2 from '../../images/rooms/familyroom2.jpg';
import orangutanRoom from '../../images/rooms/orangutan-room.jpg';

//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
 
//import bukitImage from '../../images/jungle-river-house-bukit.jpg';

import HomeRoom from '../home/homeRoom';
import RoomCarousel from '../roomCarousel';

import JungleTrekSection from './jungleTrekSection';

interface WindowWidthProps {
  windowWidth: number;
} 

const Home:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div className="bg-color1" style={{ /*backgroundColor: '#004D40' '#00695C',*/ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/*<div style={{ display: 'flex', gap: 50, padding: 50}}>
        {windowWidth > 900 && (
          <Image 
            src={bukitImage} 
            rounded 
            style={{ width: '50%', height: windowWidth > 1200 ? 700 : 500}}
          />
        )
        {/*<IntroductionTextCard />*//*}
      </div>*/}
      <JungleTrekSection />
      <RoomsSection windowWidth={windowWidth}/>
    </div>
  )
}

// tee tuo kuntoon että kaikki huoneet on keskellä vaikka ei oo vierekkäin



const RoomsSection:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div className="bg-color2" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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


/*const IntroductionTextCard = () => {
  return (
    <Card className="text-center" style={{ backgroundColor: 'transparent', border: 'none', color: 'white'}}>
      <Card.Body>
        <h1 className="jungle-header" style={{ marginBottom: 10}}>MOI!</h1>
        <Card.Title className="fs-3" style={{ marginBottom: 10}}>TERVETULOA!</Card.Title>
        <Card.Text className="fs-4">
        Haluatko kokea sademetsän ja oman viidakkoseikkailusi luonnossa villieläimiä kanssa?
        </Card.Text>
        <Card.Text className="fs-4">
        Olemme sinun palveluksessasi.
        </Card.Text>
        <Card.Text className="fs-4">
        Järjestämme toivomasi viidakkoretket halusitpa kokea päiväretken tai syventää kokemustasi yön yli kestävillä retkillä. Viidakkoretkemme tarjoavat sinulle uskomattoman kokemuksen yhteen maailman hienoimmista jäljellä olevista sademetsistä. Tervetuloa Gunung Lesuerin kansallispuistoon, Sumatralle.
        </Card.Text>
        <Card.Text className="fs-4">
        Majoituspaikkamme tarjoaa sinulle viihtyisästi sisustetut huoneet monilla mukavuuksilla ja näköalan joelle. Hotellin yhteydessä on myös ravintola aivan joen rannalla, jossa voit nauttia hyvästä indonesialaisesta tai länsimaalaisesta ruoasta, juomista sekä viidakon tunnelmasta. Sijaintimme on ihan keskeisellä paikalla Bukit Lawangissa.
        </Card.Text>
        <Button variant="outline-light" size="lg">More about us</Button>
      </Card.Body>
    </Card>
  );
}*/

export default Home;