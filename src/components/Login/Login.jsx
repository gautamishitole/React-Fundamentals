import Button from '../../common/Button/Button';
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    function showLoginSuccessful() {
        navigate('/courses');
    }
    const onRegisterationPagesClick = () => {
       navigate('/registration');
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
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
      
                      <form className="mx-1 mx-md-4">
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" />
                            <label className="form-label" for="form3Example1c">Username</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button
							name='Login'
							className='btn btn-info bg-transparent submit'
							click={() => showLoginSuccessful()}
						></Button>
                        <Button
							name='Register'
							className='btn btn-info bg-transparent register ml-lg-4'
							click={() => onRegisterationPagesClick()}
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
export default Login;