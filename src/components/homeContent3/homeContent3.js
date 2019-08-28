import React, { Component } from 'react';


import Icono1 from '../assets/images/Content3/iconoval1.png';
import Icono2 from '../assets/images/Content3/iconoval2.png';
import Icono3 from '../assets/images/Content3/iconoval3.png';




import './homeContent3.css';



class HomeContent3 extends Component {
  
    render() {
        
  
      return (
        
            

            <div className="grid3">

            
            <div className="column31">
            <div className="quote3">“”</div>      
            <div className="title31">Desarrollamos Software de excelencia.<br/> Ayudamos a su negocio a transformarse, <br/>creando productos altamente escalables.</div> 
            

             </div >
             <div className="column32">

             
            <div className="column321">
            <div className="title321"> Nuestros <br/> valores</div>
            
            </div>

            <div className="column322">
              <div className="column3221">
                  <div className="image3221"><img src={Icono1} alt="fun" /></div>
                  <div className="title322">  Compromiso</div>
              </div>

              <div className="column3221">
                  <div className="image3221"><img src={Icono2} alt="fun" /></div>
                  <div className="title322"> Transparencia</div>
              </div>


              <div className="column3221">
                  <div className="image3221"><img src={Icono3} alt="fun" /></div>
                  <div className="title322"> Empatía</div>
              </div>
              
     
            </div>
            
            </div>
            </div >
            
                    
           
                          
            
      )
    }
  }

export default HomeContent3;    