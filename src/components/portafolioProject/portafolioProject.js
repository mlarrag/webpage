import React, { Component } from 'react';
import LeftArrow from '../assets/images/Content1/leftArrow.png';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import RightArrowWhite from '../assets/images/Content1/rightArrowWhite.png';
import MainMenu from '../mainmenu/mainmenu';
import Head from '../head/head';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';



import './portafolioProject.css'


class PortfolioProject extends Component {


  constructor(props) {
    super(props);
    this.state = {
      photoGal: "Gal1",
      x: props.x,
  
    }
  }

  Proyects=
  [ 
  {id: 0, name: "Volvo", back: "volvo", chal: "Diseñar nuevos protocolos que permitieran sumar y  mejorar canales de comunicación entre la automotora y sus clientes para sus servicios de post-venta. Ofrecer una interfaz intuitiva y acorde al diseño de marca de Volvo con estandar mundial.", about: "Volvo App ofrece un nuevo canal de comunicación entre la concesionaria y sus clientes. Permite que estos agenden la mantención de sus vehículos y los mantiene actualizados de las últimas noticias y promociones. La experiencia de los usuarios y el contenido de la aplicación varía según los automóviles que estos posean, entregando así un servicio personalizado.", info: " es una fábrica de automóviles sueca con sede en Torslanda, Gotemburgo, subsidiaria de la compañía automotriz china Geely. Volvo chile por su parte entrega soluciones que se transforman en resultados concretos útiles para su automóvil.​ ",type: "App Móvil", desc:"Canal de comunicación entre la indumotora y sus clientes.", ben: "Permite el agendamiento de horas <br/>para servicio y mantenimiento."},
  {id: 1, name: "Parque Tricao", back: "tricao", chal:"Se trabajó mano a mano con el equipo de Parque Tricao para planear, diseñar y testear todo el flujo del cliente, desde que este visita la web del Parque, pasando por la compra de tickets, hasta su visita. El Parque no tiene cobertura telefónica, por lo que todos los sistemas deben estar listos para funcionar offline.", about: "Acompañamos a Parque Tricao en su proceso de convertirse en un parque abierto al público. Nuestros equipos debieron trabajar juntos para diseñar todo los aspectos de la compra de entradas del visitante. También se realizaron grandes labores para implementar el módulo de administración del Parque." ,info: " es una reserva ecológica privada, abierta a la comunidad, ubicada en la Comuna de Santo Domingo en la Región de Valparaíso y a sólo una hora de Santiago, Chile", type: "App Web", desc:"La magia de la naturaleza, lacultura y la vida al aire libre", ben: "Conexión digital con las reserva ecológica, permite organizar, comprar, reservar y vivir unaexperiencia completa de servicio."},
  {id: 2, name: "Vendowallet", back: "vendowallet", chal:"La aplicación móvil de Vendowallet debe conectarse a máquinas de vending, lo que añadió una dificultad técnica extra.La solución fue adoptada y utilizada a diario por muchos usuarios en muy corto tiempo, lo que le exigió a nuestro equipo una gran velocidad de respuesta para adecuarse a este nuevo desafío.", about:"Vendowallet es un servicio que utilizan empresas para entregar un beneficio a sus colaboradores. Los usuarios pueden comprar en máquinas de vending utilizando su martphone, y los empleadores pueden configurar el monto y la periodicidad con que les recargan dinero..", info:" es la aplicación de compras y recargas de dinero a través de la conexión con máquinas de ventas de snack de Vendomatica* Una empresa Chilena fundada en el año 1979 enfocada en servir como servicio de consumo de snack y bebidas en oficinas, empresas y espacios públicos.", type: "App Android / iOS", desc:"Servicio de beneficios en snacks y bebidas para colaboradores de empresass.", ben: "Pensado y desarrollado como una billetera digital, segura, flexible y confiable."},
  {id: 3, name: "Agrobolt", back: "agrobolt", chal:"Entregar al usuario un servicio simple de usar, pero con una gran capacidad de personalización. El manejo de tecnologías Iot implica manejar enormes cantidades de datos por segundo, y manejarlos en tiempo real. Darle inteligencia a los datos para que sean util por el usuario.", about:"Agrobolt es un servicio de monitoreo de predios agrícolas. Utilizando tecnologías IoT (Internet of Things), se instalan sensores dentro de los campos que permiten medir una serie de variables. El cliente tiene la capacidad de visualizar estos datos en tiempo real, y realizar análisis sobre su base de datos histórica.", info:" es una empresa que ofrece digitaliza el sector agrícola chileno, monitoreando in situ las variables que impactan en el campo, generando así información de valor para maximizar rendimientos y minimizar costos.", type: "App Web", desc:"Servicio de monitoreo de pedidos agrícolas", ben: "Manejo de datos pensados para cumplir las necesidades de los clientes finales. "},
  {id: 4, name: "Xtreme Mining", back: "xtreme", chal:"Diseñar un modelo de trabajo que mejore el funcionamiento actual de las plantas, rescatando lo bueno y aprovechando las posibilidades que abre la tecnología para optimizar procesos. Esto es especialmente difícil en la minería, donde el ecosistema de empresas y trabajadores es muy complejo.", about:"Xtreme es un servicio utilizado en la minería para organizar a distintos actores que toman parte en la operación diaria en la minería. La aplicación permite planificar toda la entrega de hormigon en la mina El Teniente.", info:" es una empresa fundada en el año 2000 con el objetivo principal de atender los constantes requerimientos para la instalación de Hormigones especiales de Alta Resistencia, bajo rigurosos estándares de calidad exigidos para todas las áreas críticas en la Minería.", type: "App Android / iOS", desc:"Operación diaria en la minería solución con tecnología.", ben: "Diseñada para planificar, organizar, y monitorear las entregas de hormigones dentro de la organización. "},
  ] 

  


    handleOnClickGal(){
      const gal =this.state.photoGal === 'Gal1'?  'Gal2': 'Gal1';


      this.setState({ photoGal : gal})
      
    }

  

    render() {
 

      var x = this.state.x

      var ProjectImg = require(`../assets/images/Project/${this.Proyects[x].back}Img.png`)
      var ProjectBg2 = require(`../assets/images/Project/${this.Proyects[x].back}Back2.jpg`)
      var ProjectGal1 = require(`../assets/images/Project/${this.Proyects[x].back}${this.state.photoGal}.jpg`)
      
      
    

      

      return (
          <div>
            <MainMenu/>
            <div><Head name={this.Proyects[x].name} back={this.Proyects[x].back}/></div>
            
              <div className="gridIntro"> 
                      
              <Link to="/portfolio">
                <div className="navBack"> 

                        <img src={LeftArrow} alt="Abstract"/> 
                          Portafilio / <span className="textBlue">{this.Proyects[x].name}</span>

                      </div></Link>
                      <div className="gridImgText">

                            <div className="gridImg"><img src={ProjectImg} alt="fun"/> </div>
                            <div className="gridText">
                                  <div className="projTitle">{this.Proyects[x].desc}</div>
                                  <div className="projSubTitle"> {this.Proyects[x].type}</div>
                            
                            </div>

                      </div>

              </div>
              
            <div className="gridInfo">

              <div className="gridAbout">
                <div className="projSubTitle">Sobre el proyecto</div> 
                <div className="projText">{this.Proyects[x].about}</div>
                </div>
              <div className="gridCha">
                <div className="projSubTitle">Desafío</div>
                <div className="projText">{this.Proyects[x].chal}</div>
                </div> 
              
              </div>

            
                <div className="girdGalery" style ={ { backgroundImage: "url("+ProjectGal1+")" } }>

                <div className="galeryButton1" onClick={()=> this.handleOnClickGal()}><img src={LeftArrow} alt="arrow"/> </div>
                <div className="galeryButton2" onClick={()=> this.handleOnClickGal()}><img src={RightArrowWhite} alt="arrow"/> </div>

            </div>

            <div className="gridResults" >
                <div className="titleResult">Resultados </div>
                <div className="textResult"><span className="textBlueLight">•</span> Experiencia personalizada. </div>
                <div className="textResult"><span className="textGrey">•</span>Comunicación estandarizada y directa. </div>
                <div className="textResult"><span className="textBlueLight">•</span>Administrador de agenda y seguimiento de servicios. </div>
              </div>


            <div className="gridPinfo" style ={ { backgroundImage: "url("+ProjectBg2+")" } }>
              <div className="infoText"><span className="textBlue">{this.Proyects[x].name}</span>{this.Proyects[x].info}</div>
              
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

export default PortfolioProject;    