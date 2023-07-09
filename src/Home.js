import React from "react"
import {Link} from "react-router-dom"
import "./home.css"

export default function (){
    return(
         <div className="home">
            <button className="homebutton">
            <Link to='/Board' className="link">
   TAP TO PLAY
        </Link>
            </button>
            
         </div>)
}