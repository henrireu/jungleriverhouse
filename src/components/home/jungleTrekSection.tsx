/* eslint-disable no-irregular-whitespace */

//import JungleTrekCarousel from "../jungletrekCarousel";

/*const JungleTrekSection = () => {
  return (
    <div className="bg-color2 jungletrek-container"> 
      <div className="jungletrek-text" /*style={{ textAlign: 'center', paddingLeft: 50, paddingRight: 50}}*/ /*>
        <h1 className="header1">SEIKKAILE VIIDAKOSSA</h1>
        <h5 className="header2">Haluatko kokea sademetsän villieläimien kanssa?</h5>
      </div>
      <JungleTrekCarousel />
    </div>
  )
}*/

import Button from 'react-bootstrap/Button';

//import bird from '../../images/jungletrek/bird.webp';
import blackmonkey from '../../images/jungletrek/blackmonkey.webp';
//import tiger from '../../images/jungletrek/tiger.jpg';
//import monkey from '../../images/jungletrek/monkey.webp';
//import orangutan from '../../images/jungletrek/orangutan.jpg';

const JungleTrekSection = () => {
  return (
    <div className="jungletrek-container bg-color2">
      <div className="jungletrek-text">
        <h1 className="header1">VIIDAKKORETKET</h1>
        <p className="text1"><strong>Oletko valmis viidakkoretkelle?</strong></p>
        <p className="text1">Täältä löydät lisätietoa tarjolla olevista viidakkoretkistä Gunung Leuserin kansallispuistoon Bukit Lawangissa. Viidakossa voit tavata eri eläinlajeja kuten apinoita, kilpikonnia, lintuja ja tottakai Orankeja niiden luonnollisessa elinympäristössä. Meidän kokeneet ja koulutetut sekä sertifioidut oppaamme johdattavat sinut uskomattomalle viidakkoseikkailulle yhteen maailman hienoimmista jäljellä olevista viidakoissa. Alta löydät tiedot tarjolla olevista viidakkoretkistä ja niiden sisällöistä sekä kustannuksista.</p>
        <p className="text1">Järjestämme viidakkoretkiä Gunung Leuserin kansallispuiston sademetsään. Viidakkoretkemme tehdään yhteistyössä paikallisen yhteisön ja kokeneiden englantia puhuvien oppaiden kanssa varmistaakseen ​​retkemme kunnioittavat ja suojelevat Gunung-Leuserin kansallispuistoa ja monia harvinaisia ​​ja uhanalaisia ​​eläimiä, jotka kutsuvat puistoa kodikseen.</p>
        <div>
          <Button variant="outline-light">KATSO RETKET</Button>
        </div>
      </div>
      <div className="jungletrek-carousel">
        <img src={blackmonkey} alt="tiger" className="jungletrek-image"/>
      </div>
    </div>
  )
}

export default JungleTrekSection;