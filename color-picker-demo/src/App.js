import React,{ Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import ShowColor from './components/ShowColor';
import ButtonComponent from './components/ButtonComponent';

import Buttons from './shared/buttons';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttons:Buttons,
     
       colors:[{id:'0',color_id:'		#FFFFFF'}]
    
    };
  }
    addColor=(color)=>{
     let colori=[...this.state.colors,color];
      this.setState({
        colors: colori
      });
 console.log(this.state.colors);
    }
    deleteColor=(id)=>{
let colori =this.state.colors.filter((color)=>{
return (color.id!==id);

});
this.setState({colors:colori});
    }

  render(){
  return (
   
 <div>
   <ButtonComponent  addColor={this.addColor} deleteColor={this.delete} buttons={this.state.buttons}/>
   
<ShowColor colors={this.state.colors}/>

 
 </div>

 
  );
}
}

export default App;


