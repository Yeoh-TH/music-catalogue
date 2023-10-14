import React, {useEffect} from "react";
import ToreadorMarch from "/ToreadorMarch.png"
import "./index.css";

export const scores = {
    ToreadorMarch: {
        name:"Toreador March for ",
        type:"Ensemble",
        desc:"Composed by Georges Bizet, this song is sung by a bullfighter as he encounters various situations in the bullring, with \n'Toreador, on guard! Toreador Toreador...that a dark eye is watching you...and that love is waiting for you, Toreador, love, love is waiting for you! All at once, we are silent... No more shouts, this is it!'",
        img: ToreadorMarch
    }
}

function Homepage(){
    useEffect(() => {
        // Create and append the score elements when the component mounts
        for (const key in scores) {
            if (scores.hasOwnProperty(key)) {
                const score = scores[key];
                scoreDisplay(score.name, score.type, score.desc,score.img)
            }
        }
    }, [])

    function scoreDisplay(name, type, desc,img) {
        return (
            <div id={name + type} className="score">
                <img className="scoreImg" src={img} alt={name + type}></img>
                <p className="scoreDesc"><span className="scoreTitle">{name + type}</span><br/>{desc}</p>
            </div>
        );
    }
    return(
    <>
    <div id="navbar"> 
    <a className="navbar-button-active" href="#/">Scores</a>
    <a className="navbar-button" href="#/About">About Me</a>
    </div>
    <div id="scoresDisplay">   
    {scoreDisplay(scores.ToreadorMarch.name, scores.ToreadorMarch.type, scores.ToreadorMarch.desc,scores.ToreadorMarch.img)}
    </div>
    <footer>
        Made with ❤️ by YeohTH
    </footer>
    </>
    )

}

export default Homepage