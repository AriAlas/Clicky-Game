import React from "react";

function Clicky (props){
    return (
                <div className = "fractal container col-lg-3 col-md-4 col-xs-6 float-left" >
                <div className = "img-container row">
                <div onClick={() => props.onClick(props.id)}>
                <img className="image" alt = {props.name} src = {props.image}/>
                </div>
                </div>
        </div>
    )
}
export default Clicky;