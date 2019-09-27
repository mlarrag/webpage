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
              <Link onClick={()=> this.props.closeSideBar()} to="/#servicios" ><div className="sideMenuButton">Servicio</div></Link>
              <Link to="/portfolio"><div className="sideMenuButton">Portafolio</div></Link>
              <Link to="/aboutus"><div className="sideMenuButton">Conócenos</div></Link>
              <Link to="/blog"><div className="sideMenuButton">Blog</div></Link>
             
              

              <div className="sideSocial">
                  <div className="sideSocialText"><img src={Instagram} alt="instragram"/> Instagram</div>
                  <div className="sideSocialText"><img src={Instagram} alt="instragram"/> Facebook</div>
                  <div className="sideSocialText"><img src={Instagram} alt="instragram"/> LinkedIn</div>
          

              </div>
              </div>

              
              
              </div>
            
      )
    }
  }

export default SideBar;    