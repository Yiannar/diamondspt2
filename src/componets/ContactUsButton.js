import React, { useState } from 'react';
import ContactUs from './ContactUs'; 
import Button from '@mui/material/Button';
import './ContactUsButton.css';

const ContactUsButton = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div>
      <Button className='contact-us-button' onClick={toggleContactForm}>Contact Us</Button>
      {showContactForm && <ContactUs />} {/* Display the form if showContactForm is true */}
    </div>
  );
};

export default ContactUsButton;
