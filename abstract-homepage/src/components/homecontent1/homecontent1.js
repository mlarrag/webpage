import React, { Component } from 'react';
import Content1 from '../assets/images/Content1/content1.png';
import {Segment, Header } from 'semantic-ui-react';

import './homecontent1.css';
import HomeCard from '../homeCard/homecard';


class HomeContent1 extends Component {
  
    render() {
        
  
      return (
        
            
            <div style={{backgroundImage: `url(${Content1})`}} 
                className="contentA"
                >
            
             <div>   

            <Header as='h2' className="header3">Somos un equipo de expertos apasionados por crear soluciones innovadoras 
</Header>
            <Header as='h3' className="header4">Entregamos productos de valor a nuestros clientes</Header>

            <HomeCard/>
                </div>

                    
            </div>
                          
            
      )
    }
  }

export default HomeContent1;    