//import ButtonOutline from "../buttonOutline";
import Button from 'react-bootstrap/Button';

import bukitimg from '../../assets/images/jungle-river-house-bukit.jpg';  

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-image-container">
        <img src={bukitimg} alt="room image" className="welcome-image"/>
      </div>
      <div className="welcome-text">
        <h1 className="header1">Tervetuloa!</h1>
        <div style={{textAlign: 'left'}}>
          <p className="text1">
            Haluatko kokea sademetsän ja oman viidakkoseikkailusi luonnossa villieläimiä kanssa?
          </p>
          <p className="text1">
            Järjestämme toivomasi viidakkoretket halusitpa kokea päiväretken tai syventää kokemustasi yön yli kestävillä retkillä. Viidakkoretkemme tarjoavat sinulle uskomattoman kokemuksen yhteen maailman hienoimmista jäljellä olevista sademetsistä. Tervetuloa Gunung Lesuerin kansallispuistoon, Sumatralle
          </p>
          <p className="text1">
            Majoituspaikkamme tarjoaa sinulle viihtyisästi sisustetut huoneet monilla mukavuuksilla ja näköalan joelle. Hotellin yhteydessä on myös ravintola aivan joen rannalla, jossa voit nauttia hyvästä indonesialaisesta tai länsimaalaisesta ruoasta, juomista sekä viidakon tunnelmasta. Sijaintimme on ihan keskeisellä paikalla Bukit Lawangissa.
          </p>
          <div>
            <Button variant="outline-light">TIETOA MEISTÄ</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;