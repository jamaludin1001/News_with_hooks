import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import React from "react";
import Form from "./Materi/Form";
// import News from "./Materi/hook";
import News from "./Materi/News_lifecycle";
import Routing from "./Materi/Routing";
import Styling from "./Materi/Styling";
// import Utama from "./Materi/Ajax";
// import MyComponent from "./Materi/Ajax/Pembahasan/news";
//import LifeCycle from "./Materi/Lifecycle"; 
// import ComponenDidMount from "./Materi/Lifecycle/componendidmount"; 


function App() {
 
  return (
    <div className="App" >
      <Router>
      <Routing/>
        <Routes >
          <Route exact path="/" element={<Styling />}/>
          <Route exact path="/News" element={<News />}/>
          <Route path="/Register" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
