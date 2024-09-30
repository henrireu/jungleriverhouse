import JungleTrekCarousel from "../jungletrekCarousel";

const JungleTrekSection = () => {
  return (
    <div className="bg-color2 jungletrek-container"> 
      <div className="jungletrek-text" /*style={{ textAlign: 'center', paddingLeft: 50, paddingRight: 50}}*/>
        <h1 className="header1">SEIKKAILE VIIDAKOSSA</h1>
        <h5 className="header2">Haluatko kokea sademetsän villieläimien kanssa?</h5>
        <div style={{ marginBottom: 50, textAlign: 'center', maxWidth: 800}}>
          <p className="text1">
              Järjestämme toivomasi viidakkoretket halusitpa kokea päiväretken tai syventää kokemustasi yön yli kestävillä retkillä. Viidakkoretkemme tarjoavat sinulle uskomattoman kokemuksen yhteen maailman hienoimmista jäljellä olevista sademetsistä. Tervetuloa Gunung Lesuerin kansallispuistoon, Sumatralle
          </p>
        </div>
      </div>
      <JungleTrekCarousel />
    </div>
  )
}

export default JungleTrekSection;