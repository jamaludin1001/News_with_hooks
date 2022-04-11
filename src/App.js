import React from "react";
import './Materi/Styling/Bootstrap/index.css'
import Bio from "./Materi/Styling/Bootstrap/bio";
import Friends from "./Materi/Styling/Bootstrap/friends";
import Home from "./Materi/Styling/Bootstrap/home";
import Menu from "./Materi/Styling/Bootstrap/menu";
import Skills from "./Materi/Styling/Bootstrap/skills";
import Kontak from "./Materi/Styling/Bootstrap/kontak";
import Footer from "./Materi/Styling/Bootstrap/footer";


function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Home/>
      <Bio/>
      <Skills/>
      <Friends/>
      <Kontak/>
      <Footer/>
    </div>
  );
}

export default App;
