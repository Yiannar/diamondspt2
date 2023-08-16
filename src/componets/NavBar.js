import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.diamondSite}>Diamond</Link> 
      <ul className={styles.navUL}>
        <li><Link to='/diamonds/Info' className={styles.info}>Info</Link></li>
        <li><Link to='/diamonds'>Diamonds</Link> </li>
        <li><Link to="/diamonds/new" className={styles.newDiamond}>Custom Diamond</Link> </li>
        <li><Link to="/diamonds/AboutDev" className={styles.aboutDev}>About Dev</Link> </li>
      </ul>
    </nav>
  );
};

export default NavBar;