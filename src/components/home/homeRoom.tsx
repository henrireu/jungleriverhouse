import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface homeRoomProps {
  name: string;
  img: string;
  price: string;
}

const HomeRoom = ({ name, img, price }: homeRoomProps) => {
  return (
    <Card bg="success" text="light" className="text-center" style={{ width: '24rem', height: '29rem' }}>
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