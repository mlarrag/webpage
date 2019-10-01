import React, { Component } from 'react';

import "./teamCard.css";



class TeamCard extends Component {



  
    render() {

      

      return (
        <div>
     
             <img src={this.props.Picture} alt="equipo"/> 
             <div className="cardEquipoText">{this.props.Name}</div> 
             <div className="cardEquipoText2"><span className="firstBlueTi">•</span> {this.props.Cargo}</div> 

                
        </div>
          

            
          

      )
    }
  }

export default TeamCard;    