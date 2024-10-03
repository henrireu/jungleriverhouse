import JungleTrekSection from './jungleTrekSection';
import ReviewSection from './reviewSection';
import ContactFooter from '../contactFooter';
import Welcome from './welcomeSection';
import RoomsSection from './roomsSection';
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