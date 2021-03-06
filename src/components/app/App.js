import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from '../scrollUp/scrollUp'
import Home from '../home/home';
import AboutUs from '../aboutUs/aboutUs';
import Services from '../services/services';
import Portfolio from '../portfolio/portfolio';
import Blog from '../blog/blog';
import Recursos from '../recursos/recursos';
import Contact from '../contact/contact';
import Jobs from '../jobs/jobs';
import Tricao from '../parquetricao/parquetricao';
import Volvo from '../volvo/volvo';
import VendoWallet from '../vendowallet/vendowallet';
import XtremeMining from '../xtrememining/xtrememining';
import AgroBolt from '../agrobolt/agrobolt';
import PortfolioProject from '../portafolioProject/portafolioProject';
import ContentTi from '../contentTi/contentTi';
import ContentWeb from '../contentWeb/contentWeb';
import ContentExp from '../contentExp/contentExp';
import axios from 'axios';




class App extends Component {

  componentDidMount(){
    axios.get('https://www.getpostman.com/collections/64adf845f64927ce5f19')
    .then(res => {
      console.log(res)

    })
  }
  render() {
      return (
        <div style={{height: '100%'}}>
          <BrowserRouter >
          <ScrollToTop>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/aboutus" render={() => <AboutUs/>}/>
            <Route exact path="/services" render={() => <Services/>}/>
            <Route exact path="/portfolio" render={() => <Portfolio/>}/>
            <Route exact path="/blog" render={() => <Blog/>}/>
            <Route exact path="/recursos" render={() => <Recursos/>}/>
            <Route exact path="/contact" render={() => <Contact/>}/>
            <Route exact path="/jobs" render={() => <Jobs/>}/>
            <Route exact path="/project" render={() => <PortfolioProject/>}/>
            <Route exact path="/tricao" render={() => <Tricao/>}/>
            <Route exact path="/volvo" render={() => <Volvo/>}/>
            <Route exact path="/vendowallet" render={() => <VendoWallet/>}/>
            <Route exact path="/xtreme" render={() => <XtremeMining/>}/>
            <Route exact path="/agrobolt" render={() => <AgroBolt/>}/>
            <Route exact path="/asesoriati" render={() => <ContentTi/>}/>
            <Route exact path="/desarrolloweb" render={() => <ContentWeb/>}/>
            <Route exact path="/experiencia" render={() => <ContentExp/>}/>
            </ScrollToTop> 
          </BrowserRouter>

        </div>
      )
  }
}

export default App;