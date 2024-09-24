import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import bird from '../images/jungletrek/bird.webp';
import blackmonkey from '../images/jungletrek/blackmonkey.webp';
import tiger from '../images/jungletrek/tiger.jpg';
import monkey from '../images/jungletrek/monkey.webp';
import orangutan from '../images/jungletrek/orangutan.jpg';

import '../styles/carousels.css';

interface TrekCardProps {
  name: string
  img: string,
  price: string
}

const JungleTrekCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
          }
        },
      ]
    };
  
    return (
        <div style={{ width: '90%' }}>
          <Slider {...settings}>
            <TrekCard name="Helppo 3 tunnin viidakkoretki (sis koskenlasku)" img={bird} price="55" />
            <TrekCard name="Puolenpäivän viidakkoretki 6h (sis koskenlaskun)" img={blackmonkey} price="70" />
            <TrekCard name="Kahden päivän ja yhden yön viidakkoretki" img={tiger} price="120" />
            <TrekCard name="Kaksi yötä ja kolme päivää viidakossa" img={monkey} price="170" />
            <TrekCard name="Erikoistarjous kahdelle henglelle - 1 yo huoneessa + kahden päivän ja yhden yön viidakkoretki" img={orangutan} price="260" />
          </Slider>
        </div>
      );
  }
  
  const TrekCard = ({ name, img, price }: TrekCardProps) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Card bg="success" text="light" className="text-center" style={{ width: '80%' }}>
        <Card.Img variant="top" src={img} style={{  }}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Hinta / hlö {price} €
          </Card.Text>
          <Button variant="outline-light">LISÄTIETOA</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }

export default JungleTrekCarousel;