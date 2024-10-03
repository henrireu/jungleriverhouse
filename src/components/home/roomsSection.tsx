import blackGibbonRoom from '../../images/rooms/black-gibbon-room.jpg';
import familyRoom2 from '../../images/rooms/familyroom2.jpg';
import orangutanRoom from '../../images/rooms/orangutan-room.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import RoomCarousel from '../roomCarousel';
import bukitImage from '../../images/jungle-river-house-bukit.jpg';

const RoomsSection = () => {
  return (
    <div className="bg-color1 room-container">
      <div className="text-image-container">
        <div className="room-image-container">
          <img src={bukitImage} alt="hotel room" className="welcome-image"/>
        </div>
        <div className="room-text">
          <h1 className="header1">Huoneet</h1>
          <p className="text1">
          Bukit Lawangissa sijaitsevan hotellimme ensiluokkainen sijainti takaa upeat näkymät joelle ja lisäksi hotellissa on 4 tyylikästä huonetta ja perhehuone, jotka tarjoavat useita ylellisiä ja viihtyisiä mukavuuksia, kuten ruhtinaallisen unikokemuksen sekä ilmaisen Wi-Fi-yhteyden. Huoneet sijaitsevat suoraan joen rannalla ja tarjoaa upeat näkymät joen yli. Huoneessa on lasiseinä ja kauniilla omalla parvekkeella voit rentoutua ja nauttia näkymistä. Huoneissa on omat sisäänkäynti ja länsimaalaiset kylpyhuoneet sekä lämminvesisuihku ja ilmastointi.
          </p>
          <p className="text1">
          Huoneemme on suunniteltu tarjoamaan persoonallinen ja viihtyisä kokemus sekä ripaus ylellisyyttä. Hotellimme on kuin oma olohuone sademetsän vieressä. Siellä voit rentoutua luonnon kohtaamispisteessä.
          </p>
        </div>
      </div> 
      {/*tee tämä osio uusiksi*/}
      <RoomsContainer/>
      <div className="room-carousel-container">
        <RoomCarousel />
      </div>
      {/*windowWidth > 1200 ? (
        <RoomsContainer windowWidth={windowWidth}/>
      ) : (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 20}}>
          <RoomCarousel />
        </div>
      )*/}
    </div>
  )
}

const RoomsContainer = () => {
  return (
    <div className="room-card-container">
      <HomeRoom name="Blackgibbon Huone" img={blackGibbonRoom} price={"31-36"} />
      <HomeRoom name="Perhehuone" img={familyRoom2} price={"78-90"} />
      <HomeRoom name="Orangutan Huone" img={orangutanRoom} price={"31-36"} />
    </div>
  )
}

interface homeRoomProps {
  name: string;
  img: string;
  price: string;
}

const HomeRoom = ({ name, img, price }: homeRoomProps) => {
  return (
    <Card className="text-center" text="white" style={{ backgroundColor: '#05866e', border: 'none', /*width: '32rem', height: '32rem'*/ width: '90%' }}>
      <Card.Img variant="top" src={img} style={{ maxHeight: 400 }}/>
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

{/*<Container style={{paddingTop: 20}}>
          <Row>
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
        </Container>*/}

export default RoomsSection;