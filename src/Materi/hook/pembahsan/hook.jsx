import { useEffect, useState, Fragment } from "react"
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Berita from "./view";

const Hooks = (props) => {
    let [news, setNews] = useState([]);
    let [search, setSearch] = useState("");

    useEffect(()=>{
            fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-25&to=2022-06-25&sortBy=popularity&apiKey=de31adcbe0a24fbba991c2e0933fd211')
            .then(response => response.json())
            .then((data) => {
                    setNews(data.articles);
                })
        
        },[])
    
    const onSubmitButton = () => {
        alert ("telah di submut")
            fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-25&to=2022-06-25&sortBy=popularity&apiKey=de31adcbe0a24fbba991c2e0933fd211' + search)
            .then(response => response.json())
            .then((data) => {
                    setNews(data.articles);
                })
    }
    return (
        <Fragment>
             <div>
             <Navbar bg="secondary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                            React News Jamaludin Saputra
                    </Navbar.Brand>
                    </Container>
                
                    </Navbar>
                    
                   <div className="body" >
                   <div className="col-md-8">
                   <InputGroup className=" mb-3">
                        <FormControl  className="input-keyword"
                        placeholder="Search News"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={search}
                        onChange ={(event)=> setSearch (event.target.value)}
                        />
                        <Button variant="outline-secondary"   className="submit"
                         onClick= {onSubmitButton}
                         id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                    </div>
                     
                    <main className="grid">
                    {  
                    news.map((articles)=>{
                            return <Berita  urlToImage={articles.urlToImage} 
                                            title={articles.title}
                                            description={articles.description}
                                            author={articles.author}
                                            publishedAt={articles.publishedAt}
                                            link={articles.url}
                                             />
                                            
                        })
                        
                    }

                    </main>         
                     
                 </div>  
             </div>
        </Fragment>
    )
}
export default Hooks;