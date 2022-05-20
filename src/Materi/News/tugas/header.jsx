import React, { Fragment } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Berita from "./view";

 class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            articles:[],
            input: '',
            search:'',
            status: ''
            
        }
    }
    
    handleSubmit = () =>{
       const q = this.state.search 
        fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32&q='+q)
        .then(response => response.json())
        .then(
                (result) => {
                  this.setState({
                    articles: result.articles
                  });
                  
                }
        );
    }

    handleInputChange=(e) =>{this.setState({
        search:e.target.value
    })}

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32&q=')
        .then(response => response.json())
        .then(
                (result) => {
                  this.setState({
                    articles: result.articles
                  });
                  
                }
        );
    }
    componentDidUpdate(){
        fetch('https://newsapi.org/v2/top-headlines?country=id&q=${this.state.input}apiKey=599e0889d56045f4bbff7bc47af4dd32&q=')
    }
    
    render(){
          
        return(
           <Fragment className="container">
             
               <div>
                <Navbar bg="secondary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                            React News_Jamals
                    </Navbar.Brand>
                    </Container>
                
                    </Navbar>
                    
                   <div className="body" >
                   <div className="col-md-8">
                   <InputGroup className="">
                        <FormControl onChange={this.handleInputChange} className="input-keyword"
                        placeholder="Search News"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary"    onClick={this.handleSubmit}
                         id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                    </div>
                     
                    <div className="grid">
                    {
                        
                        this.state.articles.map(articles=>{
                            return <Berita  urlToImage={articles.urlToImage} 
                                            title={articles.title}
                                            description={articles.description}
                                            author={articles.author}
                                            publishedAt={articles.publishedAt}
                                            link={articles.url}
                                             />
                                            
                        })
                        
                    }

                    </div>         
                     
    </div>
    </div>
           </Fragment>

        )
    }
}
export default Header;