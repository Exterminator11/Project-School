import { Link } from "react-router-dom";
import { Navbar } from "./com";

export function Login(){
    return(
        <div>
        <Navbar/>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark rounded">
                        <div className="card-body p-5 text-white text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h1>Log In</h1>
                                <br/>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="email" placeholder="Email" className="form-control form-control-lg"/>
                                </div>
                                <br/>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="password" placeholder="Password" className="form-control form-control-lg"/>
                                </div>
                                <p className="mb-4"><a className="text-white-50" href="#!">Forgot pasword!</a></p>
                                <Link to="/search"><button className="btn btn-outline-light btn-lg px-4" type="submit">Login</button></Link>
                                <div>
                                    <p className="mb-0 pt-4">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}