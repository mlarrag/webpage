import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';
import VolvoLogo from '../assets/images/Content5/VolvoLogo.png';
import AgroboltLogo from '../assets/images/Content5/AgroboltLogo.png';
import VendomaticaLogo from '../assets/images/Content5/VendomaticaLogo.png';
import XtremeLogo from '../assets/images/Content5/XtremeLogo.png';
import TricaoLogo from '../assets/images/Content5/TricaoLogo.png';
import ClaLogo from '../assets/images/Content5/ClaLogo.png';
import ClimoLogo from '../assets/images/Content5/ClimoLogo.png';
import StreetripLogo from '../assets/images/Content5/StreetripLogo.png';
import DitecLogo from '../assets/images/Content5/DitecLogo.png';


import './homeContent5.css';



class HomeContent5 extends Component {
  
    render() {
        
  
      return (
        
            

            <div className="grid5">

            
             
             <div className="columnC">
                <div ><p>Clientes</p></div> 
                <div > <p>conoce algunos quienes han confiado en nosotros. </p></div>
            </div>     
             
            <div className="columnL">

                <div className = "clientColumn">
                    <div className = "clientLogo"><Image src={VolvoLogo}/></div>
                    <div className = "clientLogo"><Image src={XtremeLogo}/></div>
                    <div className = "clientLogo"><Image src={ClimoLogo}/></div>

                </div>


                <div className = "clientColumn">
                    <div className = "clientLogo"><Image src={AgroboltLogo}/></div>
                    <div className = "clientLogo"><Image src={TricaoLogo}/></div>
                    <div className = "clientLogo"><Image src={StreetripLogo}/></div>
                </div>
                
                <div className = "clientColumn">
                    <div className = "clientLogo"><Image src={VendomaticaLogo}/></div>
                    <div className = "clientLogo"><Image src={ClaLogo}/></div>
                    <div className = "clientLogo"><Image src={DitecLogo}/></div>
                </div>
                
                
                
            
                
                


            </div>
   
            </div >
            
                    
           
                          
            
      )
    }
  }

export default HomeContent5;    