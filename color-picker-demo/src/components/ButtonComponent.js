import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';


class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            compSelected:null,
            compId:null,
            colorId:0
           
          
        }
        
    this.onComponentSelect=this.onComponentSelect.bind(this);

        }

        onComponentSelect(button) {
            this.setState({compSelected:button, compId:button.id,
            colorId:this.state.colorId+1});

           
          }
        
          renderComponents(compId,colorId){
   
            let  colores=this.props.colors.filter((color)=>
                   color.id <= colorId);

                
                 
                 const reqColor=colores.map((req)=>{
                
                  if(compId==1){
                    
                    return(
      <div>
      <div>
      <div className="col-12  col-md-5 m-1">
          <Card>
            <CardBody style={{width:"20%",backgroundColor:req.color_id,margin: "35px"}}>
            <CardTitle>
              This is color {req.id}
            </CardTitle>
            </CardBody>
          </Card>
          </div>
      </div>
                  </div>
                    );
                 
                }
                
                if(compId==2){
                    return(
                        <div></div>
                    );
                }
           });

                 }
         
          
         
            
        render(){
    
const menu=this.props.buttons.map((button)=>{

return(
    <div key ={button.id} className="col-12  col-md-5 m-1">       
 <Card onClick={()=>{this.onComponentSelect(button)}} style={{backgroundColor:'violet',marginTop:"35px",marginLeft:"35px",width:"20%"}}>
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
        {this.renderComponents(this.state.compId,this.state.colorId)};
    </div>
</div>
);

}
}


export default ButtonComponent;