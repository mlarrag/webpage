import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import "./mainmenu.css";




class Mainmenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      
  
      return (
        <div>
            
                <Menu className="menuu">
                  
                    <Menu.Item>
                        <img src={Logo} alt="Abtract Logo" className="logo" />
                    </Menu.Item>
                    <Menu.Item position='right'>
                    <Menu.Item position='right' className="spanish">
                    <Dropdown item text='Español'>
                        <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    
                    </Menu.Item>

                <Menu.Item position='right' padding='10px'>
                <Button className="mibutton">Solicitar Prueba Gratuita <Icon fitted name='arrow right' /></Button>
                </Menu.Item>

                    
                    

                    <Menu.Item position='right'>
                    <img src={MenuImage} alt="menu"/>
                    </Menu.Item>
                    </Menu.Item>
                </Menu>


            
            
                
        </div>
          

            
          

      )
    }
  }

export default Mainmenu;    