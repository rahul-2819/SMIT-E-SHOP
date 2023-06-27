import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <>
    <section className="vh-100" style={{backgroundColor:"#00204a"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius :"1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.pexels.com/photos/17331127/pexels-photo-17331127/free-photo-of-industry-hot-smoke-steel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0" >SMIT-E-SHOP</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <Link className="small text-muted" href="#!">Forgot password?</Link>
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to='/signup'
                      style={{color: "#393f81"}}>Register here</Link></p>
                  <Link to="#!" className="small text-muted">Terms of use.</Link>
                  <Link to="#!" className="small text-muted">Privacy policy</Link>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default login