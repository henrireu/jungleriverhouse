import Card from "react-bootstrap/Card";

import ContactFooter from "../components/contactFooter";

const Rooms = () => {
  return (
    <div style={{ backgroundColor: '#00695C', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className="header1">Our Rooms</h1>
      <RoomDescriptionCard />
      {/*testi divi*/}
      <div style={{ minHeight: '100vh', backgroundColor: 'green'}}>
      </div>
      <ContactFooter />
    </div>
  )
}

const RoomDescriptionCard = () => {
  return (
    <Card className="text-center bg-transparent" style={{ border: 'none', width: '70%'}}>
      <Card.Body>
        <p className="text1">
        In addition to its prime location overlooking the river, our hotel offers 4 stylish rooms and a familyroom with a range of high-end, 
        comfortable amenities, including a tranquil sleeping experience and free Wi-Fi. It is located directly at the river and offers a stunning view all across it. 
        It has a full glass-front and a beautiful private balcony to relax and enjoy the view. 
        The Bungalows have private access and western style bathrooms as well as hot shower and air-conditioning. 
        A hotel experience to delight all the senses Our rooms are designed to offer you a personalized and comfortable experience with a touch of luxury. 
        You can relax in your own living room, right in amongst the rainforests natural wonders.
        </p>
        <Card.Text className="fs-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
        Black gibbon room is located on an elevated floor , so you can enjoy the view directly from the bed. Familyroom has 3 double beds, bathroom, toilet and dining table. 
        All the rooms have a terrace from where you can enjoy the river and the forest views. The room is also very safe and comfortable with private bathroom, shower and hot water.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};



export default Rooms;