import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Deals from './components/Deals'
import ProductList from './components/ProductList'
import NewProduct from './components/New_Product'
import LogIn from './components/LogIn'
import { ProductProvider } from './context/ProductContext'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <LogIn />
      <Deals/>
    <ProductProvider>
      <NewProduct />
      <ProductList />
    </ProductProvider>
      
    </div>
  );
}
