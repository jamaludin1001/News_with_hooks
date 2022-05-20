import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from 'axios';


export default class ModelView extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            news:[],
            input: ''
        }
    }

    componentDidMount = () => {
        axios
        .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=86f0ca9287334d49a73fdd224f211898")
        .then((data) => {
            //console.log(data.data.articles);
            this.setState({news:data.data.articles});
            this.getView();
        })
        .catch(error => console.log(error));
        };

        
    
    componentDidUpdate = (prevpro) => {
       
       if (prevpro.sendValue.status !== this.props.sendValue.status){
           this.setState({input: this.props.sendValue.search}, () => {
            if (this.props.sendValue.search !== ''){
                axios
                .get(`https://newsapi.org/v2/top-headlines?country=id&q=${this.state.input}&apiKey=86f0ca9287334d49a73fdd224f211898`)
                .then((data) => {
                    this.setState({news:data.data.articles});
                    this.getView();
                })
                .catch(error => console.log(error));
               } else {
                axios
                .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=86f0ca9287334d49a73fdd224f211898")
                .then((data) => {
                    this.setState({news:data.data.articles});
                    this.getView();
                })
                .catch(error => console.log(error));
               }
           });
           
       }
    }

    getView = () => {
        

        return(
            <Row xs={1} md={2} lg={3} className="g-4">
               {
                     this.state.news.map((message, i) => 
                     <Col key={i} >
                     <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={message.urlToImage} />
                        <Card.Body>
                            <Card.Title>{message.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{message.author} -{this.handleDate(message.publishedAt)}</Card.Subtitle>
                            <Card.Text>
                                {message.description}
                            </Card.Text>
                            <Button variant="primary" href={message.url} target="_blank">Read More</Button>
                        </Card.Body>
                     </Card>
                     </Col>
                     )
                }
           </Row>
        )
    }

    handleDate = (data) => {
        var ts = new Date(data);
        let tanggal = ts.toLocaleDateString();
        let jam = ts.toLocaleTimeString('en-GB');

        return tanggal+" "+jam;
    }    

    render(){       
        return(
            <div>
                {this.getView()}
            </div>
        )
    }
}