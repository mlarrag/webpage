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

            
             <div className="column21">
                  
            <div className="title1">Dentro de nuestra <br/> filosofía de trabajo<br/> estamos siempre <br/> comprometidos a <br/>entregar:</div> 
            
            <div>
            <div className="number"> 1 </div>
            <div className="text1"> Innovación y <br/>tecnología. </div>
            <div className="number"> 2 </div>
            <div className="text1"> Estándares de <br/>calidad. </div>
            <div className="number"> 3 </div>
            <div className="text1"> Aseguramiento del <br/>Retorno de <br/>Inversión. </div>
            </div>
             </div >
             <div className="column22">

             
             <div className="bigrow"> <div className="columntitle"> Nuestros Servicios </div>  
            <div className="roww"><div className="icon2"><img  src={Icono1} alt="fun"/></div><div className="itemrowtitle"> Asesoría TI</div></div>
            <div className="roww"><div className="itemrow">Nuestros ingenieros expertos en tecnología se empapan de<br/> tu negocio para ayudarte a generar oportunidades y <br/>modernizar tu empresa. </div>
            <div className="arrow"><Image src={Arrow} /></div></div></div>
             <div className="bigrow"><div className="roww"><div className="icon2"><img src={Icono2} alt="fun"/></div><div className="itemrowtitle">  Experiencia de Usuario UX </div></div>
            <div className="roww"><div className="itemrow"> Con nuestro excepcional equipo UX/UI, tenemos un proceso<br/> claro y efectivo que involucra al cliente en todo momento, <br/>asegura un producto tal como lo esperas y una entrega a <br/>tiempo. </div>
            <div className="arrow"><Image src={Arrow} /></div></div></div>
             <div className="bigrow2">
               
               
            <div className="roww"><div className="icon2"><img src={Icono3} alt="fun"/></div><div className="itemrowtitle"> Desarrollo web y móvil</div></div>
            <div className="roww"><div className="itemrow"> Estamos al día con las últimas tecnologías para entregarte<br/> aplicaciones web diseñadas para crecer. Nuestro equipo crea <br/>las mejores herramientas para trabajar desde cualquier lugar. </div>
            <div className="arrow"><Image src={Arrow} /></div></div>
               </div> 


            
             </div >
            </div>
                    
           
                          
            
      )
    }
  }

export default HomeContent2;    