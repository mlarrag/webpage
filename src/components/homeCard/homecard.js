import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import VolvoCard from '../assets/images/Volvo/card.png';
import VolvoCardLogo from '../assets/images/Volvo/cardlogo.png';
import TricaoCard from '../assets/images/Tricao/tricaoCard.png';
import TricaoCardLogo from '../assets/images/Tricao/tricaoCardLogo.png';
import VendoWalletCard from '../assets/images/VendoWallet/vendoWalletCard.png';
import VendoWalletCardLogo from '../assets/images/VendoWallet/vendoWalletCardLogo.png';
import RightArrow from '../assets/images/Content1/rightArrow.png'
import LeftArrow from '../assets/images/Content1/leftArrow.png'


import './homeCard.css';



class HomeCard extends Component {



  constructor(props) {
    super(props);
    this.state = {
        
        id:1,
        imageClient: [TricaoCard, VolvoCard, VendoWalletCard],
        imageLogo: [TricaoCardLogo, VolvoCardLogo, VendoWalletCardLogo],
        description: ' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '
    }

    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleOnPre = this.handleOnPre.bind(this);
}

handleOnPre(e){

  this.setState ({imageClient: [VolvoCard, TricaoCard, VendoWalletCard],
                  imageLogo:[VolvoCardLogo, TricaoCardLogo, VendoWalletCardLogo]
  
  })



};


handleOnNext(e){

  this.setState ({imageClient: [VolvoCard, VendoWalletCard, TricaoCard],
                   imageLogo:[VolvoCardLogo, VendoWalletCardLogo, TricaoCardLogo]
  })

};


    render() {


      return (
        <div className="cardTotal">

          <div className="buttonpre"><Button inverted onClick={this.handleOnPre}><img className="buttonBack" src={LeftArrow} alt="flecha" /></Button></div>
          <div className="cardBack0">
            <div className="cardImage"><img className="clientImage" src={this.state.imageClient[0]} alt={this.state.id}></img></div>
            <div className="cardLogo"><img  className="clientLogoo" src={this.state.imageLogo[0]} alt={this.state.id}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>

          <div className="cardBack1">
            <div className="cardImage"><img className="clientImage" src= {this.state.imageClient[1]} alt={this.state.name}></img></div>
            <div className="cardLogo"><img className="clientLogoo" src={this.state.imageLogo[1]} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
         
          <div className="cardBack2">
            <div className="cardImage"><img className="clientImage" src={this.state.imageClient[2]} alt={this.state.name}></img></div>
            <div className="cardLogo"><img  className="clientLogoo" src={this.state.imageLogo[2]} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
          <div className="buttonnext"> <Button inverted onClick={this.handleOnNext}><img className="buttonBack" src={RightArrow} alt="flecha" /></Button></div>
            

        </div>

        
        
 
                
      )
    }
  }

export default HomeCard;    