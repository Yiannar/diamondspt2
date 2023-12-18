import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import DiamondsLogo from '../assets/DiamondsLogo.png';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Login from './Login';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY >= 392);
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={DiamondsLogo} alt="Diamondlogo" />
        </Link>
        <ul className={styles.navUL}>
          <li>
            <Link to="/diamonds">Diamonds</Link>
          </li>
          <li>
            <Link to="/diamonds/new" className={styles.newDiamond}>
              Custom Diamond
            </Link>
          </li>
          <li>
          <Link to='/Login'> <PersonOutlineIcon size={32}/> </Link>
          </li>
          <li>
            <Link to="/diamonds/cart" className={styles.cart}>
              <AddShoppingCartOutlinedIcon size={32} />
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
