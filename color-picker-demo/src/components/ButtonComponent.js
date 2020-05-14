import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';


class ButtonComponent extends Component{
    constructor(props){
        super(props);

        this.state={
          
            colorId:0,
           calorie:null,
           compId:null
             
        }
        
    this.onComponentSelect=this.onComponentSelect.bind(this);

        }

        onComponentSelect(button) {
            this.setState({compId:button.id});
         
            if(button.id==0){
                this.setState({colorId: this.state.colorId + 1});
            } 
            else{
                this.setState({colorId:this.state.colorId});
            }
        }
        renderComponents() {
if(this.state.compId==0){
            const colores = this.props.colors.filter((color)=> color.id <= this.state.colorId);
            const reqColor = colores.map((req) => {
               
                return (<div className="col-12  col-md-5 m-1">
                    <Card style={{ backgroundColor: req.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
                        <CardTitle>
                            This is color {req.id}
                        </CardTitle>
                    </Card>
                </div>);
                
                
            
            });
        
    
          return(<div>{reqColor}</div>);
        } 
        else{

            const colores = this.props.colors.filter((color)=> (color.id!==this.state.compId)&&(color.id<this.state.colorId));
            const reqColor = colores.map((req) => {
                
                return (<div className="col-12  col-md-5 m-1">
                    <Card style={{ backgroundColor: req.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
                        <CardTitle>
                            This is color {req.id}
                        </CardTitle>
                    </Card>
                </div>);
             
               
            });
        
    
          return(<div>{reqColor}</div>);
        }    
        }
      
       
        render(){
    
const menu=this.props.buttons.map((button)=>{

return(
    <div key ={button.id} className="col-12  col-md-5 m-1">       
 <Card onClick={()=>{this.onComponentSelect(button)}} style={{backgroundColor:'violet',marginTop:"35px",marginLeft:"35px",width:"20%"}}>
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
    <div className="row">
        {this.renderComponents()};
    </div>
</div>
);

}
}


export default ButtonComponent;
