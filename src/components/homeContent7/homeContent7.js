import React, { Component } from 'react';
import RightArrow from '../assets/images/Content1/rightArrow.png'

import './homeContent7.css';



class HomeContent7 extends Component {
  
    render() {
        
  
      return (
        
            
            
            <div className="grid7">  
            <div className="column71">
  
                
            
            </div> 

                
            <div className="column72">

                <div className="title7">
                Estamos ubicados en Santiago de <br/>Chile, te invitamos a conocer nuestras<br/> oficinas y hablar sobre tu proyecto.
                </div>

                <div className="subtitle7"> <span className="firstblue" >•</span>    Aurelio González 3779 - Vitacura.</div>
                <img className="button7" src={RightArrow} alt="flecha" />
            </div>
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent7;    