import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate= useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem("authToken");
    navigate('/');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            SMIT-E-SHOP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
              {(localStorage.getItem('authToken'))?
                <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  My Orders
                </Link>
              </li>
              :"" }
            </ul>
            {!(localStorage.getItem("authToken"))?
            <div className="d-flex">
             
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">
                Sign Up
              </Link>
            </div>
             :
             <div>
             <div className="btn bg-white text-success mx-2">My Cart</div>
             <div className="btn bg-white text-danger mx-2" onClick={handleLogout} >Log Out</div>
             </div>
             } 
          </div>
        </div>
      </nav>
      </div>
  );
}

export default Navbar;
