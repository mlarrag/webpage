import React, { Component } from 'react';
import { Dropdown ,Modal} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MenuImage from '../assets/images/menu.png'
import RightArrow from '../assets/images/Content1/rightArrow.png'
import Quote from '../quote/quote';
import Sidebar from '../sideBar/sideBar';
import "./mainmenu.css";




class Mainmenu extends Component {

    constructor(props) {
        super(props)
          this.state={
            open: false,
            form: false,
          }
         this.closeSideBar=this.closeSideBar.bind(this) 
         this.closeForm=this.closeForm.bind(this)
        }
    
    
        closeSideBar(){
        this.setState({open: !this.state.open})
        }

            
        closeForm(){
            this.setState({form: !this.state.form})
            }

    render() {
      
        
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

            <Modal basic className="quoteSize" open={this.state.form} trigger={<div onClick={()=>this.closeForm()} className="mibutton">Solicitar consulta gratuita <img className="arrowMenu" src={RightArrow} alt="fun"/></div> }>
                <Quote closeForm={this.closeForm}/>
                 </Modal>

            <div className="burgerMenu">
              <Modal basic open={this.state.open} trigger={ <img onClick={()=>this.closeSideBar()} src={MenuImage} alt="menu" />} > 

                <Sidebar closeSideBar={this.closeSideBar}/>
              
              </Modal> 
              
              </div>

            </div>
        </div>

)}





    }
  

export default Mainmenu;    