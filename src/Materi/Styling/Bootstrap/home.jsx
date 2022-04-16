import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends React.Component{
    render() {
        return(
            
            <div className="container mt-3" id="home">
            <div className=" p-5 mb-3 mt-3 bg-light rounded-3 jumbotron">
            <div className="container-lfuid py-5 text-center">
                <p className="f-5 fst-italic mt-5">Student in Eduwork</p>
                <h1 className="display-4">Jamaludin Saputra</h1>
                <button className="btn btn-warning border-dark btn-sm mt-5 shadow-sm text-with px-3 py-2">likedin profile</button> 
            </div>
          </div>
        </div>
            
        )
    }
}