import React, { Component } from 'react';

import "./teamCard.css";



class TeamCard extends Component {



  
    render() {

      
      let Pic = require(`../assets/images/Conocenos/${this.props.Picture}`)

      return (
        <div className="gradiente">
        <div  className="cardBack" style ={ { backgroundImage: "url("+Pic+")", backgroundSize:"cover", backgroundRepeat:"no-repeat" } }>
     
             
             <div className="cardEquipoText">{this.props.Name}</div> 
             <div className="cardEquipoText2"><span className="firstBlueTi">•</span> {this.props.Cargo}</div> 

                
        </div>
        </div>
          

            
          

      )
    }
  }

export default TeamCard;    