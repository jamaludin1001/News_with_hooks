import React from "react";
import Icon_skill from "./gambar/skill1.png"
import Icon_skil from "./gambar/skill2.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skills extends React.Component{
    render() {
        return(
            <div className="container mt-3" id="skills">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2 className="fs-bold fs-2 text-center" > <img src={Icon_skill} 
                className="bio" alt="skill1" width="30px" height="30px"/>Skills</h2>
                    
                <ul>
                <li>php</li>
                <li>Phyton</li>
                <li>Java</li>
                </ul>
              </div>
              <div class="col">
                <h2 className="fs-bold fs-2 text-center" ><img src={Icon_skil} className="bio" alt="skill1" width="30px" height="30px"/>
                    Other Skils</h2>
                <ol>
                <li>Drive</li>
                <li>Mekanik</li>
                </ol> 
              </div>
            </div>
        </div>
        )
    }
}