import React, { Component } from 'react';
import './homecontent1.css';
import HomeCard from '../homeCard/homecard';
import { Link } from 'react-router-dom';
import RightArrow from '../assets/images/Content1/rightArrow.png';

class HomeContent1 extends Component {
  
    render() {
        
  
      return (
        
            
            <div className="griid1" >

              <div className="title11">Somos un equipo de expertos apasionados por crear soluciones innovadoras  </div>
              <div className="subtitle1">Entregamos productos de valor a nuestros clientes</div>
              <div className="mobilTitle">Creando soluciones innovadoras</div>
              <div className="cards"> <HomeCard/></div>
              <Link to="/portfolio" className="mobileButton" ><div className="buttonPCardMovil">Ver Portafolio <img src={RightArrow} alt="arrow"/></div></Link>

                    
            </div>
                          
            
      )
    }
  }

export default HomeContent1;    