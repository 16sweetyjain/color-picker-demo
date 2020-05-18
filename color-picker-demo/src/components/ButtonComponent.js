import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';
import colorCollection  from '../shared/colors';

class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
        
         colorId:1
     
        } }



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
       this.props.deleteColor(colorie.id);
            }
      
        }    
        }
      
       
        render(){
    
const menu=this.props.buttons.map((buttonEle)=>{

return(
    <div key ={buttonEle.id} className="col-12  col-md-5 m-1">       
 <Button onClick={()=>{this.onComponentSelect(buttonEle);this.renderComponents(buttonEle)}} style={{marginTop:"35px",marginLeft:"35px",width:"20%"}}>
  {buttonEle.id!=0 ?`HIDE color ${buttonEle.id}`:'ADD'}
   
 </Button> 

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