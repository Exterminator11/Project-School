import { Link } from "react-router-dom";

export function Signup(){
    return(
    <section className="vh-70 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark rounded">
                        <div className="card-body p-5 text-white text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h1>SignUp</h1>
                                <br/>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="text" placeholder="Name" className="form-control form-control-lg"/>
                                </div>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="email" placeholder="Email" className="form-control form-control-lg"/>
                                </div>
                                <br/>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="password" placeholder="Set Password" className="form-control form-control-lg"/>
                                </div>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="password" placeholder="Confirm Password" className="form-control form-control-lg"/>
                                </div>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="text" placeholder="Phone" className="form-control form-control-lg"/>
                                </div>
                                <div className="form-outline form-white mb-4 ">
                                    <input type="text" placeholder="Student or Institution" className="form-control form-control-lg"/>
                                </div>
                                <button className="btn btn-outline-light btn-lg px-4" type="submit">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}