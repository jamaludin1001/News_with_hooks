import React from "react";
import About from "./gambar/about-us.png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Bio extends React.Component{
    render() {
        return(
            <div className="container mt-3 text-center" id="bio">  
             <h2 class="fs-bold fs-2"><img src={About} className="bio" alt="abaut_me" width="30px" height="30px"/>About Me</h2>
            <div classNam="paragraf"><p class="fs-6 fst-italic fw-light">Hay perkenalkan nama saya Jamaludn Saputra, Asal saya dari kota Cilacap. Saya lulusan D3 Manajemen Informatika STMIK Mercusuar Bekasi.
                Bahasa pemrograman yang saya pelajari di kampus antara lain; Php, Java Netbeen, C++, Visual basic 2010. Dan TA saya membuat
                website sistem informasi pada bengkel tempat saya bekerja. Keseharian saya bekerja disalah satu bengkel di daerah Bekasi
                jabatan saya adalah seorang mekanik </p>
              </div>
          </div>
            
        )
    }
}