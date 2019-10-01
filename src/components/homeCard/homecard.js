import React, { Component } from 'react';
import VolvoCard from '../assets/images/Volvo/card.png';
import VolvoCardLogo from '../assets/images/Volvo/cardlogo.png';
import TricaoCard from '../assets/images/Tricao/tricaoCard.png';
import TricaoCardLogo from '../assets/images/Tricao/tricaoCardLogo.png';
import VendoWalletCard from '../assets/images/VendoWallet/vendoWalletCard.png';
import VendoWalletCardLogo from '../assets/images/VendoWallet/vendoWalletCardLogo.png';
import Agrobolt from '../assets/images/Content1/agroboltImg.png';
import AgroboltLogo from '../assets/images/Content5/AgroboltLogo.png';
import Xtreme from '../assets/images/Content1/xtremeImg.png';
import XtremeLogo from '../assets/images/Content5/XtremeLogo.png';
import RightArrow from '../assets/images/Content1/rightArrow.png';
import LeftArrow from '../assets/images/Content1/leftArrow.png';


import './homeCard.css';



class HomeCard extends Component {



  constructor(props) {
    super(props);
    this.state = {
        
        id1:0,
        id2:1,
        id3:2,
        imageClient: [TricaoCard, VolvoCard, VendoWalletCard, Agrobolt, Xtreme ],
        imageLogo: [TricaoCardLogo, VolvoCardLogo, VendoWalletCardLogo, AgroboltLogo, XtremeLogo],
        description: ' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '
    }

    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleOnPre = this.handleOnPre.bind(this);
}

handleOnPre(e){

  this.state.id1 === 0 ? this.setState({id1: 4}) : this.setState({id1:this.state.id1-1})
  this.state.id2 === 0 ? this.setState({id2: 4}) : this.setState({id2:this.state.id2-1})
  this.state.id3 === 0 ? this.setState({id3: 4}) : this.setState({id3:this.state.id3-1})
                  
  
  



};


handleOnNext(e){

  this.state.id1 === 4 ? this.setState({id1: 0}) : this.setState({id1:this.state.id1+1})
  this.state.id2 === 4 ? this.setState({id2: 0}) : this.setState({id2:this.state.id2+1})
  this.state.id3 === 4 ? this.setState({id3: 0}) : this.setState({id3:this.state.id3+1})

};


    render() {


      return (
        <div className="cardTotal">

          <div className="buttonpre"><button onClick={this.handleOnPre}><img className="buttonBack" src={LeftArrow} alt="flecha" /></button></div>
          <div className="cardBack0">
            <div className="cardImage"><img className="clientImage" src={this.state.imageClient[this.state.id1]} alt={this.state.id1}></img></div>
            <div className="cardLogo"><img  className="clientLogoo" src={this.state.imageLogo[this.state.id1]} alt={this.state.id}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>

          <div className="cardBack1">
            <div className="cardImage"><img className="clientImage" src= {this.state.imageClient[this.state.id2]} alt={this.state.name}></img></div>
            <div className="cardLogo"><img className="clientLogooVolvo" src={this.state.imageLogo[this.state.id2]} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
         
          <div className="cardBack2">
            <div className="cardImage"><img className="clientImage" src={this.state.imageClient[this.state.id3]} alt={this.state.name}></img></div>
            <div className="cardLogo"><img  className="clientLogoo" src={this.state.imageLogo[this.state.id3]} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
          <div className="buttonnext"> <button  onClick={this.handleOnNext}><img className="buttonFwd" src={RightArrow} alt="flecha" /></button></div>
            

        </div>

        
        
 
                
      )
    }
  }

export default HomeCard;    