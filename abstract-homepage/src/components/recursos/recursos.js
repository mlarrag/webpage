import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import {Segment, Header} from 'semantic-ui-react';

import HeaderImage from '../assets/images/Conocenos/header/bitmap.png';


class Recursos extends Component {

    render() {

      return (
        <div>
           <MainMenu/>
          <Segment style={{
                    backgroundImage: `url(${HeaderImage})`,
                    backgroundSize: 'cover',
                    fontWeight: 'normal',
                    marginBottom: 0,
                }} 
                className="landing">

            <Header as='h1'>Recursos :)</Header>

          </Segment>
          <Footer/>   
        </div>

      )
    }
  }

export default Recursos;    