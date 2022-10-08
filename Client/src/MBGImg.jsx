import React from 'react'
import './MBGImg.css'

const { faker } = require('@faker-js/faker');
function BGI(props){
    return(
    <img className="imgBackGround" src= {props.img}></img>
    )
}
export default BGI