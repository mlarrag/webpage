import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import { Modal, TransitionablePortal} from 'semantic-ui-react';
import Quote from '../quote/quote';
import { Link } from 'react-router-dom';

import ReactLogo from '../assets/images/ContentWeb/logoReact.png';
import PostLogo from '../assets/images//ContentWeb/logoPostgre.png';
import KotlinLogo from '../assets/images/ContentWeb/logoKotlin.png';
import RailsLogo from '../assets/images/ContentWeb/logoRails.png';
import SwiftLogo from '../assets/images/ContentWeb/logoSwift.png';
import AmazonLogo from '../assets/images/ContentWeb/logoAmazon.png';
import ZeplinLogo from '../assets/images/ContentWeb/logoZepelin.png';
import JiraLogo from '../assets/images/ContentWeb/logoJira.png';
import SlackLogo from '../assets/images/ContentWeb/logoSlack.png';


import './contentWeb.css'




class ContentWeb extends Component {
  constructor(props) {
    super(props)
      this.state={
  
        form: false,
        animation:'scale',
        duration: 700
      }
    
     this.closeForm=this.closeForm.bind(this)
    }

        
    closeForm(){
        this.setState({form: !this.state.form})
        }

    
    render() {
    
      const { animation, duration} = this.state
      return (
        <div>
          <MainMenu/>
          <Head name="Desarrollo Web y móvil" back="contentWeb"/>
          <div className="gridWeb1">
              <div className="subtitleWeb1">¿Cómo lo hacemos?</div>
              <div className="blueBorder"></div>
              <div className="textWeb1">En Abstract Desarrollamos sofware funcional, a la medida de su negocio, usuarios y necesidades. Para esto aplicamos algunos de los siguientes principios:</div>
          </div>

        <div className="gridWeb2">
            <div className="columnWebBlue">
                <div className="titleWeb2"> <span className="fistBlacWeb">•</span> Diseño centrado en el usuario</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Metodologías Ágiles</div>
                <div className="titleWeb2"><span className="fistBlacWeb">•</span> Customer support</div>
            </div>
            <div className="columnWebWhite">
                <div className="rowWeb2">Creemos en la filosofía de diseño que tiene por objeto la creación de productos que resuelvan necesidades concretas de sus usuarios finales. </div>
                <div className="rowWeb2">El desarrollo ágil de software envuelve un enfoque para la toma de decisiones en los proyectos de software, lo que nos permite siempre tener una visión de trabajo iterativo e incremental.</div>
                <div className="rowWeb2">El soporte al cliente o la asistencia al cliente es nuestro valor de servicio Ayudar a nuestros clientes y sus usuarios nos permite validar que creamos productos rentables y altamente utilizables. </div>

            </div>
        </div>


          <div className="gridTec">
            {/* <div className="quote3">“”</div>       */}
            <div className="textTec">Nuestros servicios se ejecutan con herramientas tecnológicas de gestión optimizadas.</div> 
            
            </div >


            <div className="grid5">
             
             <div className="column51">
                
                <div className="subtitle5"> La selección depende de los requerimientos y necesidades de nuestros clientes y sus usuarios.  </div>
         
            </div>     
             
            <div className="column52">

                
                    <div className="row521">
                    <div className = "clientLogo"><img className = "logoImVolvo" src={ReactLogo} alt="Volvo"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={PostLogo} alt="AgroBolt"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={KotlinLogo} alt="Vendomatica"/></div>
                    </div>
                    
                    <div className="row522">
                    <div className = "clientLogo"><img className = "logoIm" src={RailsLogo} alt="Xtreme"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={SwiftLogo} alt="Tricao"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={AmazonLogo} alt="Cla"/></div>
                    </div>
                    
                    <div className="row523">
                    <div className = "clientLogo"><img className = "logoIm" src={ZeplinLogo} alt="Climo"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={JiraLogo} alt="Streetip"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={SlackLogo} alt="Ditec"/></div>
                
                    </div>


            </div>
   
            </div >

          <div className="gridPort1">
            <div className="greyBorder">
            <div className="gridPort1Title"> Solicitar consultoría <br/> gratis.</div>
            <div className="arrowPort"><button onClick={()=>this.closeForm()}><img src={RightArrow} alt="arrow"/></button></div>
            </div>
            <div className="greyBorder">
            <div className="gridPort1Title"> Ver casos de <br/> éxito</div>
            <div className="arrowPort"><Link to="/portfolio"><img src={RightArrow} alt="arrow"/></Link></div>
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
          <TransitionablePortal open={this.state.form} transition={{ animation, duration }}>
            <Modal basic className="quoteSize" open={true} >
                <Quote closeForm={this.closeForm}/>
                 </Modal>
                 </TransitionablePortal>    
        </div>

      )
    }
  }

export default ContentWeb;    