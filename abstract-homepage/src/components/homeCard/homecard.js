import React, { Component } from 'react';
import VolvoCard from '../assets/images/Volvo/card.png';
import VolvoCardLogo from '../assets/images/Volvo/cardlogo.png';
import TricaoCard from '../assets/images/Tricao/tricaoCard.png';
import TricaoCardLogo from '../assets/images/Tricao/tricaoCardLogo.png';
import VendoWalletCard from '../assets/images/VendoWallet/vendoWalletCard.png';
import VendoWalletCardLogo from '../assets/images/VendoWallet/vendoWalletCardLogo.png';


import './homeCard.css';



class HomeCard extends Component {



  constructor(props) {
    super(props);
    this.state = {
        
        id:1,
        imageClient: VolvoCard,
        imageLogo: VolvoCardLogo,
        description: ' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '
    }

    
}



    render() {
      const CLIENTS = {
        name: "my-map",
        areas: [
          { id : 1 , name: "Volvo", imageClient: VolvoCard, imageLogo: VolvoCardLogo, description:' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '},
          { id : 2 , name: "Tricao", imageClient: TricaoCard, imageLogo: TricaoCardLogo, description:' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '},
          { id : 3 , name: "VendoWallet", imageClient: VendoWalletCard, imageLogo: VendoWalletCardLogo, description:' "Abstract nos brinda un desarrollo oportuno y completo, abarcando '},
         

          
        ]

      }
  

      return (
        <div className="cardTotal">

          <div className="buttonpre"> <button/></div>
          <div className="cardBack0">
            <div className="cardImage"><img className="clientImage" src={CLIENTS.areas[1].imageClient} alt={this.state.id}></img></div>
            <div className="cardLogo"><img  className="clientLogo" src={CLIENTS.areas[1].imageLogo} alt={this.state.id}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>

          <div className="cardBack1">
            <div className="cardImage"><img className="clientImage" src= {CLIENTS.areas[0].imageClient} alt={this.state.name}></img></div>
            <div className="cardLogo"><img className="clientLogo" src={CLIENTS.areas[0].imageLogo} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
         
          <div className="cardBack2">
            <div className="cardImage"><img className="clientImage" src={CLIENTS.areas[2].imageClient} alt={this.state.name}></img></div>
            <div className="cardLogo"><img  className="clientLogo" src={CLIENTS.areas[2].imageLogo} alt={this.state.name}/></div>
            <div className="cardDesc">{this.state.description}</div>
          </div>
          <div className="buttonnext"> <button/></div>
            

        </div>

        
        
 
                
      )
    }
  }

export default HomeCard;    