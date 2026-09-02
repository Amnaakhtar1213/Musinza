 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

 import './App.css'
import Header from './components/Header/Head.jsx'
import Hero from './components/Hero/Hero.jsx'
import Muahmuah from './pages/Muahmuah.jsx'
import Beauty from './pages/Beauty.jsx'
import Best from './pages/Beauty.jsx'
import Musinsa from './pages/Musinsa.jsx'
import Fashion from './pages/Fashion.jsx'
import Members from './pages/Members.jsx'
import New from './pages/New.jsx'
import Sale from './pages/Sale.jsx'
import Snap from './pages/Snap.jsx'

import Accessories from './pages/Accessories.jsx'
import Bags from './pages/Bags.jsx'
import Hoodies from './pages/Hoodies.jsx'
import Pants from './pages/Pants.jsx'
import Shirts from './pages/Shirts.jsx'
import Shoes from './pages/Shoes.jsx'
import Sports from './pages/Sports.jsx'

import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Search from './pages/Search.jsx'

 import BottomHeader from "./components/Header/BotHeader.jsx";

function App() { 
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if(savedUser) setUser(JSON.parse(savedUser));
}, []);

useEffect(() => {
  if(user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user")
  }
}, [user]);

  const [favorite, setFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem("favorite");
    return savedFavorite ? JSON.parse(savedFavorite) : {}
  });

  const [favoriteCount, setFavoriteCount] = useState(
    Object.values(favorite).filter(Boolean).length
  );
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
    setFavoriteCount(Object.values(favorite).filter(Boolean).length);
  }, [favorite])


  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist]);


  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  })
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const toggleFavorite = (id, product) => {
    setFavorite((prev) => {
      const isFavorite = !prev[id];
      const newFavorite = { ...prev, [id]: isFavorite };

      // update count
      // setFavoriteCount(Object.values(newFavorite).filter(Boolean).length);

      if(isFavorite) {
        setWishlist((prevWishlist) => {
          if (!prevWishlist.find((item) => item.id === product.id)) {
             return [...prevWishlist, product]
          }
          return prevWishlist;
        })
      } else {
        setWishlist((prevWishlist) => 
        prevWishlist.filter((item) => item.id !== product.id)
      )
      }

      return newFavorite;
    });
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  }

const removeFromCart = (id) => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== id));
};



   return (
    <Router basename="/Musinza">
      <Header favoriteCount={favoriteCount} cart={cart} wishlist={wishlist} user={user} setUser={setUser} open={open} setOpen={setOpen}/>
      <Routes>
          <Route path="/" element={<Hero favorite={favorite} toggleFavorite={toggleFavorite} />} />
          <Route path="/muahmuah" element={<Muahmuah favorite={favorite} toggleFavorite={toggleFavorite} setFavorite={setFavorite} />} />
         <Route path="/beauty" element={<Beauty favorite={favorite} toggleFavorite={toggleFavorite}/>} /> 
         
          <Route path="/musinsa" element={<Musinsa favorite={favorite} toggleFavorite={toggleFavorite}/>} />
         <Route path="/fashion" element={<Fashion favorite={favorite} toggleFavorite={toggleFavorite}/>} /> 
          <Route path="/members" element={<Members favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/new" element={<New favorite={favorite} toggleFavorite={toggleFavorite}/>} /> 
          <Route path="/sale" element={<Sale favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/snap" element={<Snap favorite={favorite} toggleFavorite={toggleFavorite}/>} />

          <Route path="/shirts" element={<Shirts favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/pants" element={<Pants favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/hoodies" element={<Hoodies favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/shoes" element={<Shoes favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/bags" element={<Bags favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/accessories" element={<Accessories favorite={favorite} toggleFavorite={toggleFavorite}/>} />

          <Route path="/sports" element={<Sports favorite={favorite} toggleFavorite={toggleFavorite}/>} />
           <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/Wishlist" element={<Wishlist wishlist={wishlist} favorite={favorite} toggleFavorite={toggleFavorite} addToCart={addToCart} />} />
          <Route path="/search" element={<Search favorite={favorite} toggleFavorite={toggleFavorite} addToCart={addToCart} /> }/>
     </Routes>
          <BottomHeader favorite={favorite} toggleFavorite={toggleFavorite}  />
    </Router>
  )
}


export default App
