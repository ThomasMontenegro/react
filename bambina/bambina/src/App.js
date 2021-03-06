import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from "./components/NavBarr";
import ItemListContainer from "./components/items/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";



export default function App() {
  
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <NavBarr/>
      <Routes>
      <Route exact path="/Checkout" element={<Checkout/>}/>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

