import React, {useEffect} from "react";
import ToreadorMarch from "/ToreadorMarch.png"
import PVZMedley from "/PVZMedley.png"
import "./index.css";

export const scores = {
    ToreadorMarch: {
        name:"Toreador March for ",
        type:"Ensemble",
        desc:"Composed by Georges Bizet, this song is sung by a bullfighter as he encounters various situations in the bullring, with \n'Toreador, on guard! Toreador Toreador...that a dark eye is watching you...and that love is waiting for you, Toreador, love, love is waiting for you! All at once, we are silent... No more shouts, this is it!'",
        img: ToreadorMarch,
        price:"S$19.99"
    },
    PVZMedley: {
        name:"PVZ Medley for ",
        type:"Ensemble",
        desc:"Consisting of music composed by Laura Shihigara and Peter McConnell, this mix playlist of iconic tunes from Plants Versus Zombies and Plants Versus Zombies 2 will be sure to be a hit!",
        img: PVZMedley,
        price:"S$29.99"
    }
}

function Homepage(){
    useEffect(() => {
        for (const key in scores) {
            if (scores.hasOwnProperty(key)) {
                const score = scores[key];
                scoreDisplay(score.name, score.type, score.desc,score.img,score.price)
            }
        }
    }, [])

    function scoreDisplay(name, type, desc,img,price) {
        return (
            <div id={name + type} className="score">
                <img className="scoreImg" src={img} alt={name + type}></img>
                <p className="scoreDesc"><span className="scoreTitle">{name + type}</span>
                <br/>{desc}
                <br/><button className="scorePrice">{price}</button>
                </p>
            </div>
        );
    }

    function scoreDisplayRev(name, type, desc,img,price) {
        return (
            <div id={name + type} className="score">
                <p className="scoreDesc"><span className="scoreTitle">{name + type}</span>
                <br/>{desc}
                <br/><button className="scorePrice">{price}</button>
                </p>
                <img className="scoreImg" src={img} alt={name + type}></img>
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
    {scoreDisplay(scores.ToreadorMarch.name, scores.ToreadorMarch.type, scores.ToreadorMarch.desc,scores.ToreadorMarch.img,scores.ToreadorMarch.price)}
    {scoreDisplayRev(scores.PVZMedley.name,scores.PVZMedley.type,scores.PVZMedley.desc,scores.PVZMedley.img,scores.PVZMedley.price)}
    </div>
    </>
    )

}

export default Homepage