import React from "react";
// import $ from 'jquery';

let SideBar = () => {
    // let HoverTimeOut;
    let OnHover = () => {
        // HoverTimeOut = setTimeout(() => {
        document.querySelector("#moduleOne h6").style.display = "block";
        // }, 200)
    }
    let OnLeft = () => {
        // clearTimeout(HoverTimeOut);
        document.querySelector("#moduleOne h6").style.display = "none";
    }
    return (
        <div className="sideBar" onMouseOver={OnHover} onMouseLeave={OnLeft}>
            <div id="moduleOne">
                <i className="fa-solid fa-bolt"></i>
                <h6>Introduction</h6>
            </div>
        </div>
    )
}

export default SideBar