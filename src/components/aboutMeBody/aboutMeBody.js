import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>About Me</h3>
                    </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <div className="row">
                            <div className="col-md-3">
                                <img id="pic" src="" alt="profile-picture" width="100%" height="auto%" />
                            </div>

                                <div className="col-md-8">
                                    <p>Hello my name is Jesse Ceniceros, I am a full stack web developer whom I just graduated from Rice University Coding Bootcamp,
                                        and I spent the last few years working as a nurse assistant.</p>
                                    <p>My next work is hopefully a full stack developer.</p>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default body