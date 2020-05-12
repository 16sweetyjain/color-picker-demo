import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';

class ButtonComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
<div>
  <Button  id="add-button" type="button" style={{margin: "35px"}}>Add</Button>
  </div>
  <div>
  <Button  id="subtract-button" type="button" style={{marginLeft:"35px",marginTop:"15px"}}>Subtract</Button>
  </div>
 </div>
        );
    }
}

export default ButtonComponent;