import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Diamondlogo from '../../src/assets/Diamondlogo.png'

const NavBar = () => {
  return (
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
  );
};

export default NavBar;