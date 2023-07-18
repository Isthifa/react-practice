import React  from "react";


function Heading(){
    const mystyle = {
        color: "Blue",
        backgroundColor: "Black",
        border: "2px solid red",
        fontFamily: "Arial"
    };
    return <h1 style={mystyle}>Hello</h1>;
}

export default Heading;