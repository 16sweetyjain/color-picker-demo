import React,{ Component } from 'react';
import {Card,CardImg,CardTitle} from 'reactstrap';

class ShowColor extends Component{
    constructor(props){
        super(props);
    }


    render(){
      
      const ans=this.props.colors.map((color)=>{
     
       
     return(     <div>
              <Card style={{ backgroundColor: color.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
                  <CardTitle>
                     This is  {color.id}
                  </CardTitle>

              </Card>
          </div>
     );
          
      });
    
      return(
          <div>
              {ans}
              </div>
      );
      }
    }


export default ShowColor;