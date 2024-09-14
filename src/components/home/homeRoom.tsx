import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface homeRoomProps {
  name: string;
  img: string;
  price: string;
  windowWidth: number;
}

const HomeRoom = ({ name, img, price, windowWidth }: homeRoomProps) => {
  return (
    <Card bg="success" text="light" className="text-center" style={{ width: windowWidth > 1400 ? '24rem' : '19rem', height: windowWidth > 1400 ? '29rem' : '23rem' }}>
      <Card.Img variant="top" src={img} style={{ height: 300 }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Hinta / yö {price} €
        </Card.Text>
        <Button variant="outline-light">LISÄTIETOA</Button>
      </Card.Body>
    </Card>
  );
}

export default HomeRoom;