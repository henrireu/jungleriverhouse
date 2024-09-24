import JungleTrekCarousel from "../jungletrekCarousel";

const JungleTrekSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingBottom: 100, width: '100%' }}>
      <h2 className= "text-light" style={{}}>SEIKKAILE VIIDAKOSSA</h2>
      <h5 className="text-light" style={{marginBottom: 50}}>Haluatko kokea sademetsän villieläimien kanssa?</h5>
      <JungleTrekCarousel />
    </div>
  )
}

export default JungleTrekSection;