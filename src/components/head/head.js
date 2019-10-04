import React, { Component } from 'react';

//import OtroBack from '../assets/images/Volvo/card.png';


import './head.css';


class Head extends Component {
    
    

    render() {

      var HeadBg = require(`../assets/images/Project/${this.props.back}Back.jpg`)
      var HeadBgM = require(`../assets/images/Project/${this.props.back}BackMob.jpg`)

      return (
        <div>
        <div  className="gridHead" style ={ { backgroundImage: "url("+HeadBg+")" } } >
          
        <div className="fontHead">
            {this.props.name}
            
        </div>
        
       </div>

        <div  className="gridHeadMovil" style ={ { backgroundImage: "url("+HeadBgM+")" } } >
          
            <div className="fontHead">
                {this.props.name}
                
            </div>
            
        </div>
        </div>
      )
    }
  }

export default Head;    