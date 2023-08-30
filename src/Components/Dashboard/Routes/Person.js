import React, { Component } from "react";
import { Suspense } from 'react';
import {  Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LazyLoadedComponent = React.lazy(() => import('../Dashboard'));
export default class Person extends Component {
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
    }, 3000); // 5000 milliseconds = 5 seconds

    document.title='Personal Info'
  }


  render() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
      <div class="container  mt-4">
        <div class="row">

          <div class="col-sm-9">
            <Suspense fallback={<div>Loading...</div>} class="A">
              {this.state.showLazyComponent ? (
                <LazyLoadedComponent />
              ) : (
                <div className="load">
                  <Spin indicator={antIcon} />
                </div>
              )}
            </Suspense>
            <h2>Personal Information</h2>
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Date of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Male</td>
                    <td>30</td>
                    <td>1993-08-14</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Female</td>
                    <td>28</td>
                    <td>1995-03-22</td>
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