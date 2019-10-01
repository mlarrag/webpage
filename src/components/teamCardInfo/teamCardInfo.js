import React, { Component } from 'react';




import "./teamCardInfo.css";




class TeamCardInfo extends Component {



  
    render() {

      

      return (
        <div>
     
             
             <div className="cardEquipoText">{this.props.des}</div> 
             <div className="cardEquipoText2"><span className="firstBlueTi">•</span> {this.props.Cargo}</div> 

                
        </div>
          

            
          

      )
    }
  }

export default TeamCardInfo;    