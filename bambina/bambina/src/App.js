import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from "./components/NavBarr";
import ItemListContainer from "./components/items/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer";



export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBarr />
      <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/details" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

