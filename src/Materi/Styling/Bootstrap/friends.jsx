import React from "react";
import Logo from "./gambar/network.png"
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(Logo);
export default class Friends extends React.Component{
    render() {
        return(
            <div className="container mt-3"  id="friends" >
            <h2 className= "text-center" ><img src={Logo} className="friends" alt="logo"  width="30px" height="30px"/>My Close Friends</h2>
            <div className="card mx-auto">
              <table className="table  striped bordered hover">
                  <tr>
                      <th>Nama</th>
                      <th>Alamat</th>
                      <th>Kelas</th>
                    </tr>
                    <tr>
                      <td>Imelza</td>
                      <td>Padang</td>
                      <td>Komputerisasi Akuntansi</td>
                    </tr>
                    <tr>
                      <td>Farid</td>
                      <td>Medan</td>
                      <td>Komputerisasi Akuntansi</td>
                    </tr>
                    <tr>
                      <td>Mita</td>
                      <td>Palembang</td>
                      <td>Komputerisasi Akuntansi</td>
                    </tr>
              </table>
            </div>
          </div>
        )
    }
}