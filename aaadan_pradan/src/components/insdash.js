import { Navbar } from "./com"
import './insDash.css'

export function InsDash(){
    return(
    <div id='bg-insdash'>
        <Navbar/>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">My Dashboard</h3>
                <h5 className="card-text">Name : Keshav Memorial institute of technology</h5>
                <h5 className="card-text">Email : kmit@gmail.com</h5>
                <h5 className="card-text">Phone : **********</h5>
            </div>
        </div>
        <input type="file" id="input_file" hidden/>
        <button className="btn btn-primary" id="create">Create Workshop</button>
    </div>
    )
}
