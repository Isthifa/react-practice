import React from "react";
import * as cal from "./Calculator.js";

function Body(){
    return (
        <ul>
            <li>{cal.add(1,2)}</li>
            <li>{cal.sub(1,2)}</li>
            <li>{cal.mul(1,2)}</li>
            <li>{cal.div(1,2)}</li>
        </ul>
    )
}

export default Body;