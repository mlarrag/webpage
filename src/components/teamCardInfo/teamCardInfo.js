import React, { Component } from 'react';




import "./teamCardInfo.css";




class TeamCardInfo extends Component {



  
    render() {

      

      return (
        <div className="equipoDetail">
     
             <div className="titleName"> {this.props.Name}</div>
             <div className="subTeam"> {this.props.Desc}</div>
             <div className="cargoTeam"> {this.props.Cargo}</div>
             <div>{this.props.Mail}</div>
             <div>{this.props.LinkedIn}</div>
             <div>{this.props.Git}</div>

                
        </div>
          

            
          

      )
    }
  }

export default TeamCardInfo;    