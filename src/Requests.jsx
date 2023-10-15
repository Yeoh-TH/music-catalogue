import React from "react";

function Requests(){

    return(
        <>
        <div id="navbar"> 
            <a className="navbar-button" href="#/">Scores</a>
            <a className="navbar-button-active" href="#/Requests">Requests</a>
            <a className="navbar-button" href="#/About">About Me</a>
        </div>
        <div>
            <h1>How to make a request?</h1>
                <dl id="requestsExp">
                <li>Decide which scores you would like to purchase :D</li>
                <li>Email your selection of which scores you would like to purchase from my catalogue to yeohth231@gmail.com, or <a href="mailto:yeohth231@gmail.com"><i class="fas fa-envelope"></i></a>
                <br/>Also include the following:
                </li>
                <dd>
                    - Your name, as in how I should address you
                </dd>
                <dd>
                    - The address to deliver the scores
                </dd>
                <dd>
                    - Collection date and time
                </dd>
                <li>Finally, await for my reply!</li>
                </dl>
            <h1>Important things to note</h1>
            <h2>Deliveries to ONLY within Singapore</h2>
            <h2>Expect a reply after only 1 to 2 days</h2>
            <h2>Times I am available to deliver (subject to change):
                <br/>From 6pm to 8pm in the evening on weekdays
                <br/>NOT available on weekends
                <br/>All-day delivery during the months of June and December (subject to change also)
            </h2>


        </div>


        </>
    )
}

export default Requests;