import React, { Component } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Dropdown1 from './Dropdown1';





class Navbar extends Component {

  state = { clicked: false, };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {

    return (
      <>
        <nav>
          <a href="/" className='logo'>Raptors <span>Sustainerz</span></a>

          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              {/* <li><Link to='/login'>Log in</Link></li>
              <li><Link to='/signup'>Sign up</Link></li> */}
               <Dropdown1/>
              <li><Link to='/terms'>Privacy Policy</Link></li>
             
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
          </div>
        </nav >
      </>
    )
  }
}

export default Navbar