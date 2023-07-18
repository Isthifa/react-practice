import React  from "react";


function Heading(){


const date=new Date();
const CurrentTime=date.getHours();
let greeting="";

const customStyle={
    border:"1px solid black",
    color:""};
    if(CurrentTime<12)
    {
        greeting="Good Morning";
        customStyle.color="red";
    }
    else if(CurrentTime<18)
    {
        greeting="Good Afternoon";
        customStyle.color="green";
    }
    else
    {
        greeting="Good Night";
        customStyle.color="blue";
    }
    return <h1 className="heading" style={customStyle}>{greeting}</h1>;
}

export default Heading;