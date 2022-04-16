import React from "react";
const Input = ({Label, type, name, onChange}) =>{
    return(
        <div>
        <label> {Label}:   </label>
        <br />
        <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}
const ShowErrors= ({errors})=>{
    return(
        <ul style={{color: 'red', marginleft: '-20px', }}>
            {
                errors.map((error, i)=> <li key={i}>{error}</li>)
            }

        </ul>
    )
}



export default class Validation extends React.Component{
   state ={
       nama:'',
       email: '',
       password: '',
       errors: []
   }

   handleSubmit = event => {
       event.preventDefault();
        const Validator = require('validatorjs');
        const{nama, email, password}= this.state;
        let data = { nama, email, password};
          
          let rules = {
            nama: 'required',
            email: 'required|email',
            password: 'min:8|required'
          };
          
          let validation  = new  Validator (data, rules);
          validation.passes();
          this.setState({
              errors: [
                  ...validation.errors.get('nama'),
                  ...validation.errors.get('email'),
                  ...validation.errors.get('password')
              ]
          })
          if (validation){
            alert(`
            nama: ${this.state.nama}
            email: ${this.state.email}
            password: ${this.state.password}
            `);
            
          }
          document.getElementById("form").reset()
          this.setState({
              nama:'',
              email:'',
              password:'',
               
          }) 
         
   }
   
    render(){ 
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding:  '10px'
        }

        return(
            <div style={style}>
               {
                   this.state.errors && <ShowErrors errors={this.state.errors}/> 
               }
                <form onSubmit={this.handleSubmit} id="form">
                    <h4>Form Registrasi</h4>
                    <Input type="text" name="nama" Label="Nama"
                         onChange={value => this.setState({nama:value})}/>
                    <Input type="email" name="emial" Label="Email"
                         onChange={value => this.setState({email:value})}/>
                    <Input type="password" name="password" Label="Password"
                         onChange={value => this.setState({password:value})}/>
                    <br />
                    <button type="submit">Regist</button>
                </form>
            </div>
        )
    }
}
