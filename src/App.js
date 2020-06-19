import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './pages/Nav_Bar';
import HomePage from './pages/Home_Page';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
       < NavBar />
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path='/products' component = {Products}/>
        <Route exact path='/contact' component = {Contact}/>
        <Route exact path='/about' component = {About}/>
        </Switch>
              
    </div>
    </BrowserRouter>

  );
}

export default App;
