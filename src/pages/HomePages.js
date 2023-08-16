import React from 'react';
import axios from "axios"
import {useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from './cards.module.css'
// import styles from './homePage.module.css'

const API = process.env.REACT_APP_API_URL

const HomePages = () => {
const [diamond, setDiamond] = useState([])
const { id } = useParams()

useEffect(()=>{
    axios
    .get(`${API}/diamonds/${id}`)
    .then((response)=>{
      
        setDiamond(response.data)
    })
    .catch((c)=>{
        console.warn('catch', c)
    })
}, [id])

    return (
        <div>
            <Link to='/diamonds'>
                <h1>Welcome to the Diamonds App</h1>
            </Link>
            <div className={styles.cardGroup}>
            <div className={styles.card} >
            <img className={styles.cardImgTop} src='https://st4.depositphotos.com/1060916/19764/i/450/depositphotos_197649048-stock-photo-large-diamond-jewel-image-white.jpg' alt='Card image'/>
                <h5>Princess Diamond</h5>
                <p className={styles.cardBody}>Officia dolore cupidatat culpa ipsum esse officia ea dolor minim veniam velit consequat. Ad ex aliquip adipisicing proident laboris mollit consectetur nisi. Eu et eu reprehenderit consectetur id amet Lorem dolor consectetur reprehenderit occaecat.</p>
                <a href='#' className='btn btn-primary'>View</a>
            </div>
              <div className={styles.card} >
                <img className={styles.cardImgTop} src='https://st4.depositphotos.com/1060916/19764/i/450/depositphotos_197649048-stock-photo-large-diamond-jewel-image-white.jpg' alt='Card image'/>
                <h5>Princess Diamond</h5>
                <p className={styles.cardBody}>Officia dolore cupidatat culpa ipsum esse officia ea dolor minim veniam velit consequat. Ad ex aliquip adipisicing proident laboris mollit consectetur nisi. Eu et eu reprehenderit consectetur id amet Lorem dolor consectetur reprehenderit occaecat.</p>
                <a href='#' className='btn btn-primary'>View</a>
            </div>
              <div className={styles.card} >
                <img className={styles.cardImgTop} src='https://st4.depositphotos.com/1060916/19764/i/450/depositphotos_197649048-stock-photo-large-diamond-jewel-image-white.jpg' alt='Card image'/>
                <h5>Princess Diamond</h5>
                <p className={styles.cardBody}>Officia dolore cupidatat culpa ipsum esse officia ea dolor minim veniam velit consequat. Ad ex aliquip adipisicing proident laboris mollit consectetur nisi. Eu et eu reprehenderit consectetur id amet Lorem dolor consectetur reprehenderit occaecat.</p>
                <a href='#' className='btn btn-primary'>View</a>
            </div>
            </div>
        </div>
    );
};

export default HomePages;