import React,{ Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';

class AddComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.id==null){

        return(
           <div>
               <h1>
                   Welcome
               </h1>
          </div>
        );
    }

    else{
        return (
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
}
}

export default AddComponent;