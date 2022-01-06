import React from "react";
import './header.css';

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header(){
    return(
        <div id="home" className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__txt">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <form action="" className="gpt3__header-content-form">
                    <input type="email" placeholder="Your Email Address" required/>
                    <button type="submit">Get Started</button>
                </form>
                <div className="gpt3__header-content-people">
                    <img src={people} alt="people icons" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="AI" />
            </div>
        </div>
    )
}

export default Header;