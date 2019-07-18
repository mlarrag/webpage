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
             
             <div className="column51">
                <div className="title5">Clientes</div> 
                <div className="subtitle5"> conoce algunos</div>
                <div className="subtitle5"> quienes han confiado </div>
                <div className="subtitle5"> en nosotros.</div>
            </div>     
             
            <div className="column52">

                
                    <div className="row521">
                    <div className = "clientLogo"><img className = "logoIm" src={VolvoLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={AgroboltLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={VendomaticaLogo}/></div>
                    </div>
                    
                    <div className="row522">
                    <div className = "clientLogo"><img className = "logoIm" src={XtremeLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={TricaoLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={ClaLogo}/></div>
                    </div>
                    
                    <div className="row523">
                    <div className = "clientLogo"><img className = "logoIm" src={ClimoLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={StreetripLogo}/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={DitecLogo}/></div>
                
                    </div>
                
                
            
                
                


            </div>
   
            </div >
            
                    
           
                          
            
      )
    }
  }

export default HomeContent5;    