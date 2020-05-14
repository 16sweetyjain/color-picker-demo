import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';


class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            compSelected:null,
            compId:null,
            colorId:0,
           
           
          
        }
        
    this.onComponentSelect=this.onComponentSelect.bind(this);

        }

        onComponentSelect(button) {
            this.setState({compSelected:button, compId:button.id});
            if(this.state.compId==1){
                this.setState({colorId:this.state.colorId+1})
            }
    
           
          }
      
          renderComponents(compId,colorId){


                   if(compId==1){
                    const  colores=this.props.colors.filter((color)=>
                    color.id <= colorId);
                 const reqColor=colores.map((req)=>{
              //  console.log(req);
            
                return(
                        <div  className="col-12  col-md-5 m-1">
   
   <Card  style={{backgroundColor:req.color_id, width:"20%",marginTop:"35px",marginLeft:"35px"}}>
         
            <CardTitle>
              This is color {req.id}
            </CardTitle>
        
          </Card>
          
          </div>
                );
            
 
            });
      
return(
      <div>
          {reqColor}
      </div>
);
    }

    if(compId==2){
    
        const  colores=this.props.colors.filter((color)=>
        color.id !== colorId);
        const reqColor=colores.map((req)=>{
            return(
        <div  className="col-12  col-md-5 m-1">
   
        <Card  style={{backgroundColor:req.color_id, width:"20%",marginTop:"35px",marginLeft:"35px"}}>
              
                 <CardTitle>
                   This is color {req.id}
                 </CardTitle>
             
               </Card>
               
               </div>
            );

    
      });
      return(
      <div>
          {reqColor}
      </div>
      );
            }
        
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
