import tripadvisor from '../assets/images/logos/trip-advisor.png';

const ContactFooter = () => {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <p>Jungle River House © 2024 All Rights Reserved.</p>
        <p>Jl Orangutan, Bukit Lawang, North Sumatra, ID</p>
        <p>081375278600</p>
      </div>
      <a href="https://www.tripadvisor.com/Hotel_Review-g680012-d23295489-Reviews-Jungle_River_House-Bukit_Lawang_North_Sumatra_Sumatra.html" target="_blank" rel="noopener noreferrer">
        <img className="tripadvisor-logo" src={tripadvisor} alt="tripadvisor logo" />
      </a>
      <div className="follow-us-container">
        <div className="follow-us-header">
          <p>FOLLOW US <br/> (täytyy hankkia logot)</p>
        </div>
        <div className="logo-container">
          <div className="logo-circle">
            IG
          </div>
          <div className="logo-circle">
            BO
          </div>
          <div className="logo-circle">
            GO
          </div>
          <div className="logo-circle">
            TR
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter;