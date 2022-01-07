import React from "react";
import Possibilityimg from "../../assets/possibility.png";
import './possibility.css';

function Possibility(){
    return(
        <section className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={Possibilityimg} alt="Possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__txt">The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h5>Request Early Access to Get Started</h5>
            </div>
        </section>
    )
}

export default Possibility;