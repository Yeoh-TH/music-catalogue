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
            <p id="AboutWords">A very normal guy who has a website to upload music scores, arranged by yours truly.<br/>
            Feel free to browse around!</p>
        </div>
        <footer>
            Made with ❤️ by YeohTH
        </footer>
        </>
    )
}

export default About;