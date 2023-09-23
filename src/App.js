import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from './pages/Edit'
import FourOFour from "./pages/FourOFour";
import Home from "./pages/HomePages"
import Show from "./pages/Show";
import NavBar from "./componets/NavBar";
import New from "./pages/New";
import Index from "./pages/Index";
import Info from "./pages/Info";
import Cart from "./componets/Cart";
import Checkout from './componets/Checkout'
import Footer from "./componets/Footer";
import "./global.css"
import { useState } from "react";
import ContactUs from "./componets/ContactUs";
import AboutDev from "./componets/AboutDev";

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Index cart={cart} setCart={setCart}/>} />
          <Route path="/diamonds/new" element={<New />} />
          <Route path="/diamonds/:id" element={<Show />} />
          <Route path="/diamonds/:id/edit" element={<Edit />} />
          <Route path="/diamonds/Info" element={<Info/>}/>
          <Route path="/diamonds/cart" element={<Cart cart={cart}/>}/>
          <Route path="/diamonds/checkout" element={<Checkout cart={cart}/>}/>
          <Route path="/diamonds/contactus" element={<ContactUs />}/> 
          <Route path="/diamonds/AboutDev" element={<AboutDev/>}/>
          <Route path="*" elememt={<FourOFour />} />
        </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;