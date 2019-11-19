import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Deals from './components/Deals'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import Register from './components/Regsister'
import { ProductProvider } from './context/ProductContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



export default function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
          <Switch>
          <ProductProvider>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashboard" component={Dashboard}/>
          </ProductProvider>
          </Switch>
      </div>
    </Router>
  );
}
