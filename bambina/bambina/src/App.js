import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from "./components/NavBarr";
import ItemListContainer from "./components/items/ItemListContainer";



export default function App() {
  return (
    <>
    <NavBarr />
    <div className="d-flex justify-content-center">
      <ItemListContainer/>
    </div>
    </>
  );
}

