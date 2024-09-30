import JungleTrekCarousel from "../jungletrekCarousel";
import useWidth from "../../helpers/useWidth";

const JungleTrekSection = () => {
  const width = useWidth();
  return (
    <div className="bg-color2 jungletrek-container"> 
      {width > 500 ? (
        <div style={{ textAlign: 'center', paddingLeft: 50, paddingRight: 50}}>
          <h1 className="header1">SEIKKAILE VIIDAKOSSA</h1>
          <h5 className="header1" style={{marginBottom: 50 }}>Haluatko kokea sademetsän villieläimien kanssa?</h5>
          <div style={{ marginBottom: 50, textAlign: 'center', maxWidth: 800}}>
            <p className="text1">
              Järjestämme toivomasi viidakkoretket halusitpa kokea päiväretken tai syventää kokemustasi yön yli kestävillä retkillä. Viidakkoretkemme tarjoavat sinulle uskomattoman kokemuksen yhteen maailman hienoimmista jäljellä olevista sademetsistä. Tervetuloa Gunung Lesuerin kansallispuistoon, Sumatralle
            </p>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', paddingLeft: 50, paddingRight: 50}}>
          <h3 className="header1">SEIKKAILE VIIDAKOSSA</h3>
          <h6 className="header1" style={{marginBottom: 50 }}>Haluatko kokea sademetsän?</h6>
          <div style={{ marginBottom: 50, textAlign: 'center', maxWidth: 800}}>
            <p className="text1">
              Järjestämme toivomasi viidakkoretket halusitpa kokea päiväretken tai syventää kokemustasi yön yli kestävillä retkillä. Viidakkoretkemme tarjoavat sinulle uskomattoman kokemuksen yhteen maailman hienoimmista jäljellä olevista sademetsistä. Tervetuloa Gunung Lesuerin kansallispuistoon, Sumatralle
            </p>
          </div>
        </div>
      )}
      <JungleTrekCarousel />
    </div>
  )
}


export default JungleTrekSection;