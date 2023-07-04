import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [details, setdetails] = useState({name:"",email:"",number:"",password:"",confirmPassword:""})
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name:details.name,
        number:details.number,
        email:details.email,
        password:details.password,
        confirmPassword:details.confirmPassword
      })
    });
    const json =await response.json();
    console.log(json);
    if(!json.success) alert("Enter valid credentials"); 
  }
  const onChange=(e)=>{
    setdetails({...details,[e.target.name]:e.target.value})
  }
    
  return (
    <>
    <section className="vh-100" style={{backgroundColor: "#00204a"}}>
  <div className="container h-100"  >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}} >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form method="POST" className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" placeholder='Name' name='name' value={details.name} onChange={onChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" placeholder='Email Adress' name='email' value={details.email} onChange={onChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type='tel' id="form3Example4c" className="form-control" placeholder='Mobile Number' name='number' value={details.number} onChange={onChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example5c" className="form-control" placeholder='Password' name='password' value={details.password} onChange={onChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example5cd" className="form-control" placeholder='Confirm password' name='confirmPassword' value={details.confirmPassword} onChange={onChange}/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <Link to="#!">Terms of service</Link>
                    </label>
                  </div>
                  <p>Already a user, <Link to='/login'>Click here</Link></p>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" >

                <img src="https://img.freepik.com/free-vector/decorative-blacksmith-shop-anvil-steel-tongs-tools-horseshoe-pictograms-icons-collection-flat-isolated-vector-illustration_1284-2380.jpg?w=740&t=st=1687849355~exp=1687849955~hmac=693d51ca86cc6ffea9f6cd7824a2f6c9e049ff582a188db379951b326d7b9246"
                  className="img-fluid" alt="Sample image"/>

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

export default Signup