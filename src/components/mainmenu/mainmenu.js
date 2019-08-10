import React, { Component } from 'react';
import { Dropdown, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import "./mainmenu.css";




class Mainmenu extends Component {
    

    
  
    render() {
      
  
      return (
        <div>
            
                <div className="menuu">
                  
                    <div className="logoMenu">
                        <Link to="/" ><img src={Logo} alt="Abtract Logo"/></Link>
                    </div>
                    
                    <div className="buttonsMenu">
                    <div className="buttonLang">                   
                  
                       <Dropdown icon='angle down' text='Español'>
                        <Dropdown.Menu >
                        <Dropdown.Item>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>

                    <Link><div className="mibutton">Solicitar Consulta Gratuita <Icon fitted name='arrow right' /></div></Link>

                    <img src={MenuImage} alt="menu"/>

                    </div>
    
                    
                    
                  
                    
                </div>


            
            
                
        </div>
          

            
          

      )
    }
  }

export default Mainmenu;    