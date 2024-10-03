import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'react-bootstrap/Card';

import bird from '../images/jungletrek/bird.webp';
import blackmonkey from '../images/jungletrek/blackmonkey.webp';
import tiger from '../images/jungletrek/tiger.jpg';
import monkey from '../images/jungletrek/monkey.webp';
import orangutan from '../images/jungletrek/orangutan.jpg';

import Button from "react-bootstrap/Button";

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
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, 
          arrows: false
        }
      },
    ]
  };
  
  return (
    <div style={{ width: /*'90%'*/ '100%' }}>
      <Slider {...settings}>
        <TrekCard name="Helppo 3 tunnin viidakkoretki (sis koskenlasku)" img={bird} price="55" />
        <TrekCard name="Puolenpäivän viidakkoretki 6h (sis koskenlaskun)" img={blackmonkey} price="70" />
        <TrekCard name="Kahden päivän ja yhden yön viidakkoretki" img={tiger} price="120" />
        <TrekCard name="Kaksi yötä ja kolme päivää viidakossa" img={monkey} price="170" />
        <TrekCard name="Erikoistarjous kahdelle henglelle - 1 yö huoneessa + kahden päivän ja yhden yön viidakkoretki" img={orangutan} price="260" />
      </Slider>
    </div>
  ); 
}
  
const TrekCard = ({ name, img, price }: TrekCardProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Card /*bg="success"*/ text="white" className="text-center" style={{ width: '90%', backgroundColor: '#00695C', border: 'none' }}>
        <Card.Img variant="top" src={img} style={{ maxHeight: 400 }}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Card.Text>
              Hinta / hlö &nbsp;<strong style={{ fontSize: 25 }}>{price} €</strong>
            </Card.Text>
          </div>*/}
          <Card.Text>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Hinta / hlö &nbsp;<strong style={{ fontSize: 25 }}>{price} €</strong>
            </span>
          </Card.Text>
          <Button variant="outline-light">LISÄTIETOA</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JungleTrekCarousel;