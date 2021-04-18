import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap/FormControl'
import { Nav } from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Navbar.css';

function Navbar() {

    const navClicked = (e) => {
        console.log(e.target.eventKey + " is clicked");
    }

    return (
        <div className="navbar">
            <div className="products">
                <Link to="/products" style={{ color: "white" }}>
                    <p>Products</p>
                </Link>
            </div>
            <div className="admin">
                <Link to="/admin" style={{ color: "white" }}>
                    <p>Admin</p>
                </Link>
            </div>

        </div>
    )
}

export default Navbar
