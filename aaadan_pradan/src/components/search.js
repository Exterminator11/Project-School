import { Navbar } from "./com";
// import './sear.css'

 
export function Search(){
    return(
        <div className="Search">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Navbar/>
            <h1 className="heading">Search</h1>
            <input className="bar" placeholder="Search">
            </input>
            <button type="submit" id="sub"><i className="fa fa-search"></i></button>
            <div className="row">
                
            </div>
        </div>
    )
}