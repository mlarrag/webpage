import React, { Component } from 'react';
import VolvoCard from '../assets/images/Volvo/card.png';
import VolvoCardLogo from '../assets/images/Volvo/cardlogo.png';
import { Menu, Dropdown, Grid, Segment, Header, Image, Icon, Responsive, Sidebar, Container, Button, DropdownMenu, DropdownItem, GridColumn, Card } from 'semantic-ui-react';



class HomeCard extends Component {


    constructor(props) {
        super(props)    
    
                    }

//     getActivity(activity, i) {
//       return (
//           <Grid.Column key={i} className='activity-column'>
//           <Activity  id={activity.id} title={activity.title} description={activity.description} image={activity.image} type={activity.type} destination={activity.destination} />
//           </Grid.Column>
//            )
// }                
  
    render() {

        const {id, logo, description, image, type} = this.props;  
      return (
        
        <Card>
         <Image src={VolvoCard} circular size="medium" bordered centered/>
         
         <Image src={VolvoCardLogo} avatar centered/>
             <Card.Content>
        <Card.Description>
        "Abstract nos brinda un desarrollo oportuno y completo, abarcando  
        </Card.Description>
        </Card.Content>

        </Card>
                
      )
    }
  }

export default HomeCard;    