import React, { Component } from 'react';
import { Dropdown ,Modal, TransitionablePortal} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import RightArrow from '../assets/images/Content1/rightArrow.png'
import Quote from '../quote/quote';
import Sidebar from '../sideBar/sideBar';
import "./mainmenu.css";
import FormSend from '../formSend/formSend';




class Mainmenu extends Component {

    constructor(props) {
        super(props)
          this.state={
            open: false,
            form: false,
            send: false,
            animation:'scale',
            duration: 700
          }
         this.closeSideBar=this.closeSideBar.bind(this) 
         this.closeForm=this.closeForm.bind(this)
         this.sendForm=this.sendForm.bind(this)
        }
    
    
        closeSideBar(){
        this.setState({open: !this.state.open})
        }

            
        closeForm(){
            this.setState({form: !this.state.form, send: false})
            }

        sendForm(){
            this.setState({send: !this.state.send, form: true})
            
    
            }

    render() {
      
        const { animation, duration} = this.state

        return (
        
            
        <div className="menuu">
          
            <div className="logoMenu">
                <Link to="/" ><img src={Logo} alt="Abtract Logo"/></Link>
            </div>
            
            <div className="buttonsMenu">
            <div className="buttonLang">                   
          
               <Dropdown icon='angle down' text='Español'>
                <Dropdown.Menu >
                <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div onClick={()=>this.closeForm()} className="mibutton">Solicitar consulta gratuita <img className="arrowMenu" src={RightArrow} alt="fun"/></div>
            

            

            <div className="burgerMenu">
            <img onClick={()=>this.closeSideBar()} src={MenuImage} alt="menu" />
         
              
              </div>

            </div>

            <TransitionablePortal open={this.state.form} transition={{ animation, duration }}>
            <Modal basic className="quoteSize" open={true} >
                <Quote closeForm={this.closeForm} sendForm={this.sendForm}/>
                
                 </Modal>

                 </TransitionablePortal>
                 
                 <TransitionablePortal open={this.state.send} transition={{ animation, duration }}>
                    <Modal basic className="quoteSize" open={true} >
                        <FormSend closeForm={this.closeForm}/>
                
                 </Modal>

                 </TransitionablePortal>

            <TransitionablePortal open={this.state.open} transition={{ animation, duration }}>
            <Modal basic open={true}  > 

            <Sidebar closeSideBar={this.closeSideBar}/>

            </Modal> 
            </TransitionablePortal>
        </div>

)}





    }
  

export default Mainmenu;    