import React, { useContext } from "react";
import Article from './Article'
import './Article.css'

import { ArticleContext } from "./context/article.context";


function articleComponent(article) {
    return (
        <Article

            icon={article.icon}
            description={article.description}
            rating={article.rating}
            username={article.username}
            articleName={article.articleName}
            authorName={article.authorName}
        />
    )
}
const ArticleList = () => {
    const { articles } = useContext(ArticleContext);
    return (
        <div className="container">
            <h1 className="heading">Featured Articles</h1>


            <div className="box-container">
                {Object.keys(articles).map((name)=>
                <Article

                icon={articles[name].icon}
                description={articles[name].description}
                rating={articles[name].rating}
                username={articles[name].username}
                articleName={articles[name].articleName}
                authorName={articles[name].authorName}
            />
                
                
                
                )
                    
                }


                


            </div>
        </div>
    )

}
export default ArticleList