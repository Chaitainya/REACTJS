import React from "react";

let PythonBody = () => {
    return (
        <div>
            <h3>Try This</h3>
            <form>
                <textarea id="yourcode" cols="40" rows="10"></textarea>
                <br />
                <button type="button" onClick="runit()">Run</button>
            </form>
            <pre id="output"></pre>
            <div id="mycanvas"></div>
        </div>
    )
}

export default PythonBody