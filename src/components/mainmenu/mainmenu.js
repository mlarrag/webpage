import React, { Component } from 'react';
import { Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import RightArrow from '../assets/images/Content1/rightArrow.png'
import "./mainmenu.css";




class Mainmenu extends Component {
    

    
  
    render() {
      
  
      return (
        
            
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

                    <div className="mibutton">Solicitar Consulta Gratuita <img className="arrowMenu" src={RightArrow} alt="fun"/></div>

                    <div className="burgerMenu"><img src={MenuImage} alt="menu"/></div>

                    </div>
    
                    
                    
                  
                    
                </div>


            
            
                
        
          

            
          

      )
    }
  }

export default Mainmenu;    