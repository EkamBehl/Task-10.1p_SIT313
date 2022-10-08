import React, { Component } from 'react'

import './Menu.css'
function MenuF(props){
   
        
    return(
        <nav>
            <div className="icon">{props.name}</div>
            <div className="search-box">
            
                <input type='search' placeholder='search'></input>
                <span></span>

           </div>
           
            <ol>
                <li>
                    <a href='#'>Post</a>
                    <a href='#'>Login</a>
                </li>
            </ol>
            

        </nav>

    )
    




}
export default MenuF;
