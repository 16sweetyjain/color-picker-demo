import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import colorCollection  from '../shared/colors';

class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
          
         color_id:null,
         id:null,
         visible:null,
         colorId:1
             
        }


        }

        onComponentSelect(button) {
      
        if(button.id==0){
            this.setState({colorId:this.state.colorId+1});
        }
        else{
            this.setState({colorId:this.state.colorId-1});
        }
        }

        renderComponents(button) {
if(button.id==0&&this.state.colorId<=5){


  const color=colorCollection.find(calorie=>calorie.id==this.state.colorId);
 
    this.props.addColor(color);
           
      } 
        else{
            if(this.state.colorId>=0&&this.state.colorId<=5){
       const colorie=colorCollection.find(colori=>colori.id==button.id);
       this.props.delete(colorie.id);
            }
      
        }    
        }
      
       
        render(){
    
const menu=this.props.buttons.map((button)=>{

return(
    <div key ={button.id} className="col-12  col-md-5 m-1">       
 <Card onClick={()=>{this.onComponentSelect(button);this.renderComponents(button)}} style={{backgroundColor:'violet',marginTop:"35px",marginLeft:"35px",width:"20%"}}>
  {button.id!=0 ?<CardTitle>
       {button.name} color{button.id}
   </CardTitle>:<CardTitle>
       {button.name} color
   </CardTitle>} 
 </Card> 

</div> 

);
});



return(
<div className="container">
    <div className="row">
        {menu}
    </div>
   
</div>
);

}
}


export default ButtonComponent;