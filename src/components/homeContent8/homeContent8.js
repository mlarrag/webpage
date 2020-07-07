import React, { Component } from 'react';
import {Input ,Button} from 'semantic-ui-react';
import axios from 'axios';


import './homeContent8.css';



class HomeContent8 extends Component {
  
    constructor(props){
      super(props)
      this.state={
        name: "",
        lastName:"",
        email: "",
        phone: 0,
        message: "",

      }
    }

    valid(item, type){

      
      let itemValue = item.target.value;

      switch(type){
        case "name":
          {
            this.setState({name:itemValue})
            break
          
        }
        case "lastName":{
          this.setState({lastName:itemValue})
          break
        }
        case "email":{
          this.setState({email:itemValue})
          break
        }
        case "phone":{
          this.setState({phone:itemValue})
          break
        }
        case "message":{
          this.setState({message:itemValue})
          break
        }
        default: 
        return null
      }
    
    }

    submitHandler(){
      let obj = {};
      obj.name = this.state.name;
      obj.lasName = this.state.lastName;
      obj.email = this.state.email;
      obj.phone = this.state.phone;
      obj.message = this.state.message;
      
      axios.post('https://www.getpostman.com/collections/64adf845f64927ce5f19',obj)
        .then(response => {
          console.log(response)
        })
        .catch(error=>{
          console.log(error)

        })
    }
    
    render() {
        
      
      return (
        
            
            
            <div className="grid8">  
            <div className="column81">
                <div className="row811">
                    <div className="title81" > Negocios</div>
                    <div className="subtitle81">aas@abstract.cl</div>
                    <div className="title81" > Consultas</div>
                    <div className="subtitle81">+56 00000000</div>
                    <div className="title81" > Empleos</div>
                    <div className="subtitle81">aas@abstract.cl</div>
                    

                </div>
                
            
            </div> 

                
            <div className="column82">

                <div className="title82">
                ¿Quieres que te contactemos?
                </div>

                <div className="subtitle82"> Déjanos tus datos, y nuestros asesores se comunicarán contigo </div>
                
                <div className="form6">
                  <div className="form6row">
                      <div className="form6column1"><Input  onChange={(item) => this.valid(item, "name")} className= "uiInput" inverted transparent placeholder='Nombre' /> </div>
                     
                     <div className="form6column"><Input  onChange={(item) => this.valid(item, "lastName")} inverted transparent placeholder='Apellido' /></div>
                  </div>
                  <div className="form6row">
                  <div className="form6column1"><Input onChange={(item) => this.valid(item, "email")} inverted transparent placeholder='Mail' />  </div>
                  <div className="form6column"> <Input  onChange={(item) => this.valid(item, "phone")} inverted transparent placeholder='Teléfono' />  </div>

                   </div> 
                     <div className="form6row2"><Input  onChange={(item) => this.valid(item, "message")} inverted transparent placeholder='Motivo de contacto' /></div>
                     <div className="form6button"><Button onClick={()=> this.submitHandler()} className= "formButton" active>Enviar</Button></div>
                </div>
                
                
                
            </div>
            
            

            </div>
      
           
                          
            
      )
    }
  }

export default HomeContent8;    