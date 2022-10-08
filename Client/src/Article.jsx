import React from "react";
import './Article.css'
const Article=(props)=>{
    return(
        
    
        <div className='box'>
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="image">
                <img  src={props.icon} alt="article"/>
            </div>
            <div className="content">
                <h3>{props.articleName}</h3>
                <p>{props.description}</p>
                <h4>{props.authorName}</h4>
                <div className="icons">
                    <h4>{}</h4>
                    <span> <i className="fa fa-star checked"></i>{props.rating}</span>
                    <span><i className="fas fa-user"></i>{props.username}</span>
                </div>
            </div>
        </div>
        
        
    )

}
export default Article;