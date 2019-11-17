import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Deals from './components/Deals'
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <Deals/>
      <ProductList />
    </div>
  );
}
