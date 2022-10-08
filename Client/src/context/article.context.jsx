import React from "react";
import { createContext,useState,useEffect } from "react";
import contentList from "../contentList";
import { addCollectionAndDocument ,fetchArticlesAndDocuments} from "../Utils/Firebase";


export const ArticleContext=createContext({
    articles:{},

})
export const ArticleProvider=({children})=>{
    const [articles,setArticle]=useState({})
    useEffect(()=>{
        const fetchArticleMap=async()=>{
            const articleMap=await fetchArticlesAndDocuments();
            setArticle(articleMap);
            console.log("Article Map")
            console.log(articleMap)
           
        }
        fetchArticleMap();
    },[])
    const value={articles}
    return(
        <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
    )
}