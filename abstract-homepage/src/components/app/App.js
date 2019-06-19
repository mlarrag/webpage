import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Menu, Dropdown, Segment, Image, Icon, Responsive, Sidebar, Container, Button } from 'semantic-ui-react'
import Home from '../home/home';
import AboutUs from '../aboutus/aboutus';
import Services from '../services/services';
import Portfolio from '../portfolio/portfolio';
import Blog from '../blog/blog';
import Recursos from '../recursos/recursos';
import Contact from '../contact/contact';
import Jobs from '../jobs/jobs';




class App extends Component {

  render() {
      return (
        <div >
          <BrowserRouter>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/aboutus" render={() => <AboutUs/>}/>
            <Route exact path="/services" render={() => <Services/>}/>
            <Route exact path="/portfolio" render={() => <Portfolio/>}/>
            <Route exact path="/blog" render={() => <Blog/>}/>
            <Route exact path="/recursos" render={() => <Recursos/>}/>
            <Route exact path="/contact" render={() => <Contact/>}/>
            <Route exact path="/jobs" render={() => <Jobs/>}/>

          
          </BrowserRouter>

        </div>
      )
  }
}

export default App;