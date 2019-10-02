import React, { Component } from 'react';
import {Dropdown, Icon } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import { Modal, TransitionablePortal} from 'semantic-ui-react';
import Quote from '../quote/quote';

import "./footer.css";





class Footer extends Component {
  constructor(props) {
    super(props)
      this.state={
  
        form: false,
        animation:'scale',
        duration: 700
      }
    
     this.closeForm=this.closeForm.bind(this)
    }

        
    closeForm(){
        this.setState({form: !this.state.form})
        }
  
    render() {
      const { animation, duration} = this.state
  
      return (
        
            
                <div  className='menuuu'>
                    <div  className="copyy">
                        <div className="textt"> <Icon className ="iconn" name='copyright outline' />Abstract Software 2019. Todos los derechos reservados. </div>
                    </div>


                    <div className="footerMenu">
                    
                         <Link to="/#servicios" smooth={true} duration={700}><div className="footerButton"><span className="footerBlue" >•</span>Servicios</div></Link>
                         <Link to="/blog"><div className="footerButton"><span className="footerBlue" >•</span>Blog</div></Link>
                         <a href="https://www.getonbrd.com/companies/abstract-cl-d8c3"><div className="footerButton"><span className="footerBlue" >•</span>Empleos</div></a>
                         <div onClick={()=>this.closeForm()} className="footerButton" ><span className="footerBlue" >•</span>Cotiza en Línea</div>

                    </div>
                    <div className="footerLang">
                    <Dropdown className="footerDrop" icon ='angle up' text='Español'>
                            <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <TransitionablePortal open={this.state.form} transition={{ animation, duration }}>
            <Modal basic className="quoteSize" open={true} >
                <Quote closeForm={this.closeForm}/>
                 </Modal>
                 </TransitionablePortal>   
                    
                </div>


            
            
                
        
          

            
          

      )
    }
  }

export default Footer;    