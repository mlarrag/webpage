import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';

import './portfolio.css'



class Portfolio extends Component {

    render() {

      return (
        <div>
          <MainMenu/>
          <Head name="Portfolio"/>
          <div className="subtitlePortfolio">
            Conoce los proyectos que hemos desarrollado para empresas <br/> como la tuya que alcanzaron el éxito con Abstract.
          </div>

          <div className="gridPort1">

            <div className="gridPort1Title"> Solicitar consultoría gratis.</div>
            <div className="arrowPort"><button><img src={RightArrow} alt="arrow"/></button></div>
          </div>
          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Y tú, tienes en mente un <br/>proyecto? hablemos.</div>
          <div className="gridPort2Subtitle">Déjanos tus datos y nuestros ejecutivos te estarán contactando en la <br/>brevedad.</div>
          </div>

          <div className="gridPort3">
            <div className="formPort">
              <div className="inputPort">Nombre Completo </div>
              <div className="inputPort">Email </div>
            </div>
            <div className="formPortB">
              <button><div className="buttonPort">Enviar <img src={RightArrow} alt="arrow"/></div></button>  
            </div>

          </div>
          <Footer/>   
        </div>

      )
    }
  }

export default Portfolio;    