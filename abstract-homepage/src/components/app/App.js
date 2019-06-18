import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Menu, Dropdown, Segment, Image, Icon, Responsive, Sidebar, Container, Button } from 'semantic-ui-react'
import Home from '../home/home'
import AbstractLogo from '../assets/images/logo3x.png'




class App extends Component {

  render() {
      return (
        <div >
            <Home/>

        </div>
      )
  }
}

export default App;