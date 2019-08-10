import React, { Component } from 'react';
import Image4 from '../assets/images/Content4/image4.png';
import ImageMapper from 'react-image-mapper';




import './homeContent4.css';



class HomeContent4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        number: 1,
        title: 'Articular',
        description: 'En Abstract aseguramos que el éxito de un proyecto inicialmente está en entender qué quiere lograr nuestro cliente para poder descubrir en conjunto qué camino seguir. '
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    
 
  
}

   handleOnClick(map) {
        
        this.setState({
          number: map.name,
          title: map.title,
          description: map.description
      })
    }



  

    render() {
        const MAP = {
          name: "my-map",
          areas: [
            { name: "1", shape: "circle", coords: [212, 32, 15], fillColor: "#00adea", title: "Acticular", description:"En Abstract aseguramos que el éxito de un proyecto inicialmente está en entender qué quiere lograr nuestro cliente para poder descubrir en conjunto qué camino seguir. " },
            { name: "2", shape: "circle", coords: [338, 75, 15], fillColor: "#00adea", title: "Investigar", description:"Nos permite comprender el contexto, tanto del usuario final como la del cliente y su competencia. De esta manera la toma de decisiones para diseñar soluciones tendrá siempre bases sólidas. "  },
            { name: "3", shape: "circle", coords: [401, 165, 15], fillColor: "#00adea", title: "Diseñar", description:"Enfocamos la estructura de los productos basados en en la información recolectada traducida en productos mínimos viables."  },
            { name: "4", shape: "circle", coords: [399, 282, 15], fillColor: "#00adea", title: "Testear", description:"Los test nos permiten obtener información objetiva sobre la calidad del producto de la mano desde los usuarios finales. Sabemos que  es una de las actividades más importante de todos los procesos."  },
            { name: "5", shape: "circle", coords: [338, 368, 15], fillColor: "#00adea", title: "Implementar", description:"Aquí es cuando se hace la integración y la implementación del sistema, pasando desde la revisión de estilos hasta la codificación." },
            { name: "6", shape: "circle", coords: [212, 410, 15], fillColor: "#00adea", title: "Monitorear", description:"Medir, Analizar, nos permite validar la correcta solución implementada a través de nuestros productos, lo que nos permite además entender si se están cumpliendo los objetivos. "  },

            
          ]

        }
  

        
      return (
        
            
            <div className="grid4">

            <div className="column41">
              <div className="title411">Metodología</div> 
               <div className="subtitle411">Complementamos nuestras metodologías con los avances tecnológicos. Haz click en los puntos y descubre nuestro ciclo de trabajo. </div> 

            </div>
            <div className="column42">
               <div className="imagerow">
                 <ImageMapper src={Image4} map={MAP} 
                
                 onClick={map => this.handleOnClick(map)}
                 onMouseEnter={map=>this.handleOnClick(map)}
  />
                 
              </div> 

            </div>
            <div className="column43">
              <div className="text4">
                  <div className="number43"> {this.state.number} </div>
                  <div>
                  <div className="texttitle"> {this.state.title} </div>
                  <div className="textdesc"> {this.state.description}</div>
                  </div>
              </div>
              </div>  
              
            

            
            </div>
            
            
                    
           
                          
            
      )
    }
  }

export default HomeContent4;    