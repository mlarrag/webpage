import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';
import Back3 from '../assets/images/Content3/fondo3.png';
import Icono1 from '../assets/images/Content2/icono1.png';
import Icono2 from '../assets/images/Content2/icono2.png';
import Icono3 from '../assets/images/Content2/icono3.png';
import Arrow from '../assets/images/Content2/arrow.png';



import './homeContent3.css';



class HomeContent3 extends Component {
  
    render() {
        
  
      return (
        
            

            <div className="grid3">

            
             <div style={{background: `url(${Back3})`}} className="column3">
                  
            <div className="title3"><p>Desarrollamos Software de excelencia. Ayudamos a su negocio a transformarse, creando productos altamente escalables.</p></div> 
            

             </div >
             <div className="column4">

             
            <div className="title4"> <p>Nuestros Valores</p> </div>  
            <div className="title4"> <p>Compromiso</p> </div>  
            <div className="title4"> <p>Transparencia</p> </div>  
            <div className="title4"> <p>Empatía</p> </div>  
            
            
            </div>
            </div >
            
                    
           
                          
            
      )
    }
  }

export default HomeContent3;    