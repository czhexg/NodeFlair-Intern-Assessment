import React from "react";
import "../componentStyles/TechStack.css";

function TechStack(props) {
    return <span className="techstack">{props.tech.name}</span>;
}

export default TechStack;
