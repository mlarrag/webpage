import React, { Component } from 'react';
import Instagram from '../assets/images/SideMenu/instagram.png'

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
             
              

              <div className="sideSocial">
                  <a href="https://www.instagram.com/abstractsolutionscl/"> <div className="sideSocialText"><img src={Instagram} alt="instragram"/> Instagram</div> </a>
                  <a href ="https://www.facebook.com/abstractsolutionscl/"><div className="sideSocialText"><img src={Instagram} alt="instragram"/> Facebook</div></a>
                  <a href="https://www.linkedin.com/company/abstract-software-chile/about/"><div className="sideSocialText"><img src={Instagram} alt="instragram"/> LinkedIn</div></a>
          

              </div>
              </div>

              
              
              </div>
            
      )
    }
  }

export default SideBar;    