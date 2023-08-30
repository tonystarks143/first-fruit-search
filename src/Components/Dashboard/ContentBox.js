import React, { Component } from "react";
import { Link } from 'react-router-dom'
 
export default class ContentBox extends Component {
    render() {
        return (

            <>
                <div class="col-sm-2 sidenav hidden-xs">
                    <h2>HEPL</h2>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><Link to="/">Dashboard
                     
                        </Link></li>
                        <li><Link to="/person">Personal Information</Link></li>
                        <li><Link to="/employee">Employee</Link></li>
                        <li><Link to="/filter">Filter Search</Link></li>
                        <li><Link to="/User">User Table - API</Link></li>
                        <li><Link to="/select1">Select</Link></li>
                        <li><Link to="tuser">Tuser</Link></li>
                        <li><Link to="/jquery">Learning Progress </Link></li>
                        <li><Link to="/userlist">User List</Link></li>
                        <li><Link to="/array_table">Ant Design</Link></li>
                        <li><Link to="/jquery">J query</Link></li>
                       

                        <div className="dropdown">
                            <button
                                className="btn btn-secondary  dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Bucket List
                            </button>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">

                                <a className="dropdown-item " href="#">
                                    Add
                                </a><br />
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a><br />
                                <a className="dropdown-item" href="#">
                                    View
                                </a><br />
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a><br />
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>

                    </ul><br />
                </div>
                <br />
            </>

        )
    }
}