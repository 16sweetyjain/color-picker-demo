import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import AddComponent from './AddComponent';

class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            compSelected:null,
            compId:null
        }

        }
        onComponentSelect(button) {
            this.setState({compSelected:button, compId:button.id});   
          }
      renderComponents(compId){
          if(compId==1){
              return(
<div>
            <div className="col-12  col-md-5 m-1">
                <Card>
                  <CardBody style={{width:"20%",backgroundColor:'red',margin: "35px"}}>
                  <CardTitle>
                    This is color 1
                  </CardTitle>
                  </CardBody>
                </Card>
                </div>
            </div>
              );
          }
          
          if(compId==2){
              return(
                  <div></div>
              );
          }
      }
        render(){
    
const menu=this.props.buttons.map((button)=>{

return(
    <div key ={button.id} className="col-12  col-md-5 m-1">       
 <Card onClick={()=> this.onComponentSelect(button)} style={{backgroundColor:'violet',marginTop:"35px",marginLeft:"35px",width:"20%"}}>
   <CardTitle>
       {button.name}
   </CardTitle>
 </Card> 

</div> 

);
});

return(
<div className="container">
    <div className="row">
        {menu}
    </div>
    <div className="row">
        {this.renderComponents(this.state.compId)};
    </div>
</div>
);
}
}


export default ButtonComponent;