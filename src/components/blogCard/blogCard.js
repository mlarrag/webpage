import React, { Component } from 'react';

import RightArrow from '../assets/images/Content1/rightArrow.png';
import Facebook from '../assets/images/Blog/facebook.png';
import Twitter from '../assets/images/Blog/twitter.png';
import Email from '../assets/images/Blog/mail.png';
import Avatar from '../assets/images/Blog/avatar.png';
import { Link } from 'react-router-dom';

import './blogCard.css'




class BlogCard extends Component {




    render() {


    //var cardBg = require(`../assets/images/Portfolio/${this.props.back}Back.jpg`)
   // var cardImg = require(`../assets/images/Portfolio/${this.props.back}Img.jpg`)

      return (
        
       <div>

        <div className="gridBCard">
        
            <div className="columnBC1" >
            </div>


            <div className="columnBC2">

  
                <div className="bloggerInfo" >
                <div><img src={Avatar} alt="arrow"/></div>
                <div className="bloggerName">Nombre <div className="bloggerDate">03 Mayo 2019 a las 00:00 hrs</div> </div>

                </div>


                <div className="blogCTitle" >
                        5 pasos imprescindibles para diseñar productos de alto impacto digital.
                </div>

                <div className="blogCSubtitle" >
                        A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC.  that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                </div>

                <div className="blogCSocial" >

                    <div className="socialButtons"><img src={Facebook} alt="arrow"/><img src={Twitter} alt="arrow"/><img src={Email} alt="arrow"/></div> <Link to={"/"} ><img src={RightArrow} alt="arrow"/></Link>
                </div>
            
            </div>
            
           
            </div>
        </div>

      )
    }
  }

export default BlogCard;    