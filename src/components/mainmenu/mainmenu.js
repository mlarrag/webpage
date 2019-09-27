import React, { Component } from 'react';
import { Dropdown ,Modal} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import RightArrow from '../assets/images/Content1/rightArrow.png'
import Quote from '../quote/quote';
import Sidebar from '../sideBar/sideBar';
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

            <Modal basic className="quoteSize" trigger={<div className="mibutton">Solicitar consulta gratuita <img className="arrowMenu" src={RightArrow} alt="fun"/></div> }>
                <Quote/>
                 </Modal>

            <div className="burgerMenu">
              <Modal basic trigger={ <img src={MenuImage} alt="menu" />} > 
                <Sidebar/>
              
              </Modal> 
              
              </div>

            </div>
        </div>

)}





    }
  

export default Mainmenu;    