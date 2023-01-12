import React from "react";
import axios from 'axios';

let HelloWorld = () => {

    (function () {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                data["data"].forEach(element => {
                    document.getElementById("append-data").innerHTML += `<h6>${element.name}</h6>`;
                })
            })
    })()

    return (
        <div id="hello-parent">
            <h1 className="helloWorld">Hello World!</h1>
            {/* {GetTheData()} */}
            <div className="container" id="append-data"></div>
        </div>
    )
}

export default HelloWorld