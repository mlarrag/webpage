import React, { Component } from 'react';
import {Segment, Icon} from 'semantic-ui-react';

import './homeContent2.css';



class HomeContent2 extends Component {
  
    render() {
        
  
      return (
        
            

            <Segment className="grid2">

            
             <Segment className="column1">
                   <p className="textblack"> Dentro de nuestra filosofía de trabajo estamos siempre comprometidos a entregar:</p>
            
            <Segment>
            <Segment> 1 </Segment>
            <Segment> Innovación y tecnología. </Segment>
            <Segment> 2 </Segment>
            <Segment> Estándares de calidad. </Segment>
            <Segment> 3 </Segment>
            <Segment> Aseguramiento del Retorno de Inversión. </Segment>
            </Segment>
             </Segment >
             <Segment className="column2">

            <Segment >  
            <Segment className="itemrowtitle"> Nuestros Servicios </Segment>  
            <Segment className="itemrowtitle"> <Icon name='barcode'/>Asesoría TI </Segment>
            <Segment className="itemrow">Nuestros ingenieros expertos en tecnología se empapan de tu negocio para ayudarte a generar oportunidades y modernizar tu empresa. </Segment>
            <Segment className="itemrowtitle"> <Icon name='barcode'/>Experiencia de Usuario UX </Segment>
            <Segment className="itemrow"> Con nuestro excepcional equipo UX/UI, tenemos un proceso claro y efectivo que involucra al cliente en todo momento, asegura un producto tal como lo esperas y una entrega a tiempo. </Segment>
            <Segment className="itemrowtitle"> <Icon name='barcode'/>Desarrollo web y móvil</Segment>
            <Segment className="itemrow"> Estamos al día con las últimas tecnologías para entregarte aplicaciones web diseñadas para crecer. Nuestro equipo crea las mejores herramientas para trabajar desde cualquier lugar. </Segment>
            </Segment>
             </Segment >
            </Segment>
                    
           
                          
            
      )
    }
  }

export default HomeContent2;    