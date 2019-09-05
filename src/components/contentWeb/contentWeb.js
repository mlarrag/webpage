import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';

import './contentWeb.css'




class ContentWeb extends Component {


    
    render() {
    
    
      return (
        <div>
          <MainMenu/>
          <Head name="Desarrollo Web y móvil" back="contentWeb"/>
          <div className="subtitlePortfolio">
            Como lo hacemos
          </div>
          <div className="gridTec">
            {/* <div className="quote3">“”</div>       */}
            <div className="title31">Actualmente Abstract busca su expansión a nivel internacional, formando alianzas con colsultoras que permiten el complemento de conocimientos y nuevas culturas.</div> 
            
            </div >

          <div className="gridPort1">

            <div className="gridPort1Title"> Solicitar consultoría gratis.</div>
            <div className="arrowPort"><button><img src={RightArrow} alt="arrow"/></button></div>
          </div>
          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Y tú, tienes en mente un <br/>proyecto? hablemos.</div>
          <div className="blueBorder"></div>
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

export default ContentWeb;    