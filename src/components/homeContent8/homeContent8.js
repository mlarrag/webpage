import React, { Component } from 'react';
import {Input ,Button} from 'semantic-ui-react';


import './homeContent8.css';



class HomeContent8 extends Component {
  
    render() {
        
  
      return (
        
            
            
            <div className="grid8">  
            <div className="column81">
                <div className="row811">
                    <div className="title81" > Negocios</div>
                    <div className="subtitle81">aas@abstract.cl</div>
                    <div className="title81" > Consultas</div>
                    <div className="subtitle81">+56 00000000</div>
                    <div className="title81" > Empleos</div>
                    <div className="subtitle81">aas@abstract.cl</div>
                    

                </div>
                
            
            </div> 

                
            <div className="column82">

                <div className="title82">
                ¿Quieres que te contactemos?
                </div>

                <div className="subtitle82"> Déjanos tus datos, y nuestros asesores se comunicarán contigo </div>
                
                <div className="form6">
                  <div className="form6row">
                      <div className="form6column1"><Input className= "uiInput" inverted transparent placeholder='Nombre' /> </div>
                     
                     <div className="form6column"><Input inverted transparent placeholder='Apellido' /></div>
                  </div>
                  <div className="form6row">
                  <div className="form6column1"><Input inverted transparent placeholder='Mail' />  </div>
                  <div className="form6column"> <Input inverted transparent placeholder='Teléfono' />  </div>

                   </div> 
                     <div className="form6row2"><Input inverted transparent placeholder='Motivo de contacto' /></div>
                     <div className="form6button"><Button className= "formButton" active>Enviar</Button></div>
                </div>
                
                
                
            </div>
            
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent8;    