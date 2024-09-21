import Carousel from 'react-bootstrap/Carousel';

import blackGibbonRoom from '../images/black-gibbon-room.jpg';
import familyRoom from '../images/familyroom2.jpg';
import orangutanRoom from '../images/orangutan-room.jpg';

import useWidth from '../helpers/useWidth';

interface ContentProps {
  img: string;
  name: string;
  prize: string;
  width: number;
}

const RoomCarousel = () => {
    const width = useWidth();
    return (
      <div style={{ zIndex: 0}}>
      <Carousel style={{ width: width > 700 ? '60vw' : '90vw' }}>
      <Carousel.Item>
        <CarouselContent 
          img={blackGibbonRoom}
          name="Blackgibbon Room"
          prize="31-36"
          width={width}
        />
      </Carousel.Item>
        <Carousel.Item>
          <CarouselContent 
            img={familyRoom}
            name="Family Room"
            prize="78-90"
            width={width}
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselContent 
            img={orangutanRoom}
            name="Orangutan Room"
            prize="31-36"
            width={width}
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

const CarouselContent = ({ img, name, prize, width }: ContentProps) => {
  return (
    <>
    <img src={img} className="d-block w-100" style={{ height: 'auto', maxHeight: 700, minHeight: 300, opacity: 0.9 }} alt="First slide" />
      
        {/* Otsikko yläosaan keskelle */}
        <div style={{
          position: 'absolute',
          top: '10%', /* Vähän matkaa ylhäältä */
          left: '50%', /* Keskitetään vaakasuunnassa */
          transform: 'translateX(-50%)', /* Siirretään elementtiä keskipisteeseen */
          padding: '10px 20px',
          color: 'white',
        }}>
          {width > 700 ? (
            <h1>{name}</h1>
          ): (
            <h3>{name}</h3>
          )}
        </div>
      
        {/* Muu teksti keskelle kuvaa */}
        <div style={{
          position: 'absolute',
          top: '60%', /* Keskitetään pystysuunnassa */
          left: '50%', /* Keskitetään vaakasuunnassa */
          transform: 'translate(-50%, -50%)', /* Siirretään elementtiä keskipisteeseen */
          padding: '10px 20px',
          color: 'white'
        }}>
          <p className="fs-5">Per night from</p>
          <h3 style={{ color: 'orange' }}>{prize} €</h3>
        </div>
        </>
  )
}

export default RoomCarousel;