import JungleTrekCarousel from "../jungletrekCarousel";

const JungleTrekSection = () => {
  return (
    <div className="bg-color2 jungletrek-container"> 
      <div className="jungletrek-text" /*style={{ textAlign: 'center', paddingLeft: 50, paddingRight: 50}}*/>
        <h1 className="header1">SEIKKAILE VIIDAKOSSA</h1>
        <h5 className="header2">Haluatko kokea sademetsän villieläimien kanssa?</h5>
      </div>
      <JungleTrekCarousel />
    </div>
  )
}

export default JungleTrekSection;