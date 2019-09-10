import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';

import SketchLogo from '../assets/images/ContentExp/sketch.png';
import XdLogo from '../assets/images//ContentExp/xd.png';
import AdobeLogo from '../assets/images/ContentExp/adobe.png';
import ZeplinLogo from '../assets/images/ContentExp/zeplin.png';
import JiraLogo from '../assets/images/ContentExp/jira.png';
import SlackLogo from '../assets/images/ContentExp/slack.png';



import './contentExp.css'




class ContentExp extends Component {


    
    render() {
    
    
      return (
        <div>
          <MainMenu/>
          <Head name="Experiencia de Usuario UX" back="contentExp"/>
          <div className="gridWeb1">
              <div className="subtitleWeb1">¿Cómo lo hacemos?</div>
              <div className="blueBorder"></div>
              <div className="textWeb1">Pensamos en el conjunto de factores y elementos relativos a la interacción del usuario con un entorno o dispositivo concreto, y diseñamos servicios y productos con características de percepciones positivas a través de:</div>
          </div>

        <div className="gridWeb2">
            <div className="columnWebBlue">
                <div className="titleWeb2"> <span className="fistBlacWeb">•</span> Investigación Research</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Co-creación</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Testeo</div>
            </div>
            <div className="columnWebWhite">
                <div className="rowWeb2">La investigación tiene como principales objetivos la generación de conocimiento e insigths para la solución de problemas. Partimos todos nuestros proyectos de este principio. </div>
                <div className="rowWeb2">La co-creación es una iniciativa de gestión, implementada o una forma de estrategia económica, que nos permite reunir a diferentes partes interesadas para producir conjuntamente un producto mutuamente valorado.</div>
                <div className="rowWeb2">Testear nos permite obtener información antes del lanzamiento al mercado y corregir en rápido y económico aquellos aspectos que no satisfagan las necesidades y expectativas que nos hayamos marcado.</div>

            </div>
        </div>


          <div className="gridExp">
            {/* <div className="quote3">“”</div>       */}
            <div className="textTec">El diseño, la estrategia, y la gestión de nuestros proyectos se ejecutan con herramientas tecnológicas de vanguardia.</div> 
            
            </div >


            <div className="grid5">
             
             <div className="column51">
                
                <div className="subtitle5"> La selección depende de los requerimientos y necesidades de nuestros clientes y sus usuarios.    </div>
         
            </div>     
             
            <div className="column52">

                
                    <div className="row521Exp">
                    <div className = "clientLogo"><img className = "logoImVolvo" src={SketchLogo} alt="Volvo"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={XdLogo} alt="AgroBolt"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={AdobeLogo} alt="Vendomatica"/></div>
                    </div>
                    
                    <div className="row522Exp">
                    <div className = "clientLogo"><img className = "logoIm" src={ZeplinLogo} alt="Xtreme"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={JiraLogo} alt="Tricao"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={SlackLogo} alt="Cla"/></div>
                    </div>
                    
   

            </div>
   
            </div >

          <div className="gridPort1">
            <div className="greyBorder">
            <div className="gridPort1Title"> Solicitar consultoría <br/> gratis.</div>
            <div className="arrowPort"><button><img src={RightArrow} alt="arrow"/></button></div>
            </div>
            <div className="greyBorder">
            <div className="gridPort1Title"> Ver casos de <br/> éxito</div>
            <div className="arrowPort"><button><img src={RightArrow} alt="arrow"/></button></div>
            </div>
          </div>
          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Quieres te contemos más?</div>
          <div className="blueBorder"></div>
          <div className="gridPort2Web">Déjanos tus datos y te invitaremos a nuestras oficinas a tomarnos un café y hablar sobre nuestro próximo proyecto.</div>
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

export default ContentExp;    