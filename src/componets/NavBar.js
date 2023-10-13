import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Diamondlogo from '../../src/assets/Diamondlogo.png'

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log('Adding sticky class');
        setIsSticky(true);
      } else {
        console.log('Removing sticky class');
        setIsSticky(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}> 
    <nav className={styles.nav}>
      <Link to="/" className={styles.diamondSite}>
        <img src={Diamondlogo} alt='Diamondlogo'/>
        </Link> 
      <ul className={styles.navUL}>
        <li><Link to='/diamonds/Info' className={styles.info}>Info</Link></li>
        <li><Link to='/diamonds'>Diamonds</Link> </li>
        <li><Link to="/diamonds/new" className={styles.newDiamond}>Custom Diamond</Link> </li>
        <li><Link to='/diamonds/cart' className={styles.cart}>Cart</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;