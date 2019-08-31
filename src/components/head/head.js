import React, { Component } from 'react';

//import OtroBack from '../assets/images/Volvo/card.png';


import './head.css';


class Head extends Component {
    
    

    render() {

      var HeadBg = require(`../assets/images/Project/${this.props.back}Back.jpg`)

      return (
        <div  className="gridHead" style ={ { backgroundImage: "url("+HeadBg+")" } } >
            <div className="fontHead">
                {this.props.name}
                
            </div>
            
        </div>

      )
    }
  }

export default Head;    