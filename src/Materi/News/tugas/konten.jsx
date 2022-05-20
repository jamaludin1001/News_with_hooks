import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";


class Konten extends React.Component{
        constructor(props) {
          super(props);
          this.state = {
            Cards: []
          };
        }
      
        componentDidMount() {
          fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32&q=")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                 
                 Cards: result.Cards
                });
              },
            
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
          
            )
        }
      
        render() {
            const {Cards, item, index} = this.state;
              console.log()
            return (
                <div className="row">
          
                        {
                            Cards.map((item, index) (
                            <div className="col" key={index}>
                            <div className="card">
                            <Card className="col-md-4 mt-3 my-3">
                            <Card.Img variant="top" src={item.urlToImage} />

                                <Card.Body>
                                    <Card.Title>{item.tille}</Card.Title>
                                    <Card.Text>{item.Buttondescription}
                                    </Card.Text>
                                    <stong> <i> <p class="card-author mb-2 text-muted">{item.author}</p> </i> </stong>
                                    <u> <p class="card-publisheadAt mb-2 text-muted">{item.publishedAt}</p> </u>
                                    <Button variant="primary">Detail</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                        
                        
                        ))
                        }
                        
                                </div>
                  
            );
          }
    }
export default Konten

