import React, { Component } from 'react';
import {Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import "./footer.css";





class Footer extends Component {
 
  
    render() {
      
  
      return (
        
            
                <div  className='menuuu'>
                    <div  className="copyy">
                        <div className="textt"> <Icon className ="iconn" name='copyright outline' />Abstract Software 2019. Todos los derechos reservados. </div>
                    </div>


                    <div className="footerMenu">
                    
                         <Link to="/asesoriati"><div className="footerButton"><span className="footerBlue" >•</span>Servicios</div></Link>
                         <Link to="/blog"><div className="footerButton"><span className="footerBlue" >•</span>Blog</div></Link>
                         <Link to="/jobs"><div className="footerButton"><span className="footerBlue" >•</span>Empleos</div></Link>
                         <Link to="/jobs"><div className="footerButton" ><span className="footerBlue" >•</span>Cotiza en Línea</div></Link>

                    </div>
                    <div className="footerLang">
                    <Dropdown className="footerDrop" icon ='angle up' text='Español'>
                            <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    
                </div>


            
            
                
        
          

            
          

      )
    }
  }

export default Footer;    