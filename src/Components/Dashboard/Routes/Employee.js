import React, { Component } from "react";
import {  Suspense } from 'react';

// import Dashboard from "../Dashboard";

const LazyLoadedComponent = React.lazy(() => import('../Dashboard'));

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLazyComponent: false,
        };
    }

    componentDidMount() {
        // Simulate a 5-second delay before showing the lazy-loaded component
        setTimeout(() => {
            this.setState({ showLazyComponent: true });
        }, 5000); // 5000 milliseconds = 5 seconds

        document.title='Employee'
    }

    render() {
        return (
            <div class="container m-4">
                <div class="row">
                    <div class="col-sm-9">
                        <Suspense fallback={<div>Loading...</div>}>
                            {this.state.showLazyComponent ? (
                                <LazyLoadedComponent />
                            ) : (
                                <div>Waiting for 5 seconds...</div>
                            )}
                        </Suspense>
                        <h2>Employee and Employer Information</h2>
                        <div class="table-responsive ">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Date of Birth</th>
                                        <th>Role</th>
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>Male</td>
                                        <td>30</td>
                                        <td>1993-08-14</td>
                                        <td>Employee</td>
                                        <td>CTS Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>Jane Smith</td>
                                        <td>Female</td>
                                        <td>28</td>
                                        <td>1995-03-22</td>
                                        <td>Employee</td>
                                        <td>HEMA Industries</td>
                                    </tr>
                                    <tr>
                                        <td>Michael Johnson</td>
                                        <td>Male</td>
                                        <td>40</td>
                                        <td>1982-11-10</td>
                                        <td>Employer</td>
                                        <td>ACME Enterprises</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}