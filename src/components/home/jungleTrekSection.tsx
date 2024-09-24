import JungleTrekCarousel from "../jungletrekCarousel";
import useWidth from "../../helpers/useWidth";

const JungleTrekSection = () => {
  const width = useWidth();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingBottom: 100, width: '100%' }}>
      {width > 500 ? (
        <>
        <h2 className= "text-light">SEIKKAILE VIIDAKOSSA</h2>
        <h5 className="text-light" style={{marginBottom: 50}}>Haluatko kokea sademetsän villieläimien kanssa?</h5>
        </>
      ) : (
        <>
        <h3 className= "text-light">SEIKKAILE VIIDAKOSSA</h3>
        <h6 className="text-light" style={{marginBottom: 50}}>Haluatko kokea sademetsän?</h6>
        </>
      )}
      <JungleTrekCarousel />
    </div>
  )
}

export default JungleTrekSection;