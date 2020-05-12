import React,{ Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import ColorComponent from './components/ColorComponent';
import ButtonComponent from './components/ButtonComponent';
import AddComponent from './components/AddComponent';
import Buttons from './shared/buttons';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttons:Buttons,
     selectedComp:null
    };
  }
    onCompSelect(CompId) {
      this.setState({selectedComp:CompId});   
    }

  render(){
  return (
   
 <div>
  
 <ColorComponent/>
 <ButtonComponent  buttons={this.state.buttons} onClick={(CompId)=>this.onCompSelect(CompId)}/>
 
 </div>

 
  );
}
}

export default App;

//<AddComponent  button={this.state.buttons.filter((button)=>button.id===this.state.selectedComp)[0]}/>
