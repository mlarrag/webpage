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

      
     let factorScreen=1;
     let factorR=1;
     let correctW= 0;
     let correctH=0;
     let las3Big=0;

      if (window.innerWidth<1300){
        factorScreen = 300/433;
        factorR= 1;

      }

    
      if (window.innerWidth>2000){
        factorScreen = (700/433);
        correctW = -9;
        las3Big=-8;
        factorR= 1.8;

      }


        const MAP = {
          name: "my-map",
          areas: [
            { name: "1", shape: "circle", coords: [212*factorScreen+correctW, 32*factorScreen+correctH, 15*factorR],  fillColor:"transparent", strokeColor: "blue", lineWidth:0.5, title: "Articular", description:"En Abstract aseguramos que el éxito de un proyecto inicialmente está en entender qué quiere lograr nuestro cliente para poder descubrir en conjunto qué camino seguir. " },
            { name: "2", shape: "circle", coords: [338*factorScreen+correctW, 75*factorScreen+correctH, 15*factorR], fillColor:"transparent", strokeColor: 'rgba(0, 0, 0, 0)', lineWidth:0, title: "Investigar", description:"Nos permite comprender el contexto, tanto del usuario final como la del cliente y su competencia. De esta manera la toma de decisiones para diseñar soluciones tendrá siempre bases sólidas. "  },
            { name: "3", shape: "circle", coords: [401*factorScreen+correctW, 165*factorScreen+correctH, 15*factorR], lineWidth: "0", fillColor:"transparent", title: "Diseñar", description:"Enfocamos la estructura de los productos basados en en la información recolectada traducida en productos mínimos viables."  },
            { name: "4", shape: "circle", coords: [399*factorScreen+correctW, 282*factorScreen+correctH+las3Big, 15*factorR], lineWidth: "0", fillColor:"transparent", title: "Testear", description:"Los test nos permiten obtener información objetiva sobre la calidad del producto de la mano desde los usuarios finales. Sabemos que  es una de las actividades más importante de todos los procesos."  },
            { name: "5", shape: "circle", coords: [338*factorScreen+correctW, 368*factorScreen+correctH+las3Big, 15*factorR], lineWidth: "0", fillColor:"transparent", title: "Implementar", description:"Aquí es cuando se hace la integración y la implementación del sistema, pasando desde la revisión de estilos hasta la codificación." },
            { name: "6", shape: "circle", coords: [212*factorScreen+correctW, 410*factorScreen+correctH+las3Big, 15*factorR], lineWidth: "0", fillColor:"transparent", title: "Monitorear", description:"Medir, Analizar, nos permite validar la correcta solución implementada a través de nuestros productos, lo que nos permite además entender si se están cumpliendo los objetivos. "  },

            
          ]

        }


 

        
      return (
        
            
            <div className="grid4">

            <div className="column41">
              <div className="title411">Metodología</div> 
               <div className="subtitle411">Complementamos nuestras <br/> metodologías con <br/> los avances tecnológicos. Haz <br/> click en los puntos y descubre<br/>  nuestro ciclo de trabajo. </div> 

            </div>
            <div className="column42">
               
                                
               <div className="mapper4">
                 <ImageMapper src={Image4} map={MAP} 
                 
                 active={false}
                 onClick={map => this.handleOnClick(map)}
                 onMouseEnter={map=>this.handleOnClick(map)} /> </div>


             
         

          
              

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