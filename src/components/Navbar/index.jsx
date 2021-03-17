import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Auth from '../../config/Auth';



const Navbar = (props) => {
  let onBG = "navbar-area bg-info"; 
  let offBG = "navbar-area";
  const [counter,setCounter] = useState(offBG);

  const LoginButton = () => {

      if(Auth.isAuthenticated()){
        return (
          <ul>
            <li><Link to="/login" onClick={()=>{Auth.logout()}}><a className="solid">LOGOUT</a></Link></li>
          </ul>
        )
      }else{
        return (
          <ul>
            <li><Link to="/login" onClick={()=>{setCounter(onBG)}}><a className="solid">LOGIN</a></Link></li>
          </ul>
        )
      }
      
  }

  const ListMenu = () => {
    if(Auth.isAuthenticated()){
      return (
        <>
          <li className="nav-item"><Link to="/" onClick={() => {setCounter(offBG)}}><span className="page-scroll">Home</span></Link></li>
          <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Data Buku</span></Link></li>
          <li className="nav-item"><Link to="/my-order" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Peminjaman Ku</span></Link></li>
          <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Informasi</span></Link></li>
          <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Tentang</span></Link></li>
          <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Kontak</span></Link></li>
          <li className="nav-item"><Link to="/profile" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Profile</span></Link></li>
        </>
      )
    }else{
      return(
          <>
            <li className="nav-item"><Link to="/" onClick={() => {setCounter(offBG)}}><span className="page-scroll">Home</span></Link></li>
            <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Informasi</span></Link></li>
            <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Tentang</span></Link></li>
            <li className="nav-item"><Link to="/books" onClick={()=>{setCounter(onBG)}}><span className="page-scroll">Kontak</span></Link></li>
          </>
      )
    }
  }


  

  return (
    <>
      <section className={counter}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/logo.svg" alt="Logo"></img>
                  </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                      <ul className="navbar-nav m-auto">
                        {ListMenu()}
                      </ul>
                    </div>
                  
                  
                    <div className="navbar-btn d-none d-sm-inline-block">
                      {LoginButton()}
                    </div>
                  </nav> 
                </div>
            </div>
        </div> 
    </section>
        
    </>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    loginState: state,
  }
}

export default connect(mapStateToProps)(Navbar);
