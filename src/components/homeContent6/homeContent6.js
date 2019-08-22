import React, { Component } from 'react';

import RightArrow from '../assets/images/Content1/rightArrow.png'

import Gift6 from '../assets/images/Content6/landing_equipo.gif'





import './homeContent6.css';



class HomeContent6 extends Component {
  
    render() {
        
  
      return (
        
            
            
            <div className="grid6">  
            <div className="column61">
                <div>
                    <div className="blacktitle">Nuestra <br/> Cultura</div> 
                    <div className="bluetitle"><span className="firstblack">#</span>FunFactstract</div>
                    <div className="button6">Conoce el equipo <img className= "arrow6" src={RightArrow} alt="fun"/></div>
                
                </div>
                
                
            
            </div> 

                
            <div className="column62">
            <img className="imgContent6" src={Gift6} alt="fun"/>
                

            </div>
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent6;    