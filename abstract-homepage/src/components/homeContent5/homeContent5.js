import React, { Component } from 'react';
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
                <div className="subtitle5"> conoce algunos <br/> quienes han confiado en nosotros.</div>
         
            </div>     
             
            <div className="column52">

                
                    <div className="row521">
                    <div className = "clientLogo"><img className = "logoIm" src={VolvoLogo} alt="Volvo"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={AgroboltLogo} alt="AgroBolt"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={VendomaticaLogo} alt="Vendomatica"/></div>
                    </div>
                    
                    <div className="row522">
                    <div className = "clientLogo"><img className = "logoIm" src={XtremeLogo} alt="Xtreme"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={TricaoLogo} alt="Tricao"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={ClaLogo} alt="Cla"/></div>
                    </div>
                    
                    <div className="row523">
                    <div className = "clientLogo"><img className = "logoIm" src={ClimoLogo} alt="Climo"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={StreetripLogo} alt="Streetip"/></div>
                    <div className = "clientLogo"><img className = "logoIm" src={DitecLogo} alt="Ditec"/></div>
                
                    </div>
                
                
            
                
                


            </div>
   
            </div >
            
                    
           
                          
            
      )
    }
  }

export default HomeContent5;    