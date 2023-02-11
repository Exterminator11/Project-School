import { Navbar } from "./com";
// import './dash.css'

export function Dash(){
    return(
        <div id='bg-dash'>
            <Navbar/>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">My Dashboard</h3>
                    <h5 className="card-text">Name : Rachit</h5>
                    <h5 className="card-text">Email : rachit1031@gmail.com</h5>
                    <h5 className="card-text">Phone : 9885067315</h5>
                </div>
            </div>
            <h3 id="bkgs">Bookings</h3>
        </div>
    )
}

