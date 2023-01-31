


export function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-fixed-top">
            <div class="container-fluid">
                <a id="main" className="navbar-brand" href="#">Aadan Pradan</a>
                <button title="hamburger" id="hb" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent" aria-controls="navbarSupportContent" aria-expanded="false" aria="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a id="home" class="nav-link active" aria-current="page" href="#welcome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="about" className="nav-link active" href="#aboutu">About us</a>
                        </li>
                        <li className="nav-item">
                            <a id="help" class="nav-link active" href="#helpu">Help</a>
                        </li>
                        <li className="nav-item">
                            <a id="cu" className="nav-link active" href="#footer">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
export function Wel(){
    return (
        <div className="card text-center mx-auto" id="card1">
            <h1 className="card-title" id="welcome">Welcome</h1>
            <p className="card-body" id="cbody">find workshops near me</p>
            <div id="s1" className="form-outline">
                {/* <!-- <input id="search" type="search" id="form1" class="form-control text-center" placeholder="Enter Location" aria-label="search"> --> */}
                <a href="login.html" target="_blank"><button class="btn btn-primary">Search</button></a>
            </div>
        </div>
    )
}

export function AboutUs(){
    return(
    <div className="card text-center mx-auto" id="card2">
        <h1 className="card-title" id="aboutu">About Us</h1>
        <p className="card-body" id="cbody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
    )
}

export function Footer(){
    return(
    <div>
        <p id="footer">© aadan pradan 2022</p>
    </div>
    )
}

export function Home(){
    return(
        <div>
            <Navbar/>
            <Wel/>
            <AboutUs/>
            <Footer/>
        </div>
    )

}
