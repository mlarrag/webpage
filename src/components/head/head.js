import React, { Component } from 'react';
import BackgroundPort from '../assets/images/Portfolio/portfolio.jpg';
//import OtroBack from '../assets/images/Volvo/card.png';


import './head.css';


class Head extends Component {
    
    
    constructor(props) {
        super(props)

      }


    render() {

  

      return (
        <div  className="gridHead" style={{backgroundImage: `url(${BackgroundPort})`}} >
            <div className="fontHead">
                {this.props.name}
                
            </div>
            
        </div>

      )
    }
  }

export default Head;    