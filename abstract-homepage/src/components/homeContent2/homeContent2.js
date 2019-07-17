import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';
import Icono1 from '../assets/images/Content2/icono1.png';
import Icono2 from '../assets/images/Content2/icono2.png';
import Icono3 from '../assets/images/Content2/icono3.png';
import Arrow from '../assets/images/Content2/arrow.png';


import './homeContent2.css';



class HomeContent2 extends Component {
  
    render() {
        
  
      return (
        
            

            <div className="grid2">

            
             <div className="column11">
                  
            <div className="title1">Dentro de nuestra filosofía de trabajo estamos siempre comprometidos a entregar:</div> 
            
            <div>
            <div className="number"> 1 </div>
            <div className="text1"> Innovación y tecnología. </div>
            <div className="number"> 2 </div>
            <div className="text1"> Estándares de calidad. </div>
            <div className="number"> 3 </div>
            <div className="text1"> Aseguramiento del Retorno de Inversión. </div>
            </div>
             </div >
             <div className="column12">

            <div >  
            <div className="columntitle"> Nuestros Servicios </div>  
            <div className="roww"><div><Image className="icon" size='tiny' src={Icono1}/></div><div className="itemrowtitle"> Asesoría TI</div></div>
            <div className="roww"><div className="itemrow">Nuestros ingenieros expertos en tecnología se empapan de tu negocio para ayudarte a generar oportunidades y modernizar tu empresa. </div>
            <div className="arrow"><Image src={Arrow} /></div></div>
            <div className="roww"><div><Image className="icon" size='tiny' src={Icono2}/></div><div className="itemrowtitle">  Experiencia de Usuario UX </div></div>
            <div className="roww"><div className="itemrow"> Con nuestro excepcional equipo UX/UI, tenemos un proceso claro y efectivo que involucra al cliente en todo momento, asegura un producto tal como lo esperas y una entrega a tiempo. </div>
            <div className="arrow"><Image src={Arrow} /></div></div>
            <div className="roww"><div><Image className="icon" size='tiny' src={Icono3}/></div><div className="itemrowtitle"> Desarrollo web y móvil</div></div>
            <div className="roww"><div className="itemrow"> Estamos al día con las últimas tecnologías para entregarte aplicaciones web diseñadas para crecer. Nuestro equipo crea las mejores herramientas para trabajar desde cualquier lugar. </div>
            <div className="arrow"><Image src={Arrow} /></div></div>
            </div>
             </div >
            </div>
                    
           
                          
            
      )
    }
  }

export default HomeContent2;    