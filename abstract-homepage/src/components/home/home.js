import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import { Menu, Dropdown, Segment, Header, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn } from 'semantic-ui-react';
import HomeImage from '../assets/images/home.png';
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
            <Header as='h2'>Creando soluciones innovadoras</Header>
                </div>
          </Segment>
                <Footer/>
            </div>
        )
    }
  }

export default Home;    