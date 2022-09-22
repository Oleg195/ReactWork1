
import React, {Component} from "react";
import AppRouting from "../app-routing";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "../footer/footer";
import './styleapp.css';

class App extends Component {

  render() {

    return (    
  <div className="app">

    <header className='menu'>
      <nav className='content'>
      <div class="logotip">
        <Link to ='/'><img class="logos" src="https://gamenet.ru/images/header/logo.png"/></Link></div>
        <div class="mmm1">

          <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>{/* новости-карусель */}
          <li><Link to="/Shop"><FontAwesomeIcon icon={faCartShopping}/></Link></li>
          <li><Link to="/Games"><FontAwesomeIcon icon={faGamepad}/></Link></li>{/* игры */}
        </div>
        <div class="mmm2">           
        <ul>

          <li><Link to="/help"> <FontAwesomeIcon icon={faQuestion}/></Link></li>
          <li><Link to="/user"><FontAwesomeIcon icon={faUser}/></Link></li>
        </ul></div>

      </nav>
    </header>
    <main>

      <AppRouting />

    </main>
          <Footer/>
  </div>
  )
}
}


export default App;