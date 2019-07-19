import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import "./footer.css";





class Footer extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      
  
      return (
        <div>
            
                <Menu  className='menuuu'>
                    <Menu.Item  className="copyy">
                        <div className="textt"> <Icon className ="iconn" name='copyright outline' />Abstract Software 2019. Todos los derechos reservados. </div>
                    </Menu.Item>


                    <Menu.Item position ='right' className="derecha">
                    
                         <Link to="/services"><Button className="buttonn"><span className="firstblue" >•</span>Servicios</Button></Link>
                         <Link to="/blog"><Button className="buttonn"><span className="firstblue" >•</span>Blog</Button></Link>
                         <Link to="/jobs"><Button className="buttonn"><span className="firstblue" >•</span>Empleos</Button></Link>
                         <Button className="buttonn" ><span className="firstblue" >•</span>Cotiza en Línea</Button>
        
                    
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