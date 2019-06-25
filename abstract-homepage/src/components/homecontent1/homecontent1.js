import React, { Component } from 'react';
import Content1 from '../assets/images/Content1/content1.png';
import { Menu, Dropdown, Grid, Segment, Header, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';

import './homecontent1.css'


class HomeContent1 extends Component {
  
    render() {

  
      return (
        
            
            <Segment style={{
                    backgroundImage: `url(${Content1})`,
                    backgroundPosition: 'center',

                }} 
                className="contentA"
                >
            
             <div>   

            <Header as='h2' className="header3">Somos un equipo de expertos apasionados por crear soluciones innovadoras 
</Header>
            <Header as='h3' className="header4">Entregamos productos de valor a nuestros clientes</Header>
                </div>

                    
            </Segment>
                          
            
      )
    }
  }

export default HomeContent1;    