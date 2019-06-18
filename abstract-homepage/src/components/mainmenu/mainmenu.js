import React, { Component } from 'react';
import { Menu, Dropdown, Segment, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import PropTypes from 'prop-types';
import "./mainmenu.css";




class Mainmenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
            
                <Menu className="menuu">
                  
                    <Menu.Item>
                        <img src={Logo} className="logo" />
                    </Menu.Item>
                    <Menu.Item position='right'>
                    <Menu.Item position='right' className="spanish">
                    <Dropdown item text='Español'>
                        <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    
                    </Menu.Item>

                <Menu.Item position='right'>
                <Button className="mibutton">Solicitar Prueba Gratuita <Icon fitted name='arrow right' /></Button>
                </Menu.Item>

                    
                    

                    <Menu.Item position='right'>
                    <img src={MenuImage}/>
                    </Menu.Item>
                    </Menu.Item>
                </Menu>


            
            
                
        </div>
          

            
          

      )
    }
  }

export default Mainmenu;    