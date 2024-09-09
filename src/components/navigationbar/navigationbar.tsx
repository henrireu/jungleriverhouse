import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import useWidth from "../../helpers/useWidth";

import video from '../../videos/jungle.mp4';
import '../../videos/video.css';
import '../../styles/NavigationBarContent.css';
import '../../index.css';
import logo from '../../images/logo.jpg';

const NavigationBar = () => {

  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted>
        <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <NavigationBarContent />
      </div>
    </div>
  )
}

const NavigationBarContent = () => {
  // koska NavBar onToggle ei toimi odotetusti niin täytyy selvittää manuaalisesti näytön leveys
  const windowWidth = useWidth();

  return (
    <>
    <Styles />
    <Navbar 
      bg="transparent"
      expand="lg" 
      variant="dark" 
      className="navbar-custom"
      style={{ paddingLeft: 20, paddingRight: 20}}
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
        <Navbar.Collapse className="justify-content-center" style={{ backgroundColor: windowWidth <= 992 ? '#343a40' : 'transparent', width: "100%" }}>
          <Nav /*className="me-auto"*/>
            <Button variant="flat" style={{}}>Home</Button>
            <Button variant="flat">About us</Button>
            <DropdownButton 
              id="dropdown-basic-button" 
              title="Rooms" 
              data-bs-theme="dark"
              variant="flat"
            >
              <Dropdown.Item>Orangutan Room</Dropdown.Item>
              <Dropdown.Item>Black Gibbon Room</Dropdown.Item>
              <Dropdown.Item>Family Room</Dropdown.Item>
            </DropdownButton>

            <DropdownButton 
              id="dropdown-basic-button" 
              title="Jungle Trek" 
              data-bs-theme="dark"
              variant="flat"
            >
              <Dropdown.Item>Half Day Jungle Trek</Dropdown.Item>
              <Dropdown.Item>One Day Jungle Trek</Dropdown.Item>
              <Dropdown.Item>2 Days Jungle Trek</Dropdown.Item>
              <Dropdown.Item>3 Days Jungle Trek</Dropdown.Item>
            </DropdownButton>
            <Button variant="flat">Contacts</Button>
            <Button variant="flat">Book Your Stay</Button>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

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

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }

    .dropdown-custom .dropdown-menu {
      background-color: #212529; /* Taustaväri dropdown-menu-listalle */
      border: none; /* Poistaa borderin */
    }

    .dropdown-custom .dropdown-item {
      color: white; /* Tekstin väri */
    }

    .dropdown-custom:hover .dropdown-item:hover {
      background-color: #343a40; /* Hover-efekti itemeille */
    }

    .navbar-custom {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #f8f9fa; /* Light border-bottom */
      width: 100%;
    }
    `}
    </style>
    </>
  )
}

export default NavigationBar;