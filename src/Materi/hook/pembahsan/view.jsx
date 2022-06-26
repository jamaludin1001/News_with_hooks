import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Berita= (props)=>{
    
    return(
        <div className="card">
            <Row >
                <Col > 
                    <Card >
                            <Card.Img variant="top" src={props.urlToImage} /> 
                            <Card.Body >
                            <Card.Title key={props.id}>{props.title}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <stong> <i> <p className="card-author mb-2 text-muted">{props.author}</p> </i> </stong>
                            <u> <p className="card-publisheadAt mb-2 text-muted">{props.publishedAt}</p> </u>
                            <Button href={props.link} variant="primary" target="_blank">Detail</Button>
                            </Card.Body>
                    </Card>
                </Col >
            </Row>
        </div>
    )   
}

export default Berita;