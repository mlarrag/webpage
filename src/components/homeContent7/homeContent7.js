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

                <div className="subtitle7"> <span className="firstblue2" >•</span>    Aurelio González 3779 - Vitacura.</div>
                <a href="https://www.google.cl/maps/place/Aurelio+Gonz%C3%A1lez+3779,+Vitacura,+Regi%C3%B3n+Metropolitana/@-33.4001326,-70.6010641,17z/data=!3m1!4b1!4m5!3m4!1s0x9662cf49f130645b:0x7c561d30fdf27bb8!8m2!3d-33.4001326!4d-70.5988701"><img className="button7" src={RightArrow} alt="flecha" /></a>
            </div>
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent7;    