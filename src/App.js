import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Component
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path ='/' component={Homepage} />
        <Route exact path ='/Products' component={Products} />

      </div>
      </Router>
    );
  }
}

export default App;
