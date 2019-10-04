import React, { Component } from 'react';

import RightArrow from '../assets/images/Content1/rightArrow.png';
import { Link } from 'react-router-dom';
import whiteArrow from '../assets/images/Portfolio/whiteArrow.png';
import './portfolioCard.css'




class PortfolioCard extends Component {




    render() {


    var cardBg = require(`../assets/images/Portfolio/${this.props.back}Back.jpg`)
    var cardImg = require(`../assets/images/Portfolio/${this.props.back}Img.jpg`)

      return (
        
       <div>

        <div className="gridPCard">
        
            <div className="columnP1" style ={ { backgroundImage: "url("+cardBg+")" } }>
                
                <div className="cardPInfo">             
                    <div className="cardPTitle">{this.props.name}</div>
                    <div className="cardPType">{this.props.type}</div>
                    <Link to={`/${this.props.back}`} ><div className="whiteArrow"><img src={whiteArrow}/></div></Link>
                </div>

                <div className="cardPImg"><img src={cardImg} alt="arrow"/></div>
                
            </div>


            <div className="columnP2">

                
                <div className="cardPDesc">
                {this.props.desc}
                </div>
                <div className="cardPBen">
                Permite el agendamiento de horas <br/>para servicio y mantenimiento.
                </div>
                <div className="cardPButton">
                <Link to={`/${this.props.back}`} ><div className="buttonPCard">Ver Proyecto <img src={RightArrow} alt="arrow"/></div></Link>
                </div>
            
            </div>
            
           
            </div>
        </div>

      )
    }
  }

export default PortfolioCard;    