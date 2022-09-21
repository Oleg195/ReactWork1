import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home/home.js';
import User from "./user/user"
import Games from './games/games';
import Help from './help/help.js';
import Shop from './shop/shop.js';
import About from "./about/about";
import Company from "./Company/Company.js";
import Working from './Working/Working.js';
import facebook from 'https://www.facebook.com/';

class App extends React.Component{

  render() {
 
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="About/" element={<About />} />
        <Route path="Games/" element={<Games />} />
        <Route path='Help/' element={<Help />} />
        <Route path='Shop/' element={<Shop />} /> 
        <Route path='User/' element={<User />} />
        <Route path='Company/' element={<Company/>}/>
        <Route path='Working/' element={<Working />} />
        <Route path='/facebook' component={() => {
          window.location.href = 'https://www.facebook.com/'
      }}/>
      </Routes>

    )
  }     

}

export default App;