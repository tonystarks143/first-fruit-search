import React, { Component } from "react";
import $ from 'jquery'

export default class JqueryProject extends Component {

    jQuerycode = () => {

        $(".button").click(function () {
            $('p').css('color', '#337ab7')
            $('span').css('color', 'red')



        });

    }

    componentDidMount() {
        this.jQuerycode()
        console.log(this.jQuerycode())

    }
    render() {
        return (
            <div class="container m-4">
                <div class="row">
                    <div class="col-sm-9">
                        <div>
                            <h1>Text Color change</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</p>
                        </div>
                        <div>
                            <h1>Span Text Color change</h1>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</span>
                        </div>
                        <button className="button btn">Click here</button>
                        <h1>1. Progress: Jquery</h1>

                        <div class="progress " style={{ margin: "1rem" }}>
                            <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>

                        <h1>2. Progress: React</h1>

                        <div class="progress " style={{ margin: "1rem" }}>
                            <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}