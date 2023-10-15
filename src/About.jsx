import React from "react";
import mainPicture from "/TH.jpeg"

function About(){

    return(
        <>
        <div id="navbar"> 
            <a className="navbar-button" href="#/">Scores</a>
            <a className="navbar-button-active" href="#/About">About Me</a>
        </div>
        <h1>About the Developer</h1>
        <div id="About">
            <img id="AboutPic" src={mainPicture}></img>
            <p id="AboutWords">A very normal guy who has a website to upload music scores, arranged by yours truly. 
            <br/>Feel free to browse around!
            <br/>Send orders to: <a href="mailto:yeohth231@gmail.com"><i class="fas fa-envelope"></i></a>, Thank you :D</p>
        </div>
        </>
    )
}

export default About;