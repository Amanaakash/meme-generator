import React from "react";
import logo from "../images/troll-face.png"

export default function Header(){
    return(
        <div className="header">   
            <img src={logo} alt ="logo" className="logo"/>
            <p className="title"><b>Meme Generator</b></p>
            <p className="text">Creator:AmanAakash</p>
        </div>
    )
}