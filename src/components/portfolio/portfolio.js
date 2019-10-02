import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import { Modal, TransitionablePortal} from 'semantic-ui-react';
import Quote from '../quote/quote';
import './portfolio.css'
import PortfolioCard from '../portfolioCard/portfolioCard';



class Portfolio extends Component {
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

      const Proyects=[ {id: 0, name: "Volvo", back: "volvo", type: "App Móvil", desc:"Canal de comunicación entre la indumotora y sus clientes.", ben: "Permite el agendamiento de horas <br/>para servicio y mantenimiento."},
                       {id: 1, name: "Parque Tricao", back: "tricao", type: "App Web", desc:"La magia de la naturaleza, lacultura y la vida al aire libre", ben: "Conexión digital con las reserva ecológica, permite organizar, comprar, reservar y vivir unaexperiencia completa de servicio."},
                       {id: 2, name: "Vendowallet", back: "vendowallet", type: "App Android / iOS", desc:"Servicio de beneficios en snacks y bebidas para colaboradores de empresass.", ben: "Pensado y desarrollado como una billetera digital, segura, flexible y confiable."},
                       {id: 3, name: "Agrobolt", back: "agrobolt", type: "App Web", desc:"Servicio de monitoreo de pedidos agrícolas", ben: "Manejo de datos pensados para cumplir las necesidades de los clientes finales. "},
                       {id: 4, name: "Xtreme Mining", back: "xtreme", type: "App Android / iOS", desc:"Operación diaria en la minería solución con tecnología.", ben: "Diseñada para planificar, organizar, y monitorear las entregas de hormigones dentro de la organización. "},
    
    ]
      return (
        <div>
          <MainMenu/>
          <Head name="Portfolio" back="portfolio"/>
          <div className="subtitlePortfolio">
            Conoce los proyectos que hemos desarrollado para empresas <br/> como la tuya que alcanzaron el éxito con Abstract.
          </div>
          <PortfolioCard id ={Proyects[0].id} name={Proyects[0].name} back={Proyects[0].back} type={Proyects[0].type} desc= {Proyects[0].desc} ben={Proyects[0].ben}/>
          <div className="cardSpace"></div>
          <PortfolioCard id ={Proyects[1].id} name={Proyects[1].name} back={Proyects[1].back} type={Proyects[1].type} desc= {Proyects[1].desc} ben={Proyects[1].ben}/>
          <div className="cardSpace"></div>
          <PortfolioCard id ={Proyects[2].id} name={Proyects[2].name} back={Proyects[2].back} type={Proyects[2].type} desc= {Proyects[2].desc} ben={Proyects[2].ben}/>
          <div className="cardSpace"></div>
          <PortfolioCard id ={Proyects[3].id} name={Proyects[3].name} back={Proyects[3].back} type={Proyects[3].type} desc= {Proyects[3].desc} ben={Proyects[3].ben}/>
          <div className="cardSpace"></div>
          <PortfolioCard id ={Proyects[4].id} name={Proyects[4].name} back={Proyects[4].back} type={Proyects[4].type} desc= {Proyects[4].desc} ben={Proyects[4].ben}/>

          <div className="gridPort1">

            <div className="gridPort1Title"> Solicitar consultoría gratis.</div>
            <div className="arrowPort"><button onClick={()=>this.closeForm()}><img src={RightArrow} alt="arrow"/></button></div>
          </div>
          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Y tú, tienes en mente un <br/>proyecto? hablemos.</div>
          <div className="blueBorder"></div>
          <div  className="gridPort2Subtitle">Déjanos tus datos y nuestros ejecutivos te estarán contactando en la <br/>brevedad.</div>
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

export default Portfolio;    