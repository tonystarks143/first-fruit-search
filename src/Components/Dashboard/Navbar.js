import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse visible-xs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <span class="navbar-brand" href="#">HEPL</span>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to="/">Dashboard</Link></li>
                            <li><Link to="/person">Person</Link></li>
                            <li><Link to="/employee">Employee</Link></li>
                            <li><Link to="/filter">Filter Search</Link></li>
                            <li><Link to="/User">User Table - API</Link></li>
                            <li><Link to="/userlist">User List </Link></li>
                            <li><Link to="/jquery">J query</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}