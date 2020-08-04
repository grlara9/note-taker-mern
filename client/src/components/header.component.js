import React from 'react'
import { Link } from 'react-router-dom'
 

export default function Header(props) {
    return (  
        <nav className="navbar navbar-expand-lg navbar-primary">
           <div className="brand">
            <Link to ="/"className="navbar-brand">
                <h2 className="text-white">Notes</h2>
            </Link>
            </div>

        
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <Link to="/" className="nav-link" >View Notes</Link>
                    </li>
                    <li className="nav-item" id="report">
                        <Link to="/add" className="nav-link">Add Note</Link>
                    </li>
                </ul>
            </div>
        
        </nav>
    )
}