
import React, {Component} from "react";
import AppRouting from "../app-routing";
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

          <li><Link to="/">Home</Link></li>{/* новости-карусель */}
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Games">Games</Link></li>{/* игры */}
        </div>
        <div class="mmm2">           
        <ul>

          <li><Link to="/help">Поддержка</Link></li>
          <li><Link to="/user">Моя учетная запись</Link></li>
        </ul></div>

      </nav>
    </header>
    <main>
      <h4>Routes Result</h4>
      <AppRouting />

    </main>
          <Footer/>
  </div>
  )
}
}


export default App;