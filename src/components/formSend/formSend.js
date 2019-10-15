import React, { Component } from 'react';
import Plane from '../assets/images/Form/plane.png'

import "./formSend.css";




class FormSend extends Component {
    


    
    render() {
        return (
            <div className="gridQuote">
                <div className="quoteTitle">
                    <div>Solicitud de Consultoría Gratis</div>
                    <div onClick={()=> this.props.closeForm()} className="formClose"> X </div> 
                </div>
                
                <div className="sendForm">

                    <div className="sendTitle">¡Hemos agendado nuestra reunión!!</div>
                    <div><img src={Plane} alt="plane"/></div>

                    <div className="sendCal">Enviaremos una invitación de calendario a su dirección de correo electrónico con más detalles.</div>
            
                </div>
                
   
               
            
  
            
                
                
                </div>
              
        )
  

    }
  }

export default FormSend;    