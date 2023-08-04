import React from 'react';
import { Link } from 'react-router-dom'
import styles from './cards.module.css'


const homePage = () => {
    return (
        <div>
            <Link to='/diamonds'>
                <h1>Welcome to the Diamonds App</h1>
                <img className='homeImg' src='https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZHN8ZW58MHx8MHx8&w=1000&q=80' alt=' diamondbackground'></img>
            </Link>
            <div className={styles.card} >
                <img className={styles.cardImgTop} src='https://st4.depositphotos.com/1060916/19764/i/450/depositphotos_197649048-stock-photo-large-diamond-jewel-image-white.jpg' alt='Card image'/>
                <h5>Princess Diamond</h5>
                <p>lorem ipsum</p>
            </div>
            
        </div>
    );
};

export default homePage;