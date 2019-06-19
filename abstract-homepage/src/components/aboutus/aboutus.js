import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import { Menu, Dropdown, Segment, Header, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';

import "./aboutus.css";



class AboutUs extends Component {

  
    render() {

  
      return (
        <div>
           <MainMenu/>
          <Segment className="landing">

            <Header as='h1'>Conócenos :)</Header>

          </Segment>

           
            
          
           <Footer/>   
        </div>
          

            
          

      )
    }
  }

export default AboutUs;    