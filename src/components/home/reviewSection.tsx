import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../../styles/carousels.css';
import '../../styles/home.css';

const ReviewSection = () => {
  return (
    <div className="review-container bg-color2" /*style={{ backgroundColor: '#05866e'}}*/>
      <div className="score-section">
        <div className="score-circle">
          <p className="score-value">9.2</p>
        </div>
        <p className="score-reviews">
            SCORE FROM 156 <br /> REVIEWS
        </p>
      </div>
      <div className="carousel-section">
        <h1 className="guest-say-title">Guests say: </h1>
        <ReviewCarousel />
        <div>
          <Button variant="outline-light" style={{ marginLeft: 10}}>READ FULL REVIEW</Button>
        </div>
      </div>
    </div>
  );
};
  
const ReviewCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };
  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <ReviewCard name="Lindy K, Spain" review="“The room is located just above the river bank and u have to cross a suspension bridge to get there. Nice view of the river and the forest. The main rain forest is touching the boundry of the lodge. It takes just about ten minutes to get in to the thick forest. The staff so friendly and helpful. We had the 2-day jungle trek with Jungle River house team, it was fantastic, we saw a lot of orangutans and other monkeys, the track was a great experience a lot more challenged that we expected. We could recommend this place for sure..”"/>
        <ReviewCard name="RIIKKA, FINLAND" review="“It was an amazing experience. We did 2 days jungle trek. The orang utan tour and the accommodation with jungle river house is excellent. We saw so many animals and the guides did an awesome job. We would 100% reccomend the package because it was unforgettable experience.”"/>
        <ReviewCard name="NELLY" review="“Amazing time doing the orangutan trek and elephant experience - both great adventures. Accommodation perfect with nature around , listening river sound and monkey wake you up in the morning 🙂 and the guide  were very friendly and helpful . Our guide Sani just amazing. We did 1N2D jungle trek and 1 day trip to Tangkahan. Would recommend to anyone who wants to see the jungle , book your stay by jungleriverhouse, the owner Jeanie so helpful, all of our questions always quck reply and she just organized everything in Bukit Lawang so perfectly as we wish. Thanks to great manager also Jery, great job he did”" />
        <ReviewCard name="JOHN, GERMANY" review="“Es war einfach wunderschön und alles Top👍🏼. Saubere Zimmer, sehr bequeme Bett und sehr sehr nette Personal. Die Zimmer sind direkt am Fluss, ein sehr schöner Ausblick direkt zum Dschungel…einfach Top”" />
      </Slider>
    </div>
  );
};

  interface ReviewProps {
    name: string;
    review: string;
  }
  
const ReviewCard = ({name, review}: ReviewProps) => {
  return (
    <Card style={{ backgroundColor: 'transparent', border: 'none'}}>
      <Card.Body>
        <h4 className="review-title">{name}</h4>
        <p className="review-text">{review}</p>
      </Card.Body>
    </Card>
  );
};
  
export default ReviewSection;