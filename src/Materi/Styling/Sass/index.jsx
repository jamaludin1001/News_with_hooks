import React from "react";
import './index.scss';
import Title from "./Title";

export default class Sass extends React.Component{

    render () {
        return (
            <div>
                <Title/>
                <h2 className="title">Belajar MERN</h2>
                <button className="btn btn-denger">Go Eduwork</button>
            </div>
        )
    }
}