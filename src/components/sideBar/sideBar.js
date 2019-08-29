import React, { Component } from 'react';


import "./sideBar.css";




class SideBar extends Component {
    
    state = { showSideMenu: true }

    handleHideClick = () => this.setState({ showSideMenu: false })

    render() {
    const { showSideMenu } = this.state
  
      return (
          <div className="gridSideMenu">
              <button className="sideMenuButton" onClick={this.handleHideClick}>Cerrar</button>
              <div className="sideMenuButton">Servicio</div>
              <div className="sideMenuButton">Portafilio</div>
              <div className="sideMenuButton">Conocenos</div>
              <div className="sideMenuButton">Blog</div>
              <div className="sideMenuButton">Recursos</div>
              <div className="sideMenuButton">Contacto</div>
              <div className="sideMenuButton">Empleo</div>
              
              </div>
            
      )
    }
  }

export default SideBar;    