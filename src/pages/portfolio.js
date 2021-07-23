import React from "react";
import "../App.css";
import ScreenShotPwa from '../img/ScreenShotPwa.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Portfolio</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-1">
                            </div>
                        <div className="col-md-3">
                            <a href="https://jesse2360.github.io/weatherUpdate/"><img src= "assets/img/weather1.png" className="card-img-top" alt="weatherPic" /></a>
                            <p className="card-text">Weather Update Site</p>
                            <p id="repo"><a href="https://jesse2360.github.io/weatherUpdate/"> GitHub Link</a></p>
                            </div>

                            <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <a href="https://jesse2360.github.io/wk5Scheduler/"><img src="assets/img/work.day.png" className="card-img-top" alt="schedulerPic" /></a>
                                <p className="card-text">Scheduler</p>
                                <p id="repo"><a href="https://github.com/Jesse2360/wk5Scheduler"> GitHub Link</a></p>
                            </div>
                        </div>

                        <br></br>
                        <br></br>

                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-3">
                                <a href="https://jesse2360.github.io/wk4codequiz/"><img src="img/quiz3.png" className="card-img-top" alt="quizPic" /></a>
                                <p className="card-text">Code Quiz</p>
                                <p id="repo"><a href="https://github.com/Jesse2360/wk4codequiz"> GitHub Link</a></p>
                            </div>

                            <div className="col-md-1">
                            </div>
                                <div className="col-md-3">
                                    <a href="https://corgimaman.github.io/groupProject/"><img src="img/screen1.jpg" className="card-img-top" alt="project1" /></a>
                                    <p className="card-text">Project-1</p>
                                    <p id="repo"><a href="https://github.com/corgimaman/groupProject"> GitHub Link</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>

                        <br></br>
                        <br></br>

                        <div className="row">
                            <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <a href="https://jesse2360.github.io/weekd3password/">
                                    <img src="assets/img/screenshot pasw.PNG" className="card-img-top" alt="PasswPic" /></a>
                                <p className="card-text">Password Generator</p>
                                <p id="repo"><a href="https://github.com/Jesse2360/weekd3password"> GitHub Link</a></p>
                            </div>

                            <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <a href="https://ancient-brook-79986.herokuapp.com/"><img src={ScreenShotPwa} className="card-img-top" alt="PwaPic" /></a>
                                <p className="card-text">Budget Tracker Pwa</p>
                                <p id="repo"><a href="https://github.com/Jesse2360/BudgetTrackerPwa"> GitHub Link</a></p>
                            </div>
                        </div>

                        <br></br>

                        <div className="gitProfile">

                            <p>GitHub: <a href="https://github.com/Jesse2360"> GitHub Link</a> </p>

                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/jesse-ceniceros-196430202/"> Linkedin</a></p>

                            <p>Email: <a href="mailto:jesseceniceros.10@gmail.com" target="_blank"> jesseceniceros.10@gmail.com</a></p>

                            <p>Phone #: <a href="tel:+832-371-2370"> 832-371-2370</a></p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default portfolio