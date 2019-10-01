import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Head from '../head/head';
import Footer from '../footer/footer';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import ConocenosGift from '../assets/images/Conocenos/Conocenos.gif';

import MLuna from '../assets/images/Conocenos/mLuna.png';
import PDeCarcer from '../assets/images/Conocenos/pDecarcer.png';
import LTapia from '../assets/images/Conocenos/lTapia.png';
import OBallesteros from  '../assets/images/Conocenos/oBallesteros.jpg';


import "./aboutUs.css";
import TeamCard from '../teamCard/teamCard';
import TeamCardInfo from '../teamCardInfo/teamCardInfo';




class AboutUs extends Component {

  handleTeamClick = () => {
    return
      
  }
  


    render() {

      

      return (
        <div>
          <MainMenu/>
            <Head name="Conócenos :)" back="aboutus"/>

            
            <div>

            <div className="gridGif">
            ¡Hola! Somos Abstract, un equipo apasionado por crear soluciones tecnológicas diferentes.
              <img src={ConocenosGift} alt="fun"/>
              </div>
            </div>
            <div className="gridInfo">

            <div className="gridAbout">
            <div className="projSubTitle">Cómo empezó todo</div> 
            <div className="projText">Abstract nació en el año 2016 en Chile, formado por un grupo amigos ingenieros con un interés es común: “Desarrollar productos digitales innovadores”. Desde entonces su propuesta de valor ha estado basado en la tecnología disruptiva buscando siempre una progresiva consolidación en el mercado Chileno.</div>
            </div>
            <div className="gridCha">
            <div className="projSubTitle">El futuro</div>
            <div className="projText">Siguiendo la línea de su propuesta de valor Abstract busca ser a corto plazo un referente dentro de la industria de la tecnología y comunicaciones en Chile. Teniendo su respaldo enfocado en clientes felices y experiencias de alto impacto social, y económico.

            </div>
            </div> 

            </div>
           
            <div className="gridActual">
            <div className="quote3">“”</div>      
            <div className="title31">Actualmente Abstract busca su expansión a nivel internacional, formando alianzas con colsultoras que permiten el complemento de conocimientos y nuevas culturas.</div> 
            
            </div >

            <div className="gridEquipo">
              <div className="columnEquipo">
                <div className="gridPort2Title" style={{textAlign:'left'}}>Nuestro <br/> Equipo</div>
                
              </div>
              <div className="columnEquipoF">
              <div className="cardEquipo">
                    <TeamCard Name= "Martín Luna" Cargo="CEO" Picture={MLuna}/>

                </div>
                <div className="cardEquipo">
                <TeamCard Name= "Luis Tapia" Cargo="Desarrollador" Picture={LTapia}/>

                </div>
                <div className="cardEquipo">
                <TeamCard Name= "Martín Luna" Cargo="CEO" Picture={MLuna}/>

                </div>
             
                
              </div>
              <div className="columnEquipoF">
                <div  className="cardEquipo">
                <TeamCard Name= "Pablo De Carcer" Cargo="CEO" Picture={PDeCarcer}/>

                </div>
                <div className="cardEquipo">
                <TeamCard Name= "Oscar Ballesteros" Cargo="Desarrolador" Picture={OBallesteros}/>

                </div>

                <div className="cardEquipo">
                      <div className="cardEquipoText3">Únete al equipo <img src={RightArrow} alt="flecha" /></div>

                </div>
             
                
              </div>
              <div className="columnEquipoF">
              <div className="cardEquipo">
              <TeamCard Name= "Cristián Valles" Cargo="Desarrollador" Picture={MLuna}/>

                </div>
                <div className="cardEquipo" onClick={()=>this.handleTeamClick()}>
                <TeamCard Name= "Cristián Valles" Cargo="Desarrollador" Picture={MLuna}/>

                </div>

                <div className="cardEquipoGrey">
                      

                </div>
             
                
              </div>
            </div>

            <div className="gridCultUs">

                    <div className="gridCultTitle"><span className="firstblack">Cultura  #</span>FunFactstract</div> 
                    <div className="instaGrid" ><iframe title="myFrame" src="//lightwidget.com/widgets/41b85de4f34257299b8fae14aabc2b65.html" scrolling="no" allowtransparency="true"  style={{width:"100%", border:"none"}}></iframe>
</div>
                    
  
                </div> 

            <div className="gridPort2">
            <div className="gridPort2Title"> ¿Quieres estar atento a nuestros <br/>contenidos?</div>
            <div className="blueBorder"></div>
            <div className="gridPort2Subtitle">Déjanos tus datos y te avisaremos cuando tengamos nuevos contenidos de tu interés en tu bandeja de entrada</div>
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

export default AboutUs;    