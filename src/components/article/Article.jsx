import React from "react";
import './article.css';

function Article({imgUrl, date, title, viewmore}){
    return(
        <article className="gpt3__blog-article">
            <div className="gpt3__blog-article-img">
                <img src={imgUrl} alt="blog" />
            </div>
            <div className="gpt3__blog-article-content">
                <time dateTime="2021-11-26">{date}</time>
                <h3>{title}</h3>
                <p>{viewmore}</p>
            </div>
        </article>
    )
}

export default Article;