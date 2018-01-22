import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo">
      LOGO
      </div>
      <nav>
        <ul>
          <li className="first">
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      </header>
    );
  }
}

export default Header;
