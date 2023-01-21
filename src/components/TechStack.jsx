import React from "react";

import techStackStyles from "../componentStyles/TechStack.module.css";

function TechStack(props) {
    return <span className={techStackStyles.techstack}>{props.tech.name}</span>;
}

export default TechStack;
