import JungleTrekSection from '../components/home/jungleTrekSection';
import ReviewSection from '../components/home/reviewSection';
import ContactFooter from '../components/contactFooter';
import Welcome from '../components/home/welcomeSection';
import RoomsSection from '../components/home/roomsSection';
//import ContactSection from './contactSection';

const Home = () => {
  return (
    <div id="scroll-home" className="bg-color1 home-container">
      <Welcome />
      <JungleTrekSection />
      <RoomsSection />
      <ReviewSection />
      {/*<ContactSection />*/}
      <ContactFooter />
    </div>
  )
}
    
export default Home;