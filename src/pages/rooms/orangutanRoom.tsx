import '../../styles/roomPage.css';
import ContactFooter from '../../components/contactFooter';

import orangutanImage from '../../assets/images/rooms/orangutan-room.jpg';

const OrangutanRoom = () => {
  return (
    <div>
      <img src={orangutanImage}
        style={{
          position: 'relative',
          top: 0,
          left: 0, 
          width: '100%', 
          height: '100vh', 
          objectFit: 'cover', 
          zIndex: -1 
        }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',  // Keskitetään vertikaalisesti
        left: '50%', // Keskitetään horisontaalisesti
        transform: 'translate(-50%, -50%)',  // Tasataan keskelle
        color: 'white',  // Tekstin väri (esim. valkoinen, jotta se erottuu kuvasta)
        textAlign: 'center',
        zIndex: 1  // Asetetaan kuvan päälle
      }}>
        <h1>Orangutan Room</h1>
      </div>
      <ContactFooter />
    </div>
  )
}

export default OrangutanRoom;