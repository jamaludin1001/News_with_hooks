import React from "react";
import './Bootstrap/index.css';
import Bio from "./Bootstrap/bio";
import Friends from "./Bootstrap/friends";
import Home from "./Bootstrap/home";
import Skills from "./Bootstrap/skills";
import Kontak from "./Bootstrap/kontak";
import Menu from "./Bootstrap/menu";
import Footer from "./Bootstrap/footer"
export default class Styling extends React.Component{

    render(){
        return(
            <div className="tampilan">
                <Menu/>
                <Home/>
                <Bio/>
                <Skills/>
                <Friends/>
                <Kontak/>
                <Footer/>
            </div>
        )
    }
}
