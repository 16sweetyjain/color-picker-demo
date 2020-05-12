import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';

class Color extends Component{
    constructor(props){
        super(props);

    }

    render(){ 
        return(
            <div className="container">

            <div className="row">
              <div className="col-12  col-md-5 m-1">
               <Card>
                 <CardBody style={{width:"20%",backgroundColor:'#66CDAA',margin: "35px"}}>
                 <CardTitle>
                   This is color 1
                 </CardTitle>
                 </CardBody>
               </Card>
               </div>
            
               <div className="col-12  col-md-5 m-1">
               <Card>
                 <CardBody style={{width:"20%",backgroundColor:'#BA55D3',margin: "35px"}}>
                 <CardTitle>
                   This is color 2
                 </CardTitle>
                 </CardBody>
               </Card>
               </div>
            
               </div>
            
             </div>
            
        );

    }
}

export default Color;