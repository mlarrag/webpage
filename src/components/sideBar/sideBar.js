import React, { Component } from 'react';
import Instagram from '../assets/images/SideMenu/instagram.png'
import Facebook from '../assets/images/SideMenu/facebook.png'
import LinkedIn from '../assets/images/SideMenu/linkedIn.png'

import { HashLink as Link } from 'react-router-hash-link';

import "./sideBar.css";




class SideBar extends Component {
    


    
    render() {
    
  
      return (
          <div className="gridSideMenu">

              <div onClick={()=> this.props.closeSideBar()} className="closeButton"> X </div>  
              <div className="sidebarButtons">
              <Link onClick={()=> this.props.closeSideBar()} to="/#servicios" smooth={true} duration={700}><div className="sideMenuButton">Servicio</div></Link>
              <Link to="/portfolio" smooth={true} duration={700}><div className="sideMenuButton">Portafolio</div></Link>
              <Link to="/aboutus" smooth={true} duration={700}><div className="sideMenuButton">Conócenos</div></Link>
              <Link to="/blog" smooth={true} duration={700}><div className="sideMenuButton">Blog</div></Link>
              <a href="https://www.getonbrd.com/companies/abstract-cl-d8c3" smooth={true} duration={700}><div className="sideMenuButton">Empleos</div></a>
              
             
              

              <div className="sideSocial">
                  <a href="https://www.instagram.com/abstractsolutionscl/"> <div className="sideSocialText"><img src={Instagram} alt="instragram"/> <span className="socialLetter">Instagram</span></div> </a>
                  <a href ="https://www.facebook.com/abstractsolutionscl/"><div className="sideSocialText"><img src={Facebook} alt="instragram"/> <span className="socialLetter">Facebook</span></div></a>
                  <a href="https://www.linkedin.com/company/abstract-software-chile/about/"><div className="sideSocialText"><img src={LinkedIn} alt="instragram"/> <span className="socialLetter">LinkedIn</span></div></a>
          

              </div>
              </div>

              
              
              </div>
            
      )
    }
  }

export default SideBar;    