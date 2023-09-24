import { useState } from 'react';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [userInput, setUserInput] = useState([])

    const handleTextChange = (e)=>{
        setUserInput( e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventdefault()
    }
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FCFBF4',
    padding: '40px',
    textAlign: 'center',
  };

  const columnStyle = {
    flex: '1',
    padding: '10px',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    textAlign: 'center', 
  };


  const tableCellStyle = {
    textAlign: 'center',
  };

  const underline = {
    textDecoration: 'underline',
    color: "blue", 
  }

  return (
    <div>
      <footer>
        <div style={containerStyle}>
          {/* About Company */}
          <div style={columnStyle}>
            <h5 style={underline}>About company</h5>
            <p>
              This website demonstrates an e-commerce application about diamonds.
            </p>
            <p>
              * Disclaimer: You cannot purchase anything; this is for demonstration purposes only.*
            </p>
            <div>
              {/* Social icons */}
              {/* ... */}
            </div>
          </div>

          {/* Newsletter */}
          <div style={columnStyle}>
            <h5 style={underline}>Newsletter</h5>
            <form onSubmit={handleSubmit} >
              <input 
              type="text" 
              value={userInput}
              onChange={handleTextChange}
              placeholder='Janedoe@gmail.com'
               />
              <button type='submit'>Submit</button>
            </form>
            <h4 style={underline}><Link to='/diamonds/AboutDev'>About Developer</Link></h4>
          </div>

          {/* Opening Hours */}
          <div style={columnStyle}>
            <h5 style={underline}>Opening hours</h5>
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Mon - Thu:</td>
                  <td style={tableCellStyle}>8am - 9pm</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Fri - Sat:</td>
                  <td style={tableCellStyle}>8am - 1am</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Sunday:</td>
                  <td style={tableCellStyle}>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
