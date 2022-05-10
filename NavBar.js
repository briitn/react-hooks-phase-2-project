import React from "react";
import {NavLink} from "react-router-dom"
function NavBar(){
    return(
        <div className="navbar">
           
           <div><NavLink to ="/"
            exact>Home</NavLink></div>
            
            <div><NavLink to ="/tour" exact>Tour</NavLink></div>
            <div><NavLink to ="/pictures" exact>Pictures</NavLink></div>
           
        </div>
    )
}


export default NavBar