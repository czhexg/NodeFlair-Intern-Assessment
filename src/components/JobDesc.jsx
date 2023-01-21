import React from "react";

import "../componentStyles/JobDesc.module.css";

function JobDesc(props) {
    return <h1 className="JobDesc">{props.selectedListingTitle}</h1>;
}

export default JobDesc;
