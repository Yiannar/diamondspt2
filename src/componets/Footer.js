import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import InfoPage from '../pages/InfoPage';
import Info from '../pages/Info';

const Footer = () => {
    const [userInput, setUserInput] = useState([])

    const handleTextChange = (e)=>{
        setUserInput( e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

 
  return (
    
      <footer>
        <div className='footer-container'>
          {/* About Company */}
          <div className='column'>
            <h5 className='underline'>About company</h5>
            <p>
              This website demonstrates an e-commerce application about diamonds.
            </p>
            <p>
              * Disclaimer: You cannot purchase anything; this is for demonstration purposes only.*
            </p>
            <Link to={Info}> Diamond Information</Link>
            <div>
              {/* Social icons */}
              {/* ... */}
            </div>
          </div>

          {/* Newsletter */}
          <div className='column'>
            <h5 className='underline'>Newsletter</h5>
            <form onSubmit={handleSubmit} >
              <input 
              type="text" 
              value={userInput}
              onChange={handleTextChange}
              placeholder='Janedoe@gmail.com'
               />
              <button type='submit'>Submit</button>
            </form>
            <h4 className='underline'><Link to='/diamonds/AboutDev'>About Developer</Link></h4>
          </div>

          {/* Opening Hours */}
          <div className='column'>
            <h5 className='underline'>Opening hours</h5>
            <table className='tableStyle'>
              <tbody>
                <tr>
                  <td className='tableCellStyle'>Mon - Thu:</td>
                  <td className='tableCellStyle'>8am - 9pm</td>
                </tr>
                <tr>
                  <td className='tableCellStyle'>Fri - Sat:</td>
                  <td className='tableCellStyle'>8am - 1am</td>
                </tr>
                <tr>
                  <td className='tableCellStyle'>Sunday:</td>
                  <td className='tableCellStyle'>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
