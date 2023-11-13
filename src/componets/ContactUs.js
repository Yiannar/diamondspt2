import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
  });

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
    console.log(formData);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          id="fName"
          label="First Name"
          type="text"
          value={formData.fName}
          onChange={handleTextChange}
          placeholder="Jane"
          required
          fullWidth
        />
        <TextField
          id="lName"
          label="Last Name"
          type="text"
          value={formData.lName}
          onChange={handleTextChange}
          placeholder="Doe"
          required
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleTextChange}
          placeholder="Janedoe@gmail.com"
          required
          fullWidth
        />
        <TextField
          id="message"
          label="Message Us"
          type="text"
          value={formData.message}
          onChange={handleTextChange}
          placeholder="Your Message Here"
          fullWidth
          multiline
          rows={4}
        />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
