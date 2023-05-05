import React, {useState} from 'react';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      // TODO: add code to send form data to server
      setName('');
      setEmail('');
      setMessage('');
    };
  return (
    <footer>
      <div className="company-links">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Vision</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Jobs</a></li>
        </ul>
      </div>
      <div className="resources-links">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Infographics</a></li>
        </ul>
      </div>
      <div className="customer-service-links">
        <h4>Customer Service</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="form-container">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Subject"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className='form-button'>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
