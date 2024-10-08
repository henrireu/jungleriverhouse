import { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';

import useScrollPosition from '../helpers/useScrollPosition';
import '../styles/NavigationBarContent.css';
import hotelLogo from '../assets/images/logos/hotel-logo.jpg';

//import instagram from '../images/instagram.png';
//import whatsapp from '../images/whatsapp.png';


interface WindowWidthProps {
  windowWidth: number;
}

//tällä hetkellä tulee virheilmoitus: console.js:288 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
// saat sen pois kun käytät buttonissa onClick ja useNavigatea eikä suoraan linkkiä

const NavigationBar: React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <>
      <NavigationBarContent windowWidth={windowWidth}/>
    </>
  )
}

const NavigationBarContent: React.FC<WindowWidthProps> = ({ windowWidth }) => {
  const navigate = useNavigate();
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
        className="navbar-custom"
        style={{ background: scrollPosition < 110 ? 'transparent' : '#2F4F4F' /*'#00695C'*/ }} 
      
      >
        <Container fluid>
          <Navbar.Brand className="text-light custom-brand">
            <img
              alt=""
              src={hotelLogo}
              //width="30"
              //height="30"
              className="d-inline-block align-top custom-image"
              //style={{ borderRadius: 14 }}
            /> {'  '}
          JUNGLE RIVER HOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center z-index1090" style={{ backgroundColor: windowWidth < 1200 ? '#343a40' : 'transparent', width: "100%", marginTop: 10 }}>
            <Nav /*className="me-auto"*/>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="flat" size='lg'>Home</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="flat" size='lg'>
                About us
                </Button>
              </Link>
              {windowWidth > 1200 ? (
                <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit'}}>
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
                    <Dropdown.Item onClick={() => navigate('/rooms/orangutan-room')}>Orangutan Room</Dropdown.Item>
                    <Dropdown.Item>Black Gibbon Room</Dropdown.Item>
                    <Dropdown.Item>Family Room</Dropdown.Item>
                  </DropdownButton>
                </Link>
              ) : (
                <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit'}}>
                  <Button variant="flat" size="lg">Rooms</Button>
                </Link>
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
          {/*logo osio */}
          {/*<div style={{ height: 60, display: 'flex', gap: 20 }}>
            <img src={instagram} alt="IG" style={{ height: 25, width: 25}}/>
            <img src={whatsapp} alt="Whatsapp" style={{ height: 25, width: 25}}/>
          </div>*/}
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

          .navbar-custom {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
            border-bottom: 1px solid #f8f9fa;
            z-index: 1090 !important;
            height: 80px;
          }

          .custom-brand {
            font-size: 20px;
          }

          .custom-image {
            border-radius: 14px;
            height: 30px;
            width: 30px;
          }

          @media (max-width: 400px) {
            .navbar-custom {
              padding-left: 5px;
              padding-right: 5px;
            }

            .custom-brand {
              font-size: 18px;
            }

            .custom-image {
              height: 26px;
              width: 26px;
            }

          }
        `}
      </style>
    </>
  )
}

export default NavigationBar;