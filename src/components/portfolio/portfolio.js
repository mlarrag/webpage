import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import Head from '../head/head';

import './portfolio.css'



class Portfolio extends Component {

    render() {

      return (
        <div>
          <MainMenu/>
          <Head name="Portfolio"/>
          <div className="subtitlePortfolio">
            Conoce los proyectos que hemos desarrollado para empresas <br/> como la tuya que alcanzaron el éxito con Abstract.
          </div>
          <Footer/>   
        </div>

      )
    }
  }

export default Portfolio;    