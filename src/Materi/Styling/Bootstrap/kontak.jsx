import React from "react";
import Info from "./gambar/telephone-handle-silhouette.png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Kontak extends React.Component{
    render() {
        return (
            <div className="container mt-3 " id="contact">
            <h2 className= "text-center" ><img src={Info} className="kontak" alt="kotak" width="30px" height="30px"/>Contact Me</h2>
              <div className="card-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <div className="d-grid gap-2">
                  <button className="btn btn-warning border-dark btn-sm mt-2 shadow-sm text-with px-3 py-2">Send</button> 
                  </div>
                </div>
              </div>
            </div>
        )
    }
}