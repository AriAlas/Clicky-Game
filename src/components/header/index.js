import React from "react";
import "./style.css";

function Header(props){
    return(
        <div className="header">
            <div className="container-fluid text-center bg-1  ">
                <div className="row">
                    <div className = "col">
                        <h1>Clicky Game</h1>
                    </div>
                    <div className = "col">
                        <h1>{props.message}</h1>
                    </div>
                    <div className = "col">
                        <h1>Score: {props.score} | Top Score: {props.highScore} </h1>
                    </div>
                </div>
            </div>
            
            <div className= "container-fluid text-center bg-2">

                <h1>Clicky Game</h1>
            </div>
        </div>
    )
}
export default Header;