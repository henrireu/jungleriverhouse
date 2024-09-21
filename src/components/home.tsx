import blackGibbonRoom from '../images/black-gibbon-room.jpg';
import familyRoom2 from '../images/familyroom2.jpg';
import orangutanRoom from '../images/orangutan-room.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bukitImage from '../images/jungle-river-house-bukit.jpg';

import HomeRoom from './home/homeRoom';
import RoomCarousel from './roomCarousel';

interface WindowWidthProps {
  windowWidth: number;
} 

//navigointipalkki hyppii jos toisella sivulla ei ole alasvieritys palkkia ja toisella on...
//Ongelma johtuu siitä sivupalkista mistä rullataan alaspäin mikä tulee tällä hetkellä vain home komponenttiin


const Home:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div
      style={{ backgroundColor: '#004D40', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{marginTop: 50, display: 'flex', gap: 50, padding: 50}}>
        {windowWidth > 900 && (
          <Image 
            src={bukitImage} 
            rounded 
            style={{ width: '50%', height: windowWidth > 1200 ? 700 : 500}}
          />
        )}
        <IntroductionTextCard />
      </div>
      <RoomsSection windowWidth={windowWidth}/>
      <RoomCarousel />
    </div>
  )
}

// tee tuo kuntoon että kaikki huoneet on keskellä vaikka ei oo vierekkäin

const RoomsSection:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#00695C', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="display-1 text-light" style={{ marginTop: 50, marginBottom: 50}}>Huoneet</h1>
      {/*<div style={{ padding: 50, display: 'flex', gap: 50}}>
        <HomeRoom name="Blackgibbon Huone" img={blackGibbonRoom} price={"31-36"}/>
        <HomeRoom name="Perhehuone" img={familyRoom2} price={"78-90"}/>
        <HomeRoom name="Orangutan Huone" img={orangutanRoom} price={"31-36"}/>
      </div>*/}
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
    </div>
  )
}


const IntroductionTextCard = () => {
  return (
    <Card className="text-center" bg="success" text="light" style={{ }}>
      <Card.Body>
        <Card.Title className="fs-1" style={{ marginBottom: 50}}>Moi!</Card.Title>
        <Card.Title className="fs-3" style={{ marginBottom: 50}}>TERVETULOA!</Card.Title>
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
}


/*const carouselItemStyle = {
    height: '700px'
};*/

/*const RoomCarousel:React.FC<WindowWidthProps> = ({ windowWidth }) => {
  const [width, setWidth] = useState<string>('');

  useEffect(() => {
    if(windowWidth > 900) {
      setWidth('900px');
    } else if (windowWidth > 610) {
      setWidth('600px');
    } else {
      setWidth('300px');
    }
  },[windowWidth]);

    return (
      <div>
      <h1 className="display-2" style={{ color: '#f8f9fa', textAlign: 'center', marginTop: 40}}>Rooms</h1>
      <Carousel style={{ width: `${width}`, paddingTop: 50 }}>
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
  };*/

export default Home;