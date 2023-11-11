import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
// import Diamondlogo from '../../src/assets/Diamondlogo.png'
import DiamondsLogo from '../assets/DiamondsLogo.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 392) {
        // console.log('Changing color - Scroll position:', window.scrollY);
        setIsSticky(true);
      } else {
        // console.log('Reverting color - Scroll position:', window.scrollY);
        setIsSticky(false);
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={ `${styles.nav} ${isSticky ? styles.sticky : ''}`}> 
    <nav className={styles.nav}>
      <Link to="/" className={styles.diamondSite}>
        <img src={DiamondsLogo} alt='Diamondlogo'/>
        </Link> 
      <ul className={styles.navUL}>
        {/* <li><Link to='/diamonds/Info' className={styles.info}>Info</Link></li> */}
        <li><Link to='/diamonds'>Diamonds</Link> </li>
        <li><Link to="/diamonds/new" className={styles.newDiamond}>Custom Diamond</Link> </li>
        <li><Link to='/diamonds/cart' className={styles.cart}> <AddShoppingCartOutlinedIcon size ={32}/></Link>
      </li>
       
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;