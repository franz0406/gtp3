import React from "react";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from './imgUrl.js';
import './blog.css';
function Blog(){
    const date = "Sep 26, 2021",
          title = "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          more = "Read Full Article";

    return(
        <section className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__txt">A lot is happening,<br/>We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container-groupA">
                    <Article imgUrl={blog01} date={date} title={title} viewmore={more}/>
                </div>
                <div className="gpt3__blog-container-groupB">
                    <Article imgUrl={blog02} date={date} title={title} viewmore={more}/>
                    <Article imgUrl={blog03} date={date} title={title} viewmore={more}/>
                    <Article imgUrl={blog04} date={date} title={title} viewmore={more}/>
                    <Article imgUrl={blog05} date={date} title={title} viewmore={more}/>
                </div>
            </div>
        </section>
    )
}

export default Blog;