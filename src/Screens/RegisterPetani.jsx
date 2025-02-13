import React, { Component } from 'react';
import '../asset/style.css';

import { Container } from 'react-bootstrap';
import { Newnav, Myfooter } from '../Components/MyComponents';

import ic_facebook from '../asset/image/ic_facebook.svg'

class Register extends Component {
  render(){
    return(
      <div className=''>
      <Newnav/>
      <Container>
        <div className="register">
          <div className="content">
              <h1>Regristasi</h1>
              <p>Daftar sebagai Petani</p>
              <form className="">
                <input className='' id="name" type='text' placeholder='Name'/>
                <input className='' id="numberphone" type='text' placeholder='Number Phone'/>
                <input className='' id="email" type='email' placeholder='Email' />
                <input className='' id="password" type='password' placeholder='Password'/>
                <input className='' id="" type='password' placeholder='Confirm Password'/>
                <button type='submit'className='btn-submit' >
                  Daftar
                </button>
                <div className="d-flex justify-content-center">
                  <h6>Atau</h6>
                </div>
                <button className="btn-facebook"><img src={ic_facebook} alt=""/> Daftar Dengan Facebook</button>
              </form>   
            </div>
        </div>
        <Myfooter/>
      </Container>
    </div>
    )
  }
}

export default Register;
