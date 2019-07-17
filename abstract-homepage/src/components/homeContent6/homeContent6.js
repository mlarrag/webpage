import React, { Component } from 'react';
import Image1 from '../assets/images/Content6/img1.png';
import Image2 from '../assets/images/Content6/img2.png';
import Image3 from '../assets/images/Content6/img3.png';
import Image4 from '../assets/images/Content6/img4.png';
import Image5 from '../assets/images/Content6/img5.png';
import Image6 from '../assets/images/Content6/img6.png';





import './homeContent6.css';



class HomeContent6 extends Component {
  
    render() {
        
  
      return (
        
            
            
            <div className="grid6">  
            <div className="column61">
                <div>
                    <div className="blacktitle">Nuestra Cultura</div> 
                    <div className="bluetitle"><span className="firstblack">#</span>FunFactstract</div>
                
                </div>
                
                <button className="button6">Conoce al equipo</button>
            
            </div> 

                
            <div className="column62">
                <div className="row621">
                    <img src={Image1}/> <img src={Image2}/> <img src={Image3}/></div>
                <div className="row622"><img src={Image4}/> <img src={Image5}/> <img src={Image6}/></div>  
            </div>
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent6;    