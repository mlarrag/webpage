import React, { Component } from 'react';
import { Form, Select, Input } from 'semantic-ui-react';
import RightArrow from '../assets/images/Content1/rightArrow.png';


import "./quote.css";

const presupuestoOptions = [
  { key: '1', text: '0-5 millones', value: '1' },
  { key: '2', text: '5-10 millones', value: '2' },
  { key: '3', text: '10-15 millones', value: '3' },
]


class Quote extends Component {
    
    
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
          <Form.Group grouped>
            <div className="formTitle">Selecciona las áreas de consultoría que quieres tratar:</div>
            <Form.Field
              label='Asesoría TI'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='Desarrollo web y móvil'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='Experiencia de Usuario UX'
              control='input'
              type='radio'
              name='htmlRadios'
            />
          </Form.Group>
          </div>
          </div>

          <div className="formGrid1"> 
          <div className="formNumber">2</div>
          <div className="formInfo">
          <Form.Group grouped>
            <div className="formTitle">Cuéntanos de tu organización y presupuesto:</div>
            <Form.Field
              label='Empresa consolidada'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='Emprendimiento'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='Agencia'
              control='input'
              type='radio'
              name='htmlRadios'
            />

            <Form.Field
              control={Select}
              options={presupuestoOptions}
              label={{ children: '' }}
              placeholder='Selecciona tu presupuesto'
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />
          </Form.Group>
          </div>
          </div>
          
          <div className="formGrid1"> 
          <div className="formNumber">3</div>
          <div className="formInfo">
          <Form.Group grouped>
            <div className="formTitle">Selecciona la fecha y hora disponible:</div>
           
           <div className="formDateTime">
           <Form.Field
              control={Select}
              options={presupuestoOptions}
              label={{ children: '' }}
              placeholder='Fecha'
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />

            <Form.Field
              control={Select}
              options={presupuestoOptions}
              label={{ children: '' }}
              placeholder='Hora'
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />   
             
          </div> 
 
          </Form.Group>
          </div>
          </div>

          <div className="formGrid1"> 
          <div className="formNumber">4</div>

          <div className="formInfo">
          <Form.Group grouped>
            <div className="formTitle">Déjanos tus datos de contacto:</div>
            <div className="formClientInfo">
            <Input className="formClientInfo1" transparent placeholder='Nombre' />
            <Input className="formClientInfo1" transparent placeholder='Apellido' />
            </div>

            <div className="formClientInfo">  
            <Input className="formClientInfo1" transparent placeholder='Email' />
            <Input className="formClientInfo1" transparent placeholder='Teléfono' />
            </div>
          
            <Form.Field
              label='Enviarme recordatorio de texto a mi número'
              control='input'
              type='radio'
              name='htmlRadios'
            />
     
    
          </Form.Group>
          </div>
          
   
          </div>

          <div className="formButtonPos">
            <div className="formButton">
              Enviar Solicitud <img src={RightArrow} alt="arrow"/>
            </div>
          </div>

  </Form>

              </div>
              
             
             
          

          
              
              
              </div>
            
      )
    }
  }

export default Quote;    