import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import blackGibbonRoom from '../assets/images/rooms/black-gibbon-room.jpg';
import familyRoom from '../assets/images/rooms/familyroom2.jpg';
import orangutanRoom from '../assets/images/rooms/orangutan-room.jpg';

interface RoomCardProps {
  img: string;
  name: string;
  price: string;
}

const RoomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, 
    responsive: [
      {
        breakpoint: 850, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  };

  return (
    <div style={{ width: /*'90%'*/ '100%' }}>
      <Slider {...settings}>
        <RoomCard name="Blackgibbon Room" img={blackGibbonRoom} price="31-36" />
        <RoomCard name="Family Room" img={familyRoom} price="78-90" />
        <RoomCard name="Orangutan Room" img={orangutanRoom} price="31-36" />
      </Slider>
    </div>
  );
}
 
const RoomCard = ({ name, img, price }: RoomCardProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Card className="text-center" text="white" style={{ width: '90%', backgroundColor: '#05866e' }}>
        <Card.Img variant="top" src={img} style={{ maxHeight: 400 }}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Hinta / yö &nbsp;<strong style={{ fontSize: 25 }}>{price} €</strong>
            </span>
          </Card.Text>
          <Button variant="outline-light">LISÄTIETOA</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RoomCarousel;