import React, { Component } from 'react';
import { Form, Select, Input, Checkbox } from 'semantic-ui-react';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import axios from 'axios';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';


import "./quote.css";

const presupuestoOptions = [
  { key: '1', text: '0-10 millones', value: '1' },
  { key: '2', text: '10-20 millones', value: '2' },
  { key: '3', text: '20-30 millones', value: '3' },
  { key: '4', text: '30-50 millones', value: '4' },
  { key: '5', text: '50 o más millones', value: '5' },
]


class Quote extends Component {
    
  constructor(props){
    super(props)
    this.state={
      consultingArea:0,
      bussinessType:0,
      budget:0,
      date:'',
      time:'',
      name: "",
      lastName:"",
      email: "",
      phone: 0,
      rememberClient:false,

    }
  }

  handleType = (e, { value }) => this.setState({consultingArea: value})

  handleBusiness = (e, { value }) => this.setState({bussinessType: value})
   
  handleBudget = (e, { value }) => this.setState({budget: value})

  handlerememberClient = (e, { value }) => this.setState({rememberClient: !value})
  handleDate = (event, {name, value}) => {
    
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
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
    obj.consultingArea = this.state.consultingArea;
    obj.bussinessType = this.state.bussinessType
    obj.budget =this.state.budget;
    obj.name = this.state.name;
    obj.lasName = this.state.lastName;
    obj.email = this.state.email;
    obj.phone = this.state.phone;
    obj.message = this.state.message;
    obj.rememberClient= this.state.rememberClient;
    console.log("submitdata", obj)
    this.props.sendForm()
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
          <div className="gridQuote">
              <div className="quoteTitle">
                  <div>Solicitud de Consultoría Gratis</div>
                  <div onClick={()=> this.props.closeForm()} className="formClose"> X </div> 
              </div>
              <div className="quoteSubTitle">Tenemos una cita para ti de 30 min gratis con nuestros expertos. Déjanos tus datos para agendar nuestra reunión</div>
              <div className="quoteForm">
              <Form>
          <div className="formGrid1"> 
          <div className="formNumber">1</div>
          <div className="formInfo">
          
            <div className="formTitle">Selecciona las áreas de consultoría que quieres tratar:</div>
            
            
              <Checkbox
            radio
            label='Asesoría TI'
            name='checkboxRadioGroup'
            value= '1'
            checked={this.state.consultingArea === '1' }
            onChange={this.handleType}
            className="checkForm"
          />
           <Checkbox
            radio
            label='Desarrollo web y móvil'
            name='checkboxRadioGroup'
            value= '2'
            checked={this.state.consultingArea === '2' }
            onChange={this.handleType}
            className="checkForm"
          />
            <Checkbox
            radio
            label='Experiencia de Usuario UX'
            name='checkboxRadioGroup'
            value= '3'
            checked={this.state.consultingArea === '3' }
            onChange={this.handleType}
            className="checkForm"
          />
          
         
          

          
          </div>
          </div>

          <div className="formGrid1"> 
          <div className="formNumber">2</div>
          <div className="formInfo">
          
            <div className="formTitle">Cuéntanos de tu organización y presupuesto:</div>
            <Checkbox
            radio
            label='Empresa Consolidada'
            name='tipoEmpresa'
            value= '1'
            checked={this.state.bussinessType === '1' }
            onChange={this.handleBusiness}
            className="checkForm"
          />
            <Checkbox
            radio
            label='Emprendimiento'
            name='tipoEmpresa'
            value= '2'
            checked={this.state.bussinessType === '2' }
            onChange={this.handleBusiness}
            className="checkForm"
          />
            <Checkbox
            radio
            label='Agencia'
            name='tipoEmpresa'
            value= '3'
            checked={this.state.bussinessType === '3' }
            onChange={this.handleBusiness}
            className="checkForm"
          />

            <Form.Field
              control={Select}
              options={presupuestoOptions}
              label={"Presupuesto"}
              placeholder='Selecciona tu presupuesto'
              search
              onChange={this.handleBudget}
            />
         
          </div>
          </div>
          
          <div className="formGrid1"> 
          <div className="formNumber">3</div>
          <div className="formInfo">
          
            <div className="formTitle">Selecciona la fecha y hora disponible:</div>
           
           <div className="formDateTime">
           <DateInput
          name="date"
          closable={true}
          autoComplete="off"
          
          placeholder="Date"
          value={this.state.date}
          
          onChange={this.handleDate}
        />
        <TimeInput
          name="time"
          placeholder="Time"
          value={this.state.time}
          iconPosition="left"
          onChange={this.handleDate}
        />

             
          </div> 
 
        
          </div>
          </div>

          <div className="formGrid1"> 
          <div className="formNumber">4</div>

          <div className="formInfo">
          
            <div className="formTitle">Déjanos tus datos de contacto:</div>
            <div className="formClientInfo">
            <Input onChange={(item) => this.valid(item, "name")} className="formClientInfo1" transparent placeholder='Nombre' />
            <Input onChange={(item) => this.valid(item, "lastName")} className="formClientInfo1" transparent placeholder='Apellido' />
            </div>

            <div className="formClientInfo">  
            <Input onChange={(item) => this.valid(item, "email")} className="formClientInfo1" transparent placeholder='Email' />
            <Input onChange={(item) => this.valid(item, "phone")} className="formClientInfo1" transparent placeholder='Teléfono' />
            </div>
          

          <Checkbox
            
            label='Enviarme recordatorio de texto a mi número'
            name='remember'
            value= {true}
            //checked={this.state.rememberClient === 'true' }
            onChange={this.handlerememberClient}
            className="checkRemember"
          />
    
          
          </div>
          
   
          </div>



  </Form>



              </div>
              
              <div className="formButtonPos">
            <div onClick={()=> this.submitHandler()} /*onClick={()=> this.props.sendForm()}*/ className="formButton">
              Enviar Solicitud <img src={RightArrow} alt="arrow"/>
            </div>
          </div>
             
          

          
              
              
              </div>
            
      )
    }
  }

export default Quote;    