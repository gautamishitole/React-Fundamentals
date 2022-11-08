import Button from '../../common/Button/Button';
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Registration() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [navigate , setNavigate] = useState(false);
    // const navigate = useNavigate();
    // function showRegisterSuccessful() {
    //     alert('Registeration completed');
    // }


    async function showRegisterSuccessful(e) {
      e.preventDefault();
      const register = await axios.post('http://localhost:4000/register', {
          name:name
          ,email:email
          ,password:password

       });

       console.log(register)

       setNavigate(true);
       
    }

    if(navigate){
      return <Navigate to="/" />
     }

    const OnLoginClick = () => {
        navigate('/');
     }
    return (
        <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form className="mx-1 mx-md-4">
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" 
                            onChange={e=> setName(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control"
                             onChange={e=> setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control"
                             onChange={e=> setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button
							name='Register'
							className='btn btn-info bg-transparent submit'
							click={(e) => showRegisterSuccessful(e)}
						></Button>
                        <Button
							name='Login'
							className='btn btn-info bg-transparent submit'
							click={() => OnLoginClick()}
						></Button>
                        </div>
      
                      </form>
      
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
}
export default Registration;