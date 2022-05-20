import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container,Form, FormControl,  Nav, Navbar } from "react-bootstrap";
import ModelView from "./ModelView"


export default class TaskRecycle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            search: '',
            status: ''
        }
    }

    handleChange = (event) =>{
        this.setState({search: event.target.value, status: ''})
    }
    handleSubmit = () =>{
        this.setState({status:'submit'})
    }
   

    render(){

        return(
            <div > 
               
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                            <Container>
                                <Navbar.Brand href="#home" >React Class News</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#bio">Home</Nav.Link>
                                        <Nav.Link href="#contact"></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                    </Navbar>
                    <br/>
                </div>
                <div className="justify-content-center" style={{width: '90%'}}>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={this.handleChange}
                        />
                        <Button variant="outline-success" onClick={this.handleSubmit}>Search</Button>
                    </Form>
                </div>
                <br/>
                <ModelView sendValue={this.state}/>
            </div>
        )
    }
}