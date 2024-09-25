import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import blackGibbonRoom from '../images/rooms/black-gibbon-room.jpg';
import familyRoom from '../images/rooms/familyroom2.jpg';
import orangutanRoom from '../images/rooms/orangutan-room.jpg';

interface RoomCardProps {
  img: string;
  name: string;
  price: string;
}

const RoomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  };

  return (
      <div style={{ width: '85%' }}>
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
    <Card bg="success" text="light" className="text-center" style={{ width: '80%' }}>
      <Card.Img variant="top" src={img} style={{ }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Hinta / yö {price} €
        </Card.Text>
        <Button variant="outline-light">LISÄTIETOA</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default RoomCarousel;