import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';

import './contentTi.css'




class ContentTi extends Component {


    
    render() {
    
    
      return (
        <div>
          <MainMenu/>
          <Head name="Asesoría TI" back="contentTi"/>
          <div className="gridWeb1">
              <div className="subtitleWeb1">¿Cómo lo hacemos?</div>
              <div className="blueBorder"></div>
              <div className="textTi1">  Por medio de nuestras consultorías aconsejamos a nuestros clientes a cómo usar la tecnología para conseguir sus objetivos empresariales. Nuestro proceso de trabajo está estructurado en tres fases fundamentales:</div>
          </div>

        <div className="gridWeb2">
            <div className="columnWebBlue">
                <div className="titleWeb2"> <span className="fistBlacWeb">•</span> Diagnóstico</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Plan de acción</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Ejecución</div>
            </div>
            <div className="columnWebWhite">
                <div className="rowWeb2">En esta fase nos enfocamos a identificar los problemas o necesidades que afronta el cliente, Examinar de forma detallada las causas y preparar toda la información necesaria para orientar las decisiones de solución.</div>
                <div className="rowWeb2">Evaluamos las opciones y ajustamos a la medida de la necesidades, una amplia gama de técnicas dentro de un mismo plan de ejecución. </div>
                <div className="rowWeb2">Monitoreamos, medimos, y evaluamos los resultados en base a los KPI u objetivos definidos.</div>

            </div>
        </div>
          <div className="gridHerra">
            {/* <div className="quote3">“”</div>       */}
            <div className="title31">Disponemos de una amplia variedad de herramientas ideadas para ayudar en el uso y mejora de las aplicaciones, y sistemas informáticos en las empresas. </div> 
            
            </div >

            <div className="gridTi1">
                <div className="titleTi1">Nuestras consultorías se centran en el análisis y expertise de nuestro equipo:</div>

            <div className="gridTextTi">    
                <div className="rowTi1">
                    <div className="textTi2"> <span className="firstBlueTi">•</span>Arquitectura de software.</div>
                    <div className="textTi2"> <span className="firstBlueTi">•</span>Experiencia de usuarios UX.</div>
                    <div className="textTi2"><span className="firstBlueTi">•</span>Desarrollo web y móvil.</div>

                </div>
                <div className="rowTi1">
                    <div className="textTi2"><span className="firstBlueTi">•</span>Arquitectura de información.</div>
                    <div className="textTi2"><span className="firstBlueTi">•</span>Diseño de interfaz</div>
                    <div className="textTi2"><span className="firstBlueTi">•</span>Arquitectura tecnológica</div>

                    </div>
                    </div>
            </div>

          <div className="gridPort1">

            <div className="gridPort1Title"> Solicitar consultoría gratis.</div>
            <div className="arrowPort"><button><img src={RightArrow} alt="arrow"/></button></div>
          </div>
          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Quieres te contemos más?</div>
          <div className="blueBorder"></div>
          <div className="gridPort2Subtitle"> Déjanos tus datos y te invitaremos a nuestras oficinas a tomarnos un café con nuestro equipo de diseño para hablar sobre nuestro próximo proyecto.</div>
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

export default ContentTi;    