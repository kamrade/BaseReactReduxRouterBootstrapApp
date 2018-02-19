import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Incrementer from './components/Incrementer';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App p-2">
        <div className="header">
          <NavLink className='pr-1' to='/'>Home</NavLink>
          <NavLink className='pr-1' to='/incrementer'>Incrementer</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div className="workspace">
          <Route exact path="/" render={props => <Redirect to="incrementer" />} />
          <Route exact path="/incrementer" component={Incrementer} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
