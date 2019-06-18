import React, { Component } from 'react';
import { Menu, Dropdown, Segment, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import PropTypes from 'prop-types';
import "./footer.css";





class Footer extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
            
                <Menu  fixed='bottom' className='menuuu'>
                    <Menu.Item  className="copyy">
                        <text className="textt"> <Icon className ="iconn" name='small copyright outline' />Abstract Software 2019. Todos los derechos reservados. </text>
                    </Menu.Item>


                    <Menu.Item position ='right' className="derecha">
                    
                         <Button className="buttonn"><Icon className = "iconn" name="mini circle" />Servicios</Button>
                         <Button className="buttonn"><Icon className = "iconn" name="mini circle" />Blog</Button>
                         <Button className="buttonn"><Icon className = "iconn" name='mini circle' />Empleos</Button>
                         <Button className="buttonn"><Icon className = "iconn" name='mini circle' />Cotiza en Línea</Button>
        
                    
                    <Menu.Item position='right' className="idiomaa">
                    <Dropdown item text='Español'>
                        <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    
                    </Menu.Item>
                    </Menu.Item>
                </Menu>


            
            
                
        </div>
          

            
          

      )
    }
  }

export default Footer;    