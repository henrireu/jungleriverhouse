import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import useScrollPosition from '../helpers/useScrollPosition';
import '../styles/NavigationBarContent.css';
import logo from '../images/logo.jpg';


interface WindowWidthProps {
  windowWidth: number;
}

// poster kuva täytyy vaihtaa vielä. eli kuva mikä näkyy kun videota vielä ladataan..

const NavigationBar: React.FC<WindowWidthProps> = ({ windowWidth }) => {
  return (
    <>
      <NavigationBarContent windowWidth={windowWidth}/>
      {/*<div style={{marginTop: 170, display: 'flex', gap: 300}}>
        <TextCard />
        {windowWidth > 950 && (
          <RoomCardGroup />
        )}
      </div>*/}
    </>
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
      className="navbar-custom"
      style={{ background: scrollPosition < 110 ? 'transparent' : '#2F4F4F' }}
      
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
                  <Dropdown.Item>Orangutan Room</Dropdown.Item>
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
      </Container>
    </Navbar>
    </>
  )
}
{/*style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, background: scrollPosition < 110 ? 'transparent' : '#2F4F4F', borderBottom: '1px solid #f8f9fa', zIndex: 1090 }}*/}
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
          }

          .z-index1090 {
            z-index:1090 !important;
          }
        `}
      </style>
    </>
  )
}

export default NavigationBar;