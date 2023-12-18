import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Edit from './pages/Edit'
import FourOFour from "./pages/FourOFour";
import Home from "./pages/HomePages"
import Show from "./pages/Show";
import NavBar from "./componets/NavBar";
import New from "./pages/New";
import Index from "./pages/Index";
import InfoPage from "./pages/InfoPage";
import Cart from "./componets/Cart";
import Checkout from './componets/Checkout'
import Footer from "./componets/Footer";
import ContactUs from "./componets/ContactUs";
import AboutDev from "./componets/AboutDev";
import Banner from "./componets/Banner";
import axios from "axios";
import {ShopContextProvider} from './context/diamond-context'
import ErrorBoundary from './ErrorBoundary';
import Login from "./componets/Login";

const API = process.env.REACT_APP_API_URL;

function App() {


  const [cart, setCart] = useState([])
  const [diamonds, setDiamonds] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(() => {
    const storedUserId = localStorage.getItem('userId');
    return storedUserId ? storedUserId : '';
  });

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  const handleLogin = (event) => {
    event.preventDefault();
    // Make API call to log in user
    setIsLoggedIn(true);
    setUsername('');
    setPassword('');
  };

  const handleLogout = (event) => {
    event.preventDefault();
    // Make API call to log out user
    setIsLoggedIn(false);
  };

  useEffect(() => {
    axios
    .get(`${API}/diamonds`)
    .then((res) => {
      setDiamonds(res.data);
    });
  }, []);
  

  return (
    <div className="App">
      <ErrorBoundary>
      <ShopContextProvider diamonds={diamonds} setDiamonds={setDiamonds}>
      <Router>
        <Banner/>
        <NavBar />
        <Routes>
          <Route/>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/userprofile/:id" />
          <Route path="/userprofile/edit"/> 
          <Route path="/login"
          element={
            <Login 
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
              userId={userId}
              setUserId={setUserId}/>
          }/>
          <Route path="/diamonds" element={<Index cart={cart} setCart={setCart}/>} />
          <Route path="/diamonds/new" element={<New cart={cart} setCart={setCart}/>} />
          <Route path="/diamonds/:id" element={<Show cart={cart} setCart={setCart}/>} />
          <Route path="/diamonds/:id/edit" element={<Edit />} />
          <Route path="/diamonds/Info" element={<InfoPage/>}/>
          <Route path="/diamonds/cart" element={<Cart cart={cart} setCart={setCart} diamonds={diamonds} setDiamonds={setDiamonds}/>}/>
          <Route path="/diamonds/checkout" element={<Checkout cart={cart} setCart={setCart}/>}/>
          <Route path="/diamonds/contactus" element={<ContactUs />}/> 
          {/* <Route path="/diamonds/AboutDev" element={<AboutDev/>}/> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
          <Footer/>
      </Router>
      </ShopContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;