import React,{ Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import ColorComponent from './components/ColorComponent';
import ButtonComponent from './components/ButtonComponent';
import Colors from './shared/colors';
import Buttons from './shared/buttons';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttons:Buttons,
      colors:Colors
    
    };
  }
    

  render(){
  return (
   
 <div>
   <ButtonComponent  colors={this.state.colors} buttons={this.state.buttons}/>


 
 </div>

 
  );
}
}

export default App;


