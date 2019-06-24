import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import { Menu, Dropdown, Segment, Header, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';

import HeaderImage from '../assets/images/Conocenos/header/bitmap.png';


class Blog extends Component {

    render() {

      return (
        <div>
           <MainMenu/>
          <Segment style={{
                    backgroundImage: `url(${HeaderImage})`,
                    backgroundSize: 'cover',
                    fontWeight: 'normal',
                    marginBottom: 0,
                }} 
                className="landing">

            <Header as='h1'>Blog :)</Header>

          </Segment>
          <Footer/>   
        </div>

      )
    }
  }

export default Blog;    