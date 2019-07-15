import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import { Segment, Header } from 'semantic-ui-react';
import HomeImage from '../assets/images/home.png';
import HomeContent1 from '../homeContent1/homecontent1';
import HomeContent2 from '../homeContent2/homeContent2';
import HomeContent3 from '../homeContent3/homeContent3';
import HomeContent4 from '../homeContent4/homeContent4';
import HomeContent5 from '../homeContent5/homeContent5';
import HomeContent6 from '../homeContent6/homeContent6';
import './home.css';



class Home extends Component {


    render() {

    
        return (
            <div>
                <MainMenu/>
                <Segment style={{
                    backgroundImage: `url(${HomeImage})`,
                    backgroundSize: 'cover',
                    fontWeight: 'normal',
                    marginBottom: 0,
                }} 
                className="landing">
             <div>       
            <Header as='h1' className="header1">Desarrollamos software a la medida de tu Empresa</Header>
            <Header as='h2' className="header2">Creando soluciones innovadoras</Header>
                </div>
          </Segment>
         
          <HomeContent1/>
          <HomeContent2/>
          <HomeContent3/>
          <HomeContent4/>
          <HomeContent5/>
          <HomeContent6/>
                <Footer/>
            </div>
        )
    }
  }

export default Home;    