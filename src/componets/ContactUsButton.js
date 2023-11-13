import React, { useState } from 'react';
import ContactUs from './ContactUs'; 

const ContactUsButton = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div>
      <button onClick={toggleContactForm}>Contact Us</button>
      {showContactForm && <ContactUs />} {/* Display the form if showContactForm is true */}
    </div>
  );
};

export default ContactUsButton;
