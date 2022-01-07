import React from "react";
import './cta.css';

function Cta(){
    return(
        <section className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register today &amp; start exploring the endless possiblities.</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </div>
        </section>
    )
}

export default Cta;