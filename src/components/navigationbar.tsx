import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import useScrollPosition from '../helpers/useScrollPosition';
import video from '../videos/jungle2.mp4';
import '../styles/video.css';
import '../styles/NavigationBarContent.css';
import logo from '../images/logo.jpg';

import blackGibbonRoom from '../images/black-gibbon-room.jpg';
import familyRoom from '../images/family-room.webp';
import orantuganRoom from '../images/orangutan-room.jpg';

interface WindowWidthProps {
  windowWidth: number;
}

const NavigationBar: React.FC<WindowWidthProps> = ({ windowWidth }) => {

  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted>
        <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <NavigationBarContent windowWidth={windowWidth}/>
        <div style={{marginTop: 170, display: 'flex', gap: 300}}>
          <TextCard />
          {windowWidth > 950 && (
            <RoomCardGroup />
          )}
        </div>
      </div>
    </div>
  )
}

const RoomCardGroup = () => {
    const rooms = [
      { id: 1, name: 'Orantugan Room', image: orantuganRoom },
      { id: 2, name: 'Family Room', image: familyRoom },
      { id: 3, name: 'Black Gibbon Room', image: blackGibbonRoom }
    ];
  
    return (
      <Container style={{ width: 300}}>
        {rooms.map(room => (
          <div key={room.id} className="video-room-card">
          <Card className="mb-3" style={{ height: 80, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 8 }}>
            <Row >
              <Col md={4}>
                <Card.Img 
                  src={room.image} 
                  alt={`${room.name} image`} 
                  style={{ height: 60, width: 70, objectFit: 'cover', margin: '10px' }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title style={{ color: 'rgba(255, 255, 255, 0.5)'}}>{room.name}</Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          </div>
        ))}
      </Container>
    );
  };

const TextCard = () => {
  return (
    <Card className="text-center bg-transparent " style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Text className="fs-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          Koe unohtumaton kokemus Jungle River Housessa
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const NavigationBarContent: React.FC<WindowWidthProps> = ({ windowWidth }) => {
  // koska NavBar onToggle ei toimi odotetusti niin täytyy selvittää manuaalisesti näytön leveys

  //scroll position täytyy selvittää myös manuaalisesti
  const scrollPosition = useScrollPosition();

  const [showTrekMenu, setShowTrekMenu] = useState(false);
  const [showRoomMenu, setShowRoomMenu] = useState(false);

  return (
    <>
    <Styles />
    <Navbar 
      fixed="top"
      expand="xl" 
      variant="dark" 
      style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, background: scrollPosition < 140 ? 'transparent' : '#2F4F4F', borderBottom: '1px solid #f8f9fa' }}
    >
      <Container fluid>
        <Navbar.Brand className="text-light">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ borderRadius: 14}}
          /> {'  '}
          JUNGLE RIVER HOUSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" style={{ backgroundColor: windowWidth <= 1200 ? '#343a40' : 'transparent', width: "100%", marginTop: 10 }}>
          <Nav /*className="me-auto"*/>
            <Button variant="flat" size='lg'>Home</Button>
            <Button variant="flat" size='lg'>About us</Button>

            {windowWidth > 1200 ? (
              <DropdownButton 
              id="dropdown-basic-button" 
              size='lg'
              title="Rooms" 
              data-bs-theme="dark"
              variant="flat"
              show={showRoomMenu}
              onMouseEnter={() => setShowRoomMenu(true)}
              onMouseLeave={() => setShowRoomMenu(false)}
            >
              <Dropdown.Item>Orangutan Room</Dropdown.Item>
              <Dropdown.Item>Black Gibbon Room</Dropdown.Item>
              <Dropdown.Item>Family Room</Dropdown.Item>
            </DropdownButton>
            ) : (
              <Button variant="flat" size="lg">Rooms</Button>
            )}

            {windowWidth > 1200 ? (
              <DropdownButton 
              id="dropdown-basic-button" 
              size='lg'
              title="Jungle Trek" 
              data-bs-theme="dark"
              variant="flat"
              show={showTrekMenu}
              onMouseOver={() => setShowTrekMenu(true)}
              onMouseLeave={() => setShowTrekMenu(false)}
            >
              <Dropdown.Item>Half Day Jungle Trek</Dropdown.Item>
              <Dropdown.Item>One Day Jungle Trek</Dropdown.Item>
              <Dropdown.Item>2 Days Jungle Trek</Dropdown.Item>
              <Dropdown.Item>3 Days Jungle Trek</Dropdown.Item>
            </DropdownButton>
            ) : (
              <Button variant="flat" size="lg">Jungle Trek</Button>
            )}

            <Button variant="flat" size='lg'>Contacts</Button>
            <Button variant="flat" size='lg'>Book Your Stay</Button>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

// tässä yliajetaan bootstrap variantin teemaa..

const Styles = () => {
  return (
    <>
      <style type="text/css">
        {`
          .btn-flat {
            background-color: transparent;
            color: white;
            border: none;
          }

          .btn-flat:hover {
            background-color: #212529;
          }
        `}
      </style>
    </>
  )
}

export default NavigationBar;