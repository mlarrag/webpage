import React, { Component } from 'react';


import './homecontent1.css';
import HomeCard from '../homeCard/homecard';


class HomeContent1 extends Component {
  
    render() {
        
  
      return (
        
            
            <div className="griid1" >

              <div className="title11">Somos un equipo de expertos apasionados por crear soluciones innovadoras  </div>
              <div className="subtitle1">Entregamos productos de valor a nuestros clientes</div>
              <div className="cards"> <HomeCard/></div>

                    
            </div>
                          
            
      )
    }
  }

export default HomeContent1;    