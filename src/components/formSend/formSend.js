import React, { Component } from 'react';


import "./formSend.css";




class FormSend extends Component {
    


    
    render() {
        return (
            <div className="gridQuote">
                <div className="quoteTitle">
                    <div>Solicitud de Consultoría Gratis</div>
                    <div onClick={()=> this.props.closeForm()} className="formClose"> X </div> 
                </div>
                
                <div className="quoteForm">

                ¡Hemos agendado nuestra reunión!!
  
  
                </div>
                
   
               
            
  
            
                
                
                </div>
              
        )
  

    }
  }

export default FormSend;    