import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h4>Contact Us</h4>
                            <p>Email: contact@hepl.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </div>
                        <div class="col-md-4">
                            <h4>Follow Us</h4>
                            <a href="#">Facebook</a><br />
                            <a href="#">Twitter</a><br />
                            <a href="#">Instagram</a>
                        </div>
                        <div class="col-md-4">
                            <h4>Location</h4>
                            <p>123 Street, Cuddalore</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}