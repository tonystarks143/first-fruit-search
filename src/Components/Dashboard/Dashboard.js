import React, { Component } from "react";
export default class Dashboard extends Component {
    render() {
        return (
            <div className="container1">
            <div class="col-sm-9">
              <div class="well">
                <h4>Dashboard</h4>
                <p>Some text..</p>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="well">
                    <h4>Users</h4>
                    <p>1 Million</p>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="well">
                    <h4>Pages</h4>
                    <p>100 Million</p>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="well">
                    <h4>Sessions</h4>
                    <p>10 Million</p>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="well">
                    <h4>Bounce</h4>
                    <p>30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}