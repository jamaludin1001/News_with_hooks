import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from "react-bootstrap";

export default class Berita extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
         
          berita: []
        };
      }
    componentDidMount(){
          fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32&q=')
            .then(response => response.json())
            .then(json =>{
                this.setState(
                    {
                        berita: json
                    }
                )
            });
    }

    render(){
        const {Cards, item, index} = this.state;
              
        return(
           <Fragment>
               <div className="body">
               {
                        Cards.map((item, index) (
            <Row xs={1} md={3} className="g-4">
           
                <Col>
                    
                        
                    <Card key={index}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{item.tille}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                      
         </Col>
        
    </Row>
  ))
}
</div>
           </Fragment>
    
        )
    }
}