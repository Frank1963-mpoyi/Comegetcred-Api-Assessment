import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link to="/#" className="navbar-brand">API CALL ASSESSMENT </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/#" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/#" className="nav-link">About</Link>
                            <Link to="/#" className="nav-link">Contact</Link>
                        </div>
                        </div>
                    </div>
                </nav>
        </React.Fragment>
    )
}

export default Header