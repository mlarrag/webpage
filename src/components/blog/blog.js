import React, { Component } from 'react';
import MainMenu from '../mainmenu/mainmenu';
import Footer from '../footer/footer';
import BlogCard from '../blogCard/blogCard';
import Head from '../head/head';
import RightArrow from '../assets/images/Content1/rightArrow.png';



class Blog extends Component {

    render() {

      return (
        <div>
           <MainMenu/>
           <Head name="Blog" back="blog"/>
          <BlogCard/>
          <div className="cardSpace"></div>
          <BlogCard/>
          <div className="cardSpace"></div>
          <BlogCard/>

          <div className="gridPort2">
          <div className="gridPort2Title"> ¿Quieres estar atento a nuestros <br/>contenidos?</div>
          <div className="blueBorder"></div>
          <div className="gridPort2Subtitle"> Déjanos tus datos y te avisaremos cuando tengamos nuevos contenidos de tu interés en tu bandeja de entrada</div>
          </div>

          <div className="gridPort3">
            <div className="formPort">
              <div className="inputPort">Nombre Completo </div>
              <div className="inputPort">Email </div>
            </div>
            <div className="formPortB">
              <button><div className="buttonPort">Enviar <img src={RightArrow} alt="arrow"/></div></button>  
            </div>

          </div>
          <Footer/>   
        </div>

      )
    }
  }

export default Blog;    