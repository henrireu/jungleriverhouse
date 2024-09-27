import JungleTrekCarousel from "../jungletrekCarousel";
import useWidth from "../../helpers/useWidth";

const JungleTrekSection = () => {
  const width = useWidth();
  return (
    <div className="bg-color2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingBottom: 100, width: '100%' }}>
      {width > 500 ? (
        <>
        <h1 className="header1">SEIKKAILE VIIDAKOSSA</h1>
        <h5 className="header1" style={{marginBottom: 50, color: 'white'}}>Haluatko kokea sademetsän villieläimien kanssa?</h5>
        </>
      ) : (
        <>
        <h3 className="header1">SEIKKAILE VIIDAKOSSA</h3>
        <h6 className="header1" style={{marginBottom: 50, color: 'white'}}>Haluatko kokea sademetsän?</h6>
        </>
      )}
      <JungleTrekCarousel />
    </div>
  )
}


export default JungleTrekSection;