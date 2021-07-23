import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">
        <div className="container">
        <div className="card">
        <div className="card-header">
            <h3>About Me </h3>
        </div>

            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <div className="row">
                        <div className="col-md-3">
                            <img id="pic" src="" alt="profile pic" width="100%" height="auto%" />
                        </div>

                                <div className="col-md-8">
                                    <p>Hello my name is Jesse Ceniceros, I am a full stack web developer whom I just graduated from Rice University Coding Bootcamp,
                                    and I spent the last few years working as a nurse assistant.
                                    </p>
                                    <p>I did develop interest in both front-end and back-end development, the bootcamp did give me the tools necessary to learn multiple languages and develop responsive applications.</p>
                                    <p>In my spare time I like to take a light jog around the neighborhood, play some basketball, watch sports as well as spent some quality time with the family.</p>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainPage