import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';

import HomeContent0 from '../homeContent0/homeContent0';
import HomeContent1 from '../homeContent1/homecontent1';
import HomeContent2 from '../homeContent2/homeContent2';
import HomeContent3 from '../homeContent3/homeContent3';
import HomeContent4 from '../homeContent4/homeContent4';
import HomeContent5 from '../homeContent5/homeContent5';
import HomeContent6 from '../homeContent6/homeContent6';
import HomeContent7 from '../homeContent7/homeContent7';
import HomeContent8 from '../homeContent8/homeContent8';
import HomeContent9 from '../homeContent9/homeContent9';
import './home.css';







class Home extends Component {


    render() {

    
        return (
            <div>
                
                <MainMenu/>

            <HomeContent0/>
            <HomeContent1/>
            <HomeContent2/>
            <HomeContent3/>
            <HomeContent4/>
            <HomeContent5/>
            <HomeContent6/>
            <HomeContent7/>
            <HomeContent8/>
            <HomeContent9/>

                <Footer/>
            </div>
        )
    }
  }

export default Home;    